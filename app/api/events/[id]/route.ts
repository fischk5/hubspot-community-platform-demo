import { NextRequest, NextResponse } from 'next/server';
import { eventData } from '@/dummyData/eventData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Properly await the params object
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    // Find the event by ID
    const eventId = parseInt(id);
    const event = eventData.find(event => event._id === eventId);

    // If event not found, return 404
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // Return the event
    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching event', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 