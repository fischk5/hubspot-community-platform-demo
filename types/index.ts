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

// Tour Guide Types
export type TourPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';

export interface TourStep {
    id: string;
    title: string;
    description: string | string[];
    path: string;
    position: TourPosition;
    highlightSelector?: string;
}

export interface TourConfig {
    steps: TourStep[];
}

export interface TourContextType {
    isActive: boolean;
    currentStepIndex: number;
    isCompleted: boolean;
    startTour: () => void;
    endTour: () => void;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
    resumeTour: () => void;
    currentStep: TourStep | null;
}