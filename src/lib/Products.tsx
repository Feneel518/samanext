export const PRODUCTS = [
  {
    id: "ivm",
    name: "Voice assistance Unplugged!",
    mainHeading: "Integrated Voice Module",
    paragraph1:
      "The Integrated Voice Module offers a seamless solution for voice-activated control, with Aster, Bellis, and Dahlia tailored for diverse needs. From simple setups to advanced integrations, these modules bring effortless, intuitive smart control to your devices.",
    paragraph2:
      "The Integrated Voice Module offers offline voice processing, allowing reliable performance without internet dependency. It provides precise control for devices like fans and supports communication via UART or other protocols for seamless on device communication. Equipped with single-language support, it also offers the flexibility to upgrade to multiple languages. Advanced features like noise suppression and active gain control ensure clear voice recognition even in noisy environments. Use of digital microphone delivers high-quality audio input for optimal performance.",
    image: "/circuit.png",
    imageTitle: "Integrated Voice Module",
    imageDesc:
      "The SAMA Voice Module simplifies home control, appliance interactions smarter and more convenient.",
    featurepoints: [
      "Offline Voice Processing",
      "Effortless Device Integration",
      "Multilingual Flexibility",
    ],
    components: [
      {
        name: "Aster",
        image: "/Aster.png",
        features: [
          "Offline Voice processing without the need of Internet.",
          "Equipped with Internal Noise Compensation that enables it to recognize voice commands at high speeds and with mechanical noise from the fan.",
          "Supports up to 50 Voice Commands.",
          "Single language support.",
          "Made for integration into existing traditional appliances like fans, ACs, TVs, and Geysers.",
          "Supports communication with devices using UART or I2C.",
          "Compact form factor with a straightforward plug-and-play design, eliminating the need for a mobile application to operate.",
        ],
      },
      {
        name: "Bellis",
        image: "/Bellis.png",

        features: [
          "Offline voice recognition, functioning seamlessly without requiring an internet connection.",
          "Features built-in noise cancellation, allowing it to process voice commands accurately even at high speeds or amidst mechanical noise from fans.",
          "Dual language support.",
          "Designed for seamless integration with conventional household appliances, such as fans, air conditioners, televisions, and water heaters.",
          "Enables device communication via UART or I2C protocols.",
          "Designed with a compact form factor and a hassle-free plug-and-play setup, requiring no mobile application for operation.",
        ],
      },
      {
        name: "Dahlia",
        image: "/Dahlia.png",
        features: [
          "Operates offline with reliable voice recognition, eliminating the need for an internet connection.",
          "Equipped with advanced external noise cancellation, ensuring precise voice command recognition even in environments with nearby appliances like TVs or when people are conversing.",
          "Supports two languages for enhanced usability.",
          "Optimized for effortless integration into traditional home appliances such as fans, air conditioners, TVs, and water heaters.",
          "Facilitates communication with devices through UART or I2C interfaces.",
          "Features a sleek, compact design for efficient space utilization without the need of a mobile application.",
        ],
      },
    ],
  },
  {
    id: "avm",
    name: "Your voice can help you!",
    mainHeading: "Accessory Voice Module",
    paragraph1:
      "The Accessory Voice Module is a versatile, all-in-one solution designed to simplify and modernize the way you interact with IR-enabled devices. With advanced offline voice recognition and seamless mobile application integration, it eliminates the need for handheld remotes while delivering a customizable experience tailored to your needs.",
    paragraph2:
      "The Accessory Voice Module brings offline voice processing to control IR-enabled devices such as ACs, TVs, fans, and lights effortlessly through voice commands or a mobile application. With support for OTA updates and single-language recognition, it also offers the flexibility to select multiple languages to suit diverse requirements. Its mobile application allows comprehensive control over connected devices, including playback and streaming functionality for speakers, which can be designed to integrate Bluetooth and Wi-Fi audio streaming. Equipped with advanced noise cancellation and signal amplification algorithms, this module ensures exceptional voice clarity even in noisy environments. Its versatile design makes it suitable for integration into various IoT applications. This module is highly customizable to meet the unique demands of your business.",
    image: "/accessory1.png",
    imageTitle: "Integrated Voice Module",
    imageDesc:
      "The SAMA Voice Module simplifies home control, appliance interactions smarter and more convenient.",
    featurepoints: [
      "Offline Voice Processing",
      "IR Learning Capability",
      "Complimentary Mobile Application",
    ],
    components: [
      {
        name: "Eruca",
        image: "/Eruca.png",
        features: [
          "IR Learning ability that helps you learn IR handheld remotes of your TV, AC, etc., so that you don't have to manage multiple remotes.",
          "Delivers dependable offline voice recognition, fully functional without requiring an internet connection.",
          "Supports Over-the-Air (OTA) updates for ongoing improvements.",
          "Control devices effortlessly through intuitive voice commands or via a dedicated mobile application for added convenience and flexibility.",
          "Can be integrated into devices like speakers, enabling Bluetooth and Wi-Fi audio streaming.",
          "Advanced voice recognition ability that allows it to recognize voice commands during audio playback in a speaker.",
          "Utilizes AGC (Active Gain Control), AEC (Acoustic Echo Cancellation), VNR (Voice to Noise Ratio Estimator), and NS (Noise Suppression) for enhanced voice clarity in noisy environments.",
          "Customizable to meet business-specific needs.",
        ],
      },
    ],
  },
];

const components = [
  {
    name: "Aster",
    image: "/Aster.png",
    features: [
      "Built with a single digital microphone",
      "Single-language support for precise voice control",
      "Offline voice processing for consistent and reliable performance without internet",
      "Compact voice module for simplifying and smartening home appliances",
      "Supports seamless communication via UART or other protocols",
      "Ideal for integration into existing appliances like fans",
      "Equipped with noise suppression and active gain control for clear command recognition",
    ],
  },
  {
    name: "Bellis",
    image: "/Bellis.png",
    features: [
      "Offline voice processing with dual digital microphones",
      "Dual-language recognition for versatility among diverse users",
      "Advanced voice module for enhanced voice control in smart home devices",
      "Improved far-field recognition and superior command accuracy",
      "Supports seamless connectivity via UART or similar protocols",
      "Ideal for upgrading traditional appliances like fans into modern smart systems",
      "Equipped with noise suppression and active gain control for clear voice input",
    ],
  },
  {
    name: "Dahlia",
    image: "/Dahlia.png",
    features: [
      <div>
        Offline voice processing with
        <div className="underline underline-offset-2">
          four digital microphones
        </div>
      </div>,
      "Multi-language recognition for diverse users and global applications",
      "Premium voice module with next-generation voice capabilities",
      "Excels in far-field voice recognition for larger spaces",
      "Supports communication via UART or other protocols, ensuring seamless on-device connectivity.",
      "Transforms appliances like fans into intelligent systems",
      "Advanced noise suppression and active gain control for crystal-clear voice input",
    ],
  },
];

export type ProductType = (typeof PRODUCTS)[0];
export type ProductComponentsType = (typeof components)[0];
