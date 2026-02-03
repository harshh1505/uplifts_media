import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const enquirySchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = enquirySchema.parse(body);

        const enquiry = await prisma.enquiry.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                company: validatedData.company || "",
                message: validatedData.message,
            },
        });

        return NextResponse.json({ success: true, enquiry }, { status: 201 });
    } catch (error) {
        console.error('Error submitting enquiry:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
