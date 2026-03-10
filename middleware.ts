import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limit store (Note: This is per-instance/lambda)
const rateLimit = new Map();

// Helper to check rate limit
const checkRateLimit = (ip: string) => {
    const now = Date.now();
    const windowSize = 60 * 1000; // 1 minute
    const limit = 60; // 60 requests per minute

    const record = rateLimit.get(ip);

    if (!record) {
        rateLimit.set(ip, { count: 1, startTime: now });
        return true;
    }

    if (now - record.startTime > windowSize) {
        // Reset window
        rateLimit.set(ip, { count: 1, startTime: now });
        return true;
    }

    if (record.count >= limit) {
        return false;
    }

    record.count += 1;
    return true;
};

export function middleware(request: NextRequest) {
    const ip = request.ip || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || '';

    // 1. Bot Protection (Block known malicious scanners)
    const badBots = ['sqlmap', 'nikto', 'w3af', 'acunetix', 'nessus'];
    if (badBots.some(bot => userAgent.toLowerCase().includes(bot))) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    // 2. IP Traffic Filtering (Blacklist)
    const blockedIPs = (process.env.BLOCKED_IPS || '').split(',').filter(Boolean);
    if (blockedIPs.includes(ip)) {
        return new NextResponse('Forbidden: Your IP has been blocked.', { status: 403 });
    }

    // 3. Malicious Payload Filtering (SQLi, XSS, Directory Traversal)
    const urlString = request.nextUrl.pathname + request.nextUrl.search;
    const maliciousPatterns = [
        /(\%27)|(\')|(\-\-)|(\%23)|(#)/i, // Basic SQLi
        /((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/i, // Basic XSS
        /(\.\.\/)|(\.\.\\)/i, // Directory Traversal
        /(\/etc\/passwd)|(\/windows\/win\.ini)/i // LFI
    ];

    if (maliciousPatterns.some(pattern => pattern.test(urlString))) {
        return new NextResponse('Forbidden: Malicious payload detected.', { status: 403 });
    }

    // 4. Global Rate Limiting
    if (!checkRateLimit(ip)) {
        return new NextResponse('Too Many Requests: Rate limit exceeded', { status: 429 });
    }

    // 5. CDN Origin Protection (Prevent direct IP access bypassing CDN)
    const cdnSecret = process.env.CDN_SECRET;
    if (cdnSecret) {
        const incomingSecret = request.headers.get('x-cdn-secret');
        if (incomingSecret !== cdnSecret) {
            return new NextResponse('Forbidden: Direct origin access not allowed', { status: 403 });
        }
    }

    // 6. JavaScript Challenge System (Basic Anti-Bot)
    // Only apply challenge to HTML document navigation requests
    const acceptHeader = request.headers.get('accept') || '';
    if (process.env.ENABLE_JS_CHALLENGE === 'true' && acceptHeader.includes('text/html')) {
        const challengeCookie = request.cookies.get('_rise_challenge');
        if (!challengeCookie) {
            const challengeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Checking your browser...</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #000; color: #fff; }
        .loader { border: 4px solid #333; border-top: 4px solid #fff; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .container { text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="loader"></div>
        <h2>Verifying your connection...</h2>
        <p>Please wait while we check your browser.</p>
        <script>
            setTimeout(() => {
                document.cookie = "_rise_challenge=verified; path=/; max-age=86400; SameSite=Strict";
                window.location.reload();
            }, 1500);
        </script>
    </div>
</body>
</html>`;
            return new NextResponse(challengeHtml, {
                status: 200,
                headers: { 'Content-Type': 'text/html' }
            });
        }
    }

    // 7. Security Headers (CSP & Permissions) - Double check (Next.config handles most, but middleware is fail-safe)
    const response = NextResponse.next();

    // Strict Content Security Policy
    // We need to allow scripts from: self, 'unsafe-inline' (for Next.js hydration), 'unsafe-eval' (dev mode/some libs)
    // And external: maps.googleapis.com, unknown-analytics.com (if any)
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' blob: data: https://maps.gstatic.com https://maps.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
