import { NextRequest, NextResponse } from 'next/server';
import { eventData } from '@/dummyData/eventData';

export async function GET(request: NextRequest) {
  try {
    // Return all events
    return NextResponse.json(eventData);
  } catch (error) {
    console.error('Error fetching events', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 