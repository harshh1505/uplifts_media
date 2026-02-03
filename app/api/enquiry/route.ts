import { NextResponse } from 'next/server';
import { z } from 'zod';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

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

        // Connect to MongoDB
        await connectDB();

        // Create enquiry
        const enquiry = await Enquiry.create({
            name: validatedData.name,
            email: validatedData.email,
            company: validatedData.company || "",
            message: validatedData.message,
        });

        // Convert MongoDB document to plain object with serializable _id
        const enquiryResponse = {
            id: enquiry._id.toString(),
            name: enquiry.name,
            email: enquiry.email,
            company: enquiry.company,
            message: enquiry.message,
            createdAt: enquiry.createdAt.toISOString(),
        };

        return NextResponse.json({ success: true, enquiry: enquiryResponse }, { status: 201 });
    } catch (error) {
        console.error('Error submitting enquiry:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
