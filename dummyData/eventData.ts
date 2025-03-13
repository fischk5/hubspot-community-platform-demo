import { EventType } from "@/types";

export const eventData: EventType[] = [
  {
    _id: 1001,
    name: "HubSpot CRM Mastery Workshop",
    date: "2025-04-15T14:00:00Z",
    isRegistered: false,
    description: "Learn how to maximize your sales pipeline with advanced HubSpot CRM techniques. This hands-on workshop will cover lead scoring, deal automation, and custom reporting dashboards.",
    featureImage: "https://storage.googleapis.com/kevinafischer_public/hubspot-demo-application/roundtables.png",
    tags: ["CRM", "Sales", "Workshop"],
    cost: 149.99,
    location: "Virtual",
    organizer: "HubSpot Academy",
    maxAttendees: 100
  },
  {
    _id: 1002,
    name: "Content Marketing Summit 2025",
    date: "2025-05-22T09:00:00Z",
    isRegistered: true,
    description: "Join industry leaders for a full-day summit on content marketing strategies that drive engagement and conversion. Discover the latest trends in SEO, social media, and content creation.",
    featureImage: "https://storage.googleapis.com/kevinafischer_public/hubspot-demo-application/conference.png",
    tags: ["Marketing", "Content", "SEO"],
    cost: 299.99,
    location: "Boston Convention Center",
    organizer: "HubSpot Marketing Team",
    maxAttendees: 500
  },
  {
    _id: 1003,
    name: "HubSpot Developer Conference",
    date: "2025-06-10T10:00:00Z",
    isRegistered: false,
    description: "A technical deep-dive for developers working with the HubSpot platform. Sessions will cover API integration, custom module development, and extending HubSpot functionality.",
    featureImage: "https://storage.googleapis.com/kevinafischer_public/hubspot-demo-application/hackers.png",
    tags: ["Development", "API", "Technical"],
    cost: 199.99,
    location: "Cambridge Innovation Center",
    organizer: "HubSpot Developer Relations",
    maxAttendees: 250
  },
  {
    _id: 1004,
    name: "Customer Service Excellence Webinar",
    date: "2025-04-05T16:00:00Z",
    isRegistered: true,
    description: "Elevate your customer service with HubSpot Service Hub. This webinar covers ticket automation, knowledge base optimization, and customer feedback collection.",
    featureImage: "https://storage.googleapis.com/kevinafischer_public/hubspot-demo-application/customerservice.png",
    tags: ["Service", "Webinar", "Free"],
    cost: 0,
    location: "Virtual",
    organizer: "HubSpot Customer Success Team",
    maxAttendees: 1000
  },
  {
    _id: 1005,
    name: "HubSpot INBOUND 2025",
    date: "2025-09-18T08:00:00Z",
    isRegistered: false,
    description: "The flagship annual event for all things HubSpot. Three days of inspiring keynotes, practical workshops, and networking opportunities with the global HubSpot community.",
    featureImage: "https://storage.googleapis.com/kevinafischer_public/hubspot-demo-application/inbound.png",
    tags: ["Conference", "Networking", "All-Access"],
    cost: 999.99,
    location: "Boston Exhibition Center",
    organizer: "HubSpot Events Team",
    maxAttendees: 10000
  },
  {
    _id: 1006,
    name: "E-commerce Integration Workshop",
    date: "2025-05-08T13:00:00Z",
    isRegistered: false,
    description: "Learn how to seamlessly integrate your e-commerce platform with HubSpot for unified customer data and automated marketing workflows.",
    featureImage: "https://storage.googleapis.com/kevinafischer_public/hubspot-demo-application/ecommerce.png",
    tags: ["E-commerce", "Integration", "Workshop"],
    cost: 149.99,
    location: "Virtual",
    organizer: "HubSpot Partners Network",
    maxAttendees: 150
  }
]; 