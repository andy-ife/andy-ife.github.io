/**
 * Projects Data
 * 
 * This file contains all project information for the portfolio.
 * To add a new project:
 * 1. Import your images at the top
 * 2. Add a new Project object to the projects array
 * 
 * Each project has:
 * - id: unique identifier (string)
 * - title: project name
 * - shortDescription: brief description for the card (1-2 sentences)
 * - fullDescription: complete description for the modal
 * - mainImage: the primary image shown on the card
 * - images: array of {src, caption} for the carousel
 * - tools: array of technologies used
 * - links: object with optional playStore, appStore, youtube, website, and extra links
 */

// TMR Golden Living Images
import tmrMain from "@/assets/projects/tmr/A_-_Complete_telemedicine_app.jpg";
import tmrBooking from "@/assets/projects/tmr/B_-_Book_appointments.jpg";
import tmrMedicine from "@/assets/projects/tmr/C_-_Order_medicines.jpg";
import tmrHealth from "@/assets/projects/tmr/D_-_Log_health_data.jpg";
import tmrReminders from "@/assets/projects/tmr/E_-_Pill_reminders.jpg";
import tmrChat from "@/assets/projects/tmr/F_-_Real_time_chat.jpg";
import tmrEmergency from "@/assets/projects/tmr/G_-_Report_emergencies.jpg";
import tmrTracking from "@/assets/projects/tmr/H_-_Track_orders.jpg";
import tmrPrescription from "@/assets/projects/tmr/I_-_Upload_prescription.jpg";

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  images: ProjectImage[];
  tools: string[];
  links: {
    playStore?: string;
    appStore?: string;
    youtube?: string;
    website?: string;
    extra?: ProjectLink[];
  };
}

export const projects: Project[] = [
  {
    id: "tmr-golden-living",
    title: "TMR Golden Living",
    shortDescription:
      "A comprehensive telemedicine platform with Patient, Doctor, and Rider apps. Features video consultations, health tracking, medicine delivery, and smartwatch integration.",
    fullDescription: `TMR Golden Living is a comprehensive telemedicine platform revolutionizing remote healthcare access through its Patient, Doctor, and Rider apps. It enables users to book appointments, conduct real-time video consultations, manage chronic conditions like diabetes and hypertension, access medical history on-demand, order lab tests and medicines with home delivery, and monitor health metrics via smartwatch integration for blood pressure, heart rate, and glucose levels.

Additional features include reliable pill reminders with 100% alarm accuracy, emergency requests with zero error rates, secure data sharing, live chat, and enhanced UI for seamless navigation and delivery tracking.

The apps have driven significant growth, reaching over 1,200 users in three months with a 20% increase in revenue and downloads, including 1K+ downloads for the Patient app, 50+ for the Doctor app, and 10+ for the Rider app. The platform prioritizes convenience, eliminating hospital queues while providing continuous support for everyday health needs.`,
    mainImage: tmrMain,
    images: [
      { src: tmrMain, caption: "Complete telemedicine app for all your health needs" },
      { src: tmrBooking, caption: "Book remote or in-person appointments with certified doctors" },
      { src: tmrMedicine, caption: "Order medicines and tests for home delivery or self-pickup" },
      { src: tmrHealth, caption: "Log your health data" },
      { src: tmrReminders, caption: "Set pill reminders for timely medication alarms" },
      { src: tmrChat, caption: "Real-time chat with doctors" },
      { src: tmrEmergency, caption: "Report emergencies for quick assistance" },
      { src: tmrTracking, caption: "Track orders in real time" },
      { src: tmrPrescription, caption: "Upload a photo of your prescription and get medicines automatically added to your cart" },
    ],
    tools: [
      "Flutter",
      "Dart",
      "Firebase",
      "Azure",
      "GetX",
      "MVVM",
      "Dio",
      "Google Maps",
      "Jitsi",
      "Workmanager",
      "Play Install Referrer",
      "Socket IO",
      "Pegasus",
      "Flutterwave",
      "Integration Tests",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.tmrgoldenliving.appointment_patients&hl=en",
      appStore: "https://apps.apple.com/ng/app/tmr-golden-living/id6744154978",
      youtube: "https://youtu.be/FHenhtKpz8I",
      extra: [
        { label: "TMR Golden Living", url: "https://tmrgoldenliving.org" },
        { label: "TMR International Hospital", url: "https://tmrinternational.org/" },
      ],
    },
  },
  // Add more projects here following the same structure
];
