/**
 * Profile Data
 * 
 * This file contains personal information for the portfolio.
 * Update these values to customize your portfolio.
 */

import headshot from "@/assets/headshot.jpg";

export const profile = {
  name: "Ifeoluwa Omole",
  greeting: "Hello",
  headshot: headshot,
  
  introduction: `Android & Flutter developer with 2 years of experience building the complete telemedicine mobile app for TMR International Hospital, Uganda. Has contributed to the open-source Lichess and Wikimedia Commons apps. Has worked on software developer teams at NITDA Nigeria and Federal University of Technology, Minna.`,
  
  // Update these with your actual social handles
  social: {
    github: "https://github.com/", // Add your GitHub username
    linkedin: "https://linkedin.com/in/", // Add your LinkedIn username
    twitter: "https://twitter.com/", // Add your Twitter handle
    email: "hello@example.com", // Add your email
  },
  
  footer: {
    tagline: "Building mobile experiences that matter.",
    copyright: `© ${new Date().getFullYear()} Ifeoluwa Omole. All rights reserved.`,
  },
};
