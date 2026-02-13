import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define schema for validation
const enquireSchema = z.object({
    name: z.string().min(2, "Name is too short").max(100),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
    student_type: z.enum(["Student", "Parent"]),
    exam_interest: z.enum(["JEE", "NEET", "Foundation"]),
    message: z.string().max(1000).optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Validate Input (Server-side)
        const result = enquireSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid input", details: result.error.flatten() },
                { status: 400 }
            );
        }

        const cleanData = result.data;

        // 2. Forward to Formspree (Backend-to-Backend)
        // This keeps the Form ID hidden from the client
        const formspreeUrl = "https://formspree.io/f/mjggwoqz";

        const forwardingResponse = await fetch(formspreeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(cleanData)
        });

        if (!forwardingResponse.ok) {
            throw new Error('Failed to submit to Formspree');
        }

        return NextResponse.json({ success: true, message: "Enquiry received" });

    } catch (error) {
        console.error("Enquiry Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
