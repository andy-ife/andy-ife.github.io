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

// Keep Nigeria Clean Images
import kncMap from "@/assets/projects/knc/A_-_Map_view.jpg";
import kncBinDetails from "@/assets/projects/knc/B_-_Bin_details.jpg";
import kncAnalytics from "@/assets/projects/knc/C_-_Analytics.jpg";
import kncAI from "@/assets/projects/knc/D_-_AI_suggestions.jpg";
import kncLearn from "@/assets/projects/knc/E_-_Learn.jpg";
import kncLocation from "@/assets/projects/knc/F_-_Location.jpg";

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
    github?: string;
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
  {
    id: "keep-nigeria-clean",
    title: "Keep Nigeria Clean",
    shortDescription:
      "An IoT-powered smart waste management system with AI predictions, real-time bin monitoring, and a mobile app for optimizing collection routes in smart cities.",
    fullDescription: `Municipalities and waste disposal services face challenges such as littering, inefficient collection, and low recycling awareness. This study presents the development of an intelligent system that predicts waste generation rates using an XGBoost regressor. The dataset was built using manually collected data from smart bins and contextual features from existing datasets. The proposed method employs IoT and WiFi connectivity for data monitoring.

Each bin is equipped with sensors that track fill level, air quality, temperature, humidity, and location in real-time, with data transmitted to a cloud server. A mobile application complements the system with a map view of the bins, their statuses, AI predictions, waste trends, and educational materials on recycling and sustainability.

The results from the prototype bins showed efficient power draw (0.37A), providing up to 6 hours of runtime. The mobile app had a launch time of 0.8s and an installed size of 102 MB. The predictive model showed good results with an R² score of 0.35, and RMSE of 0.0012 (meaning that the difference between predicted and actual fill rate was ~0.12% of max bin capacity per second). The system had an overall latency of 15 seconds from input to output.

This integrated system offers a data-driven approach to optimise collection routes and reduce operational costs, providing a scalable solution for modern smart city initiatives.`,
    mainImage: kncMap,
    images: [
      { src: kncMap, caption: "Dynamic map view and routes to waste bins" },
      { src: kncBinDetails, caption: "Real-time waste bin details" },
      { src: kncAnalytics, caption: "Waste bin data history and trends" },
      { src: kncAI, caption: "AI-powered suggestions and alerts" },
      { src: kncLearn, caption: "Educational materials, videos, and articles on waste management" },
      { src: kncLocation, caption: "Real-time user location tracking" },
    ],
    tools: [
      "Flutter",
      "Dart",
      "Provider",
      "MVVM",
      "Mapbox",
      "Firebase",
      "Git",
      "GitHub",
      "Material UI",
      "Permissions",
      "fl_chart",
      "WebView",
    ],
    links: {
      github: "https://github.com/andy-ife/keep_nigeria_clean",
      youtube: "https://youtube.com/shorts/oO6jDNoLlGM?feature=share",
      extra: [
        { label: "Project Document", url: "#" }, // Placeholder - update with actual link
      ],
    },
  },
];
