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

// Geobud Images
import geobudGuess1 from "@/assets/projects/geobud/A_-_Guess_location.jpg";
import geobudGuess2 from "@/assets/projects/geobud/B_-_Guess_location.jpg";
import geobudGuess3 from "@/assets/projects/geobud/C_-_Guess_location.jpg";
import geobudDetails from "@/assets/projects/geobud/D_-_Location_details.jpg";
import geobudSave from "@/assets/projects/geobud/E_-_Save_photos.jpg";
import geobudProgress from "@/assets/projects/geobud/F_-_Track_progress.jpg";
import geobudThemes from "@/assets/projects/geobud/G_-_Dynamic_themes.jpg";

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
      "A comprehensive telemedicine platform with Patient, Doctor, and Rider apps. Features video consultations, health tracking, medicine delivery, and smartwatch integration. Grown to 1200+ users in 3 months, and 1K+ downloads on Play Store.",
    fullDescription: `TMR Golden Living is an all-inclusive suite of telemedicine apps that is transforming the means of accessing healthcare online. There are 3 apps in the suite: Patient, Doctor, and Rider. Users can book an appointment, conduct online consultancy through video calls, monitor chronic diseases like diabetes and hypertension, access healthcare records, order lab tests and medicines, and track health data using a smartwatch for BP, heart rate, and sugar levels.

Other features include accurate medication reminders, emergency requests to the hospital from anywhere, live chat support, and a great UX.

The applications reached above 1,200 users in only three months, with a 20% rise in revenue and downloads, including 1K+ for the Patient app, 50+ for the Doctor app, and 10+ for the Rider app. The platform provides value by offering aid at all times without the need to visit the hospital.`,
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
      "Firebase Messaging",
      "Firebase Authentication",
      "Firebase Analytics",
      "Azure CI/CD",
      "GetX",
      "MVVM",
      "Dio",
      "Google Maps",
      "Jitsi",
      "Workmanager",
      "Play Install Referrer",
      "socket_io",
      "Pegasus",
      "Flutterwave",
      "Integration Tests",
      "Unit Tests"
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
      "An IoT waste management system with real-time bin monitoring, AI waste generation predictions, and a mobile app for optimizing pickup routes.",
    fullDescription: `Littering, inefficient collection and low recycling awareness are waste management problems which municipalities face daily. Here, I present the development of an intelligent system that predicts waste generation rates using an XGBoost regressor.\n\nThe dataset was built using manually collected data from the smart bins and contextual features from existing datasets. IoT and WiFi connectivity were used for real time data monitoring.\n\nEach bin is equipped with sensors that track fill level, air quality, temperature, humidity, and location, with data sent to Firebase regularly.\n\nThe mobile app complements the system with a map view of the bins, their statuses, routing, waste trends, and educational materials on recycling and sustainability.`,
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
      "Firebase Functions",
      "Firebase Database",
      "Firebase Firestore",
      "Material UI",
      "fl_chart",
      "rxdart",
      "WebView",
      "ESP32",
      "Arduino C",
    ],
    links: {
      github: "https://github.com/andy-ife/keep_nigeria_clean",
      youtube: "https://youtube.com/shorts/oO6jDNoLlGM?feature=share",
      extra: [
        { label: "Project Document", url: "https://docs.google.com/document/d/188F-E3USkaq2wEWMXKyWnr19hmszsUr7E6zmW3j87Zs/edit?usp=sharing" },
      ],
    },
  },
  {
    id: "geobud",
    title: "Geobud",
    shortDescription:
      "A fun geography quiz app where you guess countries from photos of famous landmarks. Features offline play, photo saving, dark/light themes, and progress tracking. Built for Android with Jetpack Compose.",
    fullDescription: `Geobud is a simple fun geography quiz app that lets you guess countries from their photos, combining education and entertainment.

Users can test their knowledge by guessing countries based on captivating photos of places and famous landmarks. The app allows you to save your favorite photos directly to your phone storage. It also offers limited offline capability through photo caching. The app supports both dark and light modes.

Built with a single activity design and a clean, simple Jetpack Compose UI, it delivers a seamless and intuitive user experience. Finally, you can reset your progress at any time, allowing you to start fresh and enjoy Geobud all over again!`,
    mainImage: geobudGuess1,
    images: [
      { src: geobudGuess1, caption: "Guess the country from famous landmarks" },
      { src: geobudGuess2, caption: "Test your knowledge with world monuments" },
      { src: geobudGuess3, caption: "Explore iconic locations around the globe" },
      { src: geobudDetails, caption: "Learn interesting facts about each location" },
      { src: geobudSave, caption: "Save your favorite photos to phone storage" },
      { src: geobudProgress, caption: "Track your progress through the quiz" },
      { src: geobudThemes, caption: "Dynamic themes with dark and light modes" },
    ],
    tools: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "ViewModel",
      "Coroutines",
      "Flows",
      "LiveData",
      "Retrofit",
      "Room",
      "WorkManager",
      "Hilt",
      "Preferences Datastore",
      "Coil",
      "Gson",
      "Material UI",
      "Lottie",
      "MediaPlayer",
    ],
    links: {
      github: "https://github.com/andy-ife/Geobud",
      youtube: "https://youtube.com/shorts/I51Jtdkn9lc?feature=share",
    },
  },
];
