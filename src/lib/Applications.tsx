export const APPLICATIONS = [
  {
    id: 0,
    heading: "Smart Home Solutions",
    features: [
      "Voice-controlled appliances: fans, ACs, TVs, and lights.",
      "Seamless integration into IoT devices like smart speakers for audio streaming and playback.",
      "Remote-free operation with multilingual support.",
    ],
    image: "/smartHome.jpg",
  },
  {
    id: 1,
    heading: "Consumer Electronics",
    features: [
      "Streamline device management by replacing handheld remotes with seamless voice-controlled operation for IR-enabled systems.",
      "Integration into entertainment systems for IR-based device control.",
      "Bluetooth and Wi-Fi streaming capabilities.",
    ],
    image: "/consumer.jpg",
  },
  {
    id: 2,
    heading: "Enterprise and Commercial Applications",
    features: [
      "Customizable voice solutions for specific industries like hospitality and retail.",
      "Simplifying device management in offices or shared spaces.",
      "Integration into branded IoT products for better user engagement.",
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
