export interface ProfileData {
    name: string,
    bio: string
}

export type NavItem = {
    displayName: string;
    targetNav: string;
    key: string;
}

export type SidebarProps = {
    navigationLinks: NavItem[];
}

export interface SubtopicCategoryType {
    title: string;
    _id: number;
    forum_id: number;
    subtitle: string;
    topics?: DiscussionTopicType[];
}

export interface TopicCategoryType {
    _id: number;
    topic_name: string;
    topic_description: string;
    last_updated: string;
    icon: string;
    subtopics?: SubtopicCategoryType[];
}

export interface DiscussionTopicType {
    _id: number;
    subtopic_id: number;
    content: string;
    author: string;
    posted_at: string;
}

export interface EventType {
    _id: number;
    name: string;
    date: string;
    isRegistered: boolean;
    description: string;
    featureImage: string;
    tags: string[];
    cost: number;
    location?: string;
    organizer?: string;
    maxAttendees?: number;
}