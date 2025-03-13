import { TopicCategoryType } from "@/types";

export const topicCategories: TopicCategoryType[] = [
    {
        _id: 1234455,
        topic_name: "Product Discussion",
        topic_description: "Talk about the latest developments in the Tetheros suite of products.",
        last_updated: "2025-03-13T10:30:00Z",
        icon: "product"
    },
    {
        _id: 1234456,
        topic_name: "Feature Requests",
        topic_description: "Suggest new features or improvements for Tetheros products.",
        last_updated: "2025-03-12T15:45:00Z",
        icon: "request"
    },
    {
        _id: 1234457,
        topic_name: "Technical Support",
        topic_description: "Get help with installation, troubleshooting, and technical issues.",
        last_updated: "2025-03-13T09:15:00Z",
        icon: "support"
    },
    {
        _id: 1234458,
        topic_name: "User Community",
        topic_description: "Connect with other Tetheros users and share experiences.",
        last_updated: "2025-03-11T22:20:00Z",
        icon: "community"
    }
];