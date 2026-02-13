import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limit store (Note: This is per-instance/lambda)
const rateLimit = new Map();

// Helper to check rate limit
const checkRateLimit = (ip: string) => {
    const now = Date.now();
    const windowSize = 60 * 1000; // 1 minute
    const limit = 5; // 5 requests per minute

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

    // 2. API Rate Limiting
    if (request.nextUrl.pathname.startsWith('/api/')) {
        if (!checkRateLimit(ip)) {
            return new NextResponse('Too Many Requests', { status: 429 });
        }
    }

    // 3. Security Headers (CSP & Permissions) - Double check (Next.config handles most, but middleware is fail-safe)
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
