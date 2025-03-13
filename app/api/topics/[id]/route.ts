import { NextRequest, NextResponse } from 'next/server';
import { topicCategories } from '@/dummyData/topicCategories';
import { subtopicCategories } from '@/dummyData/subtopicCategories';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Properly await the params object
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    // Find the topic by ID
    const topicId = parseInt(id);
    const topic = topicCategories.find(topic => topic._id === topicId);

    // If topic not found, return 404
    if (!topic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    // Get subtopics for this topic
    const matchingSubtopics = subtopicCategories.filter(
      subCategory => subCategory.forum_id === topic._id
    );

    // Return the topic with its subtopics
    return NextResponse.json({
      ...topic,
      subtopics: matchingSubtopics
    });
  } catch (error) {
    console.error('Error fetching topic', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 