"use client"

import { useState } from 'react'
import styles from './MemberView.module.css'
import Link from 'next/link'
import { 
  FaUsers, 
  FaChartLine, 
  FaComments, 
  FaCalendarAlt, 
  FaArrowRight, 
  FaCheckCircle,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaCog,
  FaCommentDots,
  FaCalendarDay
} from 'react-icons/fa'

export default function MemberView() {
    return (
        <div className={styles.container}>
            {/* Header section */}
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Community Hub</h1>
                    <p>Welcome, Kevin!</p>
                </div>
            </div>

            {/* Quick navigation */}
            <div className={styles.quickNavContainer}>
                <div className={styles.quickNav}>
                    <Link href="/topics" className={styles.navButton}>
                        <FaCommentDots /> Topics
                    </Link>
                    <Link href="/events" className={styles.navButton}>
                        <FaCalendarDay /> Events
                    </Link>
                    <Link href="/member-settings" className={styles.navButton}>
                        <FaCog /> Settings
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <div className={styles.mainContent}>
                {/* Welcome card */}
                <div className={styles.welcomeCard}>
                    <div className={styles.welcomeContent}>
                        <h2>Why HubSpot Needs a Community Management Platform</h2>
                        <p>
                            Enhance your product suite with a powerful community management tool that aligns perfectly with 
                            HubSpot's inbound philosophy and helps businesses grow better through meaningful customer engagement.
                        </p>
                        <Link href="/topics" className={styles.exploreLink}>
                            Explore the demo <FaArrowRight />
                        </Link>
                    </div>
                    <div className={styles.welcomeImage}>
                        <div className={styles.imagePlaceholder}>
                            <FaUsers size={80} color="#ff7a59" />
                        </div>
                    </div>
                </div>

                {/* Market opportunity section */}
                <div className={styles.opportunitySection}>
                    <h3 className={styles.sectionTitle}>Market Size & Growth Opportunity</h3>
                    <div className={styles.opportunityContent}>
                        <p className={styles.opportunityText}>
                            The online community management software market represents a substantial opportunity for HubSpot, 
                            currently valued at over <strong>$6.7 billion in 2024</strong> and projected to reach <strong>$19 billion by 2030</strong> (<a href="https://www.verifiedmarketresearch.com/product/online-community-management-software-market/">verifiedmarketresearch.com</a>), 
                            growing at an impressive CAGR of over 14%.
                        </p>
                        <div className={styles.opportunityMetrics}>
                            <div className={styles.metric}>
                                <span className={styles.metricValue}>$19B+</span>
                                <span className={styles.metricLabel}>projected market size by 2030</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricValue}>14%+</span>
                                <span className={styles.metricLabel}>CAGR through 2031</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricValue}>$6.7B</span>
                                <span className={styles.metricLabel}>Estimated market size in 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Value proposition cards */}
                <h3 className={styles.sectionTitle}>Key Benefits for HubSpot</h3>
                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <FaChartLine />
                        </div>
                        <h4>Strategic Alignment</h4>
                        <p>
                            With almost 250,000 paying customers across 135+ countries and $2.63 billion in revenue (2024), 
                            HubSpot has the customer base and financial strength to successfully launch and monetize 
                            a community platform.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <FaComments />
                        </div>
                        <h4>Consumer Demand</h4>
                        <p>
                            76.6% of consumers wish their favorite brands had a community, and 67.4% feel more connected 
                            through community than through traditional social media—aligning perfectly with HubSpot's 
                            inbound methodology.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <FaCalendarAlt />
                        </div>
                        <h4>Proven ROI</h4>
                        <p>
                            Online communities generate an average of $331,000 per year in revenue with gross margins 
                            as high as 65%, allowing businesses to potentially recover their investment within just seven months.
                        </p>
                    </div>
                </div>

                {/* Integration section */}
                <h3 className={styles.sectionTitle}>Seamless Integration with HubSpot's Ecosystem</h3>
                <div className={styles.integrationSection}>
                    <div className={styles.integrationContent}>
                        <div className={styles.integrationItem}>
                            <FaCheckCircle className={styles.checkIcon} />
                            <div>
                                <h4>Marketing Hub</h4>
                                <p>Leverage community-generated content in marketing campaigns, boosting SEO and social proof while providing authentic voice-of-customer material.</p>
                            </div>
                        </div>
                        <div className={styles.integrationItem}>
                            <FaCheckCircle className={styles.checkIcon} />
                            <div>
                                <h4>Sales Hub</h4>
                                <p>Identify highly engaged prospects, personalize outreach based on community interests, and prioritize leads showing the most active participation.</p>
                            </div>
                        </div>
                        <div className={styles.integrationItem}>
                            <FaCheckCircle className={styles.checkIcon} />
                            <div>
                                <h4>Service Hub</h4>
                                <p>Reduce support costs through self-service and peer-to-peer assistance, with 59% of organizations using online communities to provide customer support.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.integrationImage}>
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.hubspotLogo}>
                                <div className={styles.logoCircle}></div>
                                <div className={styles.logoCircle}></div>
                                <div className={styles.logoCircle}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business value section */}
                <h3 className={styles.sectionTitle}>Business Value & ROI of Online Communities</h3>
                <div className={styles.opportunitySection}>
                    <div className={styles.opportunityContent}>
                        <p className={styles.opportunityText}>
                            The business case for online communities is compelling, with robust data supporting their ROI potential. 
                            Companies with vibrant online communities have reported revenue increases of up to 50% compared to those 
                            without such platforms. Additionally, businesses utilizing online community management software have 
                            experienced an average 30% boost in user engagement compared to competitors lacking these tools.
                        </p>
                        <div className={styles.opportunityMetrics}>
                            <div className={styles.metric}>
                                <span className={styles.metricValue}>50%</span>
                                <span className={styles.metricLabel}>potential revenue increase for companies with vibrant online communities</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricValue}>90%</span>
                                <span className={styles.metricLabel}>of brands utilize community members' suggestions to improve products and services</span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricValue}>85%</span>
                                <span className={styles.metricLabel}>of brand owners report that having a branded online community provides greater trust</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA section */}
                <div className={styles.ctaSection}>
                    <h3>Ready to explore how a Community Hub would enhance HubSpot's product suite?</h3>
                    <p>This demo showcases the potential of integrating community management into HubSpot's ecosystem.</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/events" className={styles.primaryButton}>
                            Explore Events
                        </Link>
                        <Link href="/topics" className={styles.secondaryButton}>
                            Browse Discussions
                        </Link>
                    </div>
                </div>

                {/* Social links */}
                <div className={styles.socialSection}>
                    <h3>Connect with Kevin Fischer</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://kevinafischer.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaYoutube size={24} />
                            <span>YouTube</span>
                        </a>
                        <a href="https://kevinafischer.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaGithub size={24} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://kevinafischer.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaLinkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className={styles.disclaimer}>
                    <p>
                        This is not an official HubSpot product. This is a demo created by Kevin Fischer to showcase a 
                        potential product concept. Visit <a href="https://hubspot.com" target="_blank" rel="noopener noreferrer">hubspot.com</a> for 
                        official HubSpot products and services.
                    </p>
                </div>
            </div>
        </div>
    )
}