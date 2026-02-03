import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const subscriberSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = subscriberSchema.parse(body);

        // Check if email already exists
        const existing = await prisma.subscriber.findUnique({
            where: { email: validatedData.email },
        });

        if (existing) {
            return NextResponse.json({ success: true, message: 'Already subscribed' }, { status: 200 });
        }

        const subscriber = await prisma.subscriber.create({
            data: {
                email: validatedData.email,
            },
        });

        return NextResponse.json({ success: true, subscriber }, { status: 201 });
    } catch (error) {
        console.error('Error submitting subscription:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
