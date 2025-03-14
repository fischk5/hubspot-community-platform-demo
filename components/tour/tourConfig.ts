import { TourConfig } from '@/types';

const tourConfig: TourConfig = {
  steps: [
    {
      id: 'welcome',
      title: 'Close the gap in your product ecosystem with a community platform that aligns perfectly with your inbound philosophy',
      description: [
        'This demonstration showcases how a community management platform would complement HubSpot\'s existing tools while fulfilling your mission to help companies grow better.',
        'By owning the community experience, you can provide customers with a complete solution that enhances engagement throughout the entire customer lifecycle.',
        '(note: this is a concept demonstration, not an official HubSpot product)'
      ],
      path: '/',
      position: 'center',
    },
    {
      id: 'topics-overview',
      title: 'Structured topics create a competitive advantage that would strengthen HubSpot\'s position in the CRM market',
      description: [
        'Topic-based organization provides the foundation for meaningful customer discussions that standalone platforms like Mighty Networks offer without CRM integration.',
        'This feature allows your customers to organize conversations by product, feature, or industry—creating valuable segmentation data that feeds directly into your CRM.',
        'HubSpot could differentiate by creating an integrated community platform that connects directly with their Marketing, Sales, and Service Hubs in ways competitors haven\'t fully realized'
      ],
      path: '/topics',
      position: 'bottom-right',
      highlightSelector: '.topicsList',
    },
    {
      id: 'discussion-detail',
      title: 'Threaded discussions enhance your Service Hub by enabling peer-to-peer support that reduces costs',
      description: [
        'These discussion threads create a natural extension of your Service Hub, allowing customers to receive support from peers and reducing ticket volume.',
        'Every interaction becomes trackable customer data in the HubSpot CRM, providing insights that inform product development and marketing strategies.',
        'This integration would create a unified customer view that enhances HubSpot\'s existing tools, offering advantages over standalone platforms that require additional integration work'
      ],
      path: '/topics/1234455',
      position: 'bottom-right',
      highlightSelector: '.contentContainer',
    },
    {
      id: 'events-page',
      title: 'Community events integrate easily with Marketing Hub to drive engagement and retention',
      description: [
        'This events functionality extends your Marketing Hub\'s capabilities, allowing businesses to host and manage community gatherings that build brand loyalty.',
        'Integration would extend HubSpot\'s existing event capabilities to enable more comprehensive synchronization of community event participation with contact records',
        'By offering this capability, you provide customers with a branded alternative to third-party platforms, ensuring they maintain control of their community data.'
      ],
      path: '/events',
      position: 'bottom-left',
      highlightSelector: '.eventsContainer',
    },
    {
      id: 'settings-page',
      title: 'Platform settings align with HubSpot\'s existing subscription model, creating natural monetization opportunities',
      description: [
        'These customization options can be monetized through inclusion in higher-tier plans or as scalable add-ons based on community size.',
        'The integration settings connect community data with your existing Hubs, increasing customer stickiness and reducing churn.',
        'By offering branded community spaces, you help customers move away from third-party platforms like Facebook Groups, ensuring they own their community data and experience.'
      ],
      path: '/member-settings',
      position: 'top-left',
      highlightSelector: '.settingsContainer',
    },
    {
      id: 'contact-info',
      title: 'Let\'s Connect!',
      description: [
        'Thanks for exploring this HubSpot Community Platform concept!',
        'This community platform concept addresses a clear gap in HubSpot\'s current product suite while aligning perfectly with your inbound philosophy.',
        'Kevin Fischer',
        'kevin@tetheros.com | (612) 860-1057',
      ],
      path: '/',
      position: 'center',
    },
  ]
};

export default tourConfig; 