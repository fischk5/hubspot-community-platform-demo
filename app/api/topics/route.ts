import { NextRequest, NextResponse } from 'next/server';
import { topicCategories } from '@/dummyData/topicCategories';
import { subtopicCategories } from '@/dummyData/subtopicCategories';

export async function GET(request: NextRequest) {
    try {
        let categories = topicCategories
        for (let i = 0; i < categories.length; i++) {
            const matchingSubtopics = subtopicCategories.filter(subCategory => subCategory.forum_id === categories[i]._id)
            categories[i]["subtopics"] = matchingSubtopics
        }
        return NextResponse.json(topicCategories)
    } catch (error) {
        console.error('Error fetching profile', error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}