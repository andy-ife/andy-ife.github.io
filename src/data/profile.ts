/**
 * Profile Data
 * 
 * This file contains personal information for the portfolio.
 * Update these values to customize your portfolio.
 */

import headshot from "@/assets/headshot.jpg";

export const profile = {
  name: "Ifeoluwa Omole",
  greeting: "Hello.",
  headshot: headshot,

  introduction: `Android & Flutter developer with 2 years of experience building the complete telemedicine mobile app for TMR International Hospital, Uganda. Has contributed to the open-source Lichess and Wikimedia Commons apps. Has worked on software developer teams at NITDA Nigeria and Federal University of Technology, Minna.`,

  social: {
    github: "https://github.com/andy-ife",
    linkedin: "https://linkedin.com/in/ifeoluwa-omole-6070662a0/",
    twitter: "https://x.com/andyy_ife",
    email: "iomole3@gmail.com",
  },

  footer: {
    tagline: "I will turn your app idea into reality.",
    copyright: `© ${new Date().getFullYear()} Ifeoluwa Omole. All rights reserved.`,
  },
};
