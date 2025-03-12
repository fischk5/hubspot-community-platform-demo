import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
    try {
        const db = await connectToDatabase(); 
        const profile = await db.collection('profiles').findOne({});
        if (!profile) return NextResponse.json({ error: "Profile not found" }, { status: 404 })
        return NextResponse.json(profile)
    } catch (error) {
        console.error('Error fetching profile', error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const db = await connectToDatabase();
        const newProfile = await request.json();
        const result = await db.collection('profiles').insertOne(newProfile);
        return NextResponse.json({ insertedId: result.insertedId }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 })
    }
}

