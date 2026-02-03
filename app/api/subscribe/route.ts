import { NextResponse } from 'next/server';
import { z } from 'zod';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/lib/models/Subscriber';

const subscriberSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = subscriberSchema.parse(body);

        // Connect to MongoDB
        await connectDB();

        // Check if email already exists
        const existing = await Subscriber.findOne({ 
            email: validatedData.email.toLowerCase() 
        });

        if (existing) {
            return NextResponse.json({ success: true, message: 'Already subscribed' }, { status: 200 });
        }

        // Create subscriber
        const subscriber = await Subscriber.create({
            email: validatedData.email,
        });

        // Convert MongoDB document to plain object with serializable _id
        const subscriberResponse = {
            id: subscriber._id.toString(),
            email: subscriber.email,
            createdAt: subscriber.createdAt.toISOString(),
        };

        return NextResponse.json({ success: true, subscriber: subscriberResponse }, { status: 201 });
    } catch (error) {
        console.error('Error submitting subscription:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
