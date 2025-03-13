import { NextRequest, NextResponse } from 'next/server';
import { topicCategories } from '@/dummyData/topicCategories';
import { subtopicCategories } from '@/dummyData/subtopicCategories';
import { topicDiscussions } from '@/dummyData/topicDiscussions';
import { DiscussionTopicType } from '@/types';

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

    // Get discussions for each subtopic
    const subtopicsWithDiscussions = matchingSubtopics.map(subtopic => {
      const discussions = topicDiscussions.filter(
        (discussion: DiscussionTopicType) => discussion.subtopic_id === subtopic._id
      );
      
      return {
        ...subtopic,
        topics: discussions
      };
    });

    // Return the topic with its subtopics and discussions
    return NextResponse.json({
      ...topic,
      subtopics: subtopicsWithDiscussions
    });
  } catch (error) {
    console.error('Error fetching topic', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 