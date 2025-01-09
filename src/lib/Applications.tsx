export const APPLICATIONS = [
  {
    id: 0,
    heading: "Smart Home Solutions",
    features: [
      "Effortless comfort: Control smart lighting and thermostats with your voice.",
      "Seamless automation: Offline voice-enabled gateways manage all your devices.",
      "Enhanced security: Voice authentication for smart locks ensures personalized access.",
    ],
    image: "/smartHome.jpg",
  },
  {
    id: 1,
    heading: "Consumer Electronics",
    features: [
      "Users can simply speak in elevators, their desired floor or destination using voice commands",
      "Integration into entertainment systems for IR-based device control.",
      "Bluetooth and Wi-Fi streaming capabilities.",
    ],
    image: "/consumer.jpg",
  },
  {
    id: 2,
    heading: "Enterprise and Commercial Applications",
    features: [
      "Elevators that listen: Command your floor with just your voice.",
      "Smart warehouses: Voice-controlled forklifts and seamless inventory management.",
      "Revolutionized manufacturing: Voice-powered control for conveyors and beyond.",
    ],
    image: "/industry.jpg",
  },
  {
    id: 3,
    heading: "IoT and Emerging Technologies",
    features: [
      "Modular design for easy adaptation into IoT devices.",
      "Advanced features like offline voice processing and OTA updates for dynamic environments.",
      "Advance noise cancellation technologies used",
    ],
    image: "/iot.jpg",
  },
  {
    id: 4,
    heading: "Hospitality",
    features: [
      "Hands-free comfort: Control room settings and services with voice.",
      "Seamless ordering: Request room service effortlessly by voice.",
      "Real-time translation: Speak your language, hotel staff understands.",
    ],
    image: "/hospitality.jpg",
  },
  {
    id: 5,
    heading: "Healthcare",
    features: [
      "Voice-controlled devices: Easily manage infusion pumps and ventilators with simple commands.",
      "Efficient documentation: Dictate patient notes and reports for quick transcription.",
      "Smart imaging: Navigate medical imaging software hands-free with voice commands.",
    ],
    image: "/health.jpg",
  },
  {
    id: 6,
    heading: "Custom Solutions",
    features: [
      "Integration into niche devices for specific applications.",
      "Multilingual support for global markets.",
      "Voice-based control for specialized workflows.",
    ],
    image: "/custom.jpg",
  },
];

export type ApplicationType = (typeof APPLICATIONS)[0];
