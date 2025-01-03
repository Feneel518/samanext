export const PRODUCTS = [
  {
    id: "ivm",
    name: "Voice assistance Unplugged!",
    mainHeading: "Integrated Voice Module",
    paragraph1:
      "The Integrated Voice Module offers a seamless solution for offline voice control, with Aster, Bellis, and Dahlia, tailored for diverse needs. Requiring no complex mobile app configuration setup to connect to cloud, these modules enable effortless and intuitive voice control to your devices..",
    paragraph2: "",
    image: "/circuit.png",
    imageTitle: "Integrated Voice Module",
    imageDesc:
      "The SAMA Voice Module simplifies home control, appliance interactions smarter and more convenient.",
    featurepoints: [
      "Offline Voice Processing",
      "Easy Device Integration",
      "Multilingual Support",
      "Noise cancellation",
    ],
    components: [
      {
        name: "Aster",
        image: "/Aster.png",
        features: [
          "Small form factor: 30 mm x 30 mm.",
          "Easy integration with device PCBA using interfacing option such as UART, I2C, SPI, GPIO.",
          "Any wakeword of choice.",
          "Voice Model upgrade via OTA.",
          "LED indication for wakeword detection.",
          "Internal noise cancelation for seamless voice experience in all the working modes of the device.",
          "Supports two Voice Models with up to 30 commands in each language. Option to switch to preferred language of choice.",
        ],
      },
      {
        name: "Bellis",
        image: "/Bellis.png",

        features: [
          "Small form factor: 30 mm x 30 mm.",
          "Easy integration with device PCBA using UART, I2C, SPI, GPIO.",
          "Any wakeword of choice.",
          "Voice Model upgrade via OTA.",
          "LED indication for wakeword detection.",
          "Internal noise cancelation for seamless voice experience in all the working modes of the device.",
          "Supports simultaneous recognition of voice commands in two languages.",
        ],
      },
      {
        name: "Dahlia",
        image: "/Dahlia.png",
        features: [
          "Easy integration with device PCBA using UART, I2C, SPI, GPIO.",
          "Any wakeword of choice.",
          "Voice Model upgrade via OTA.",
          "LED indication for wakeword detection.",
          "Advanced noise cancellation using beamforming techniques to compensate noises from external sources.",
          "Supports simultaneous recognition of voice commands in two languages.",
        ],
      },
    ],
  },
  {
    id: "avm",
    name: "Your voice can help you!",
    mainHeading: "Accessory Voice Module",
    paragraph1:
      "The Accessory Voice Module is a versatile, all-in-one solution designed to simplify and modernize the way you interact with your, currently in use, IR-enabled devices. With advanced offline audio front end and offline voice recognition, it eliminates the need for handheld remote controllers.",
    paragraph2: "",
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
          "Supports learning IR remote keys and mapping them to voice commands so that the existing devices can be controlled using voice.",
          "Bluetooth streaming for music playback and Bluetooth Low Energy for communication with mobile app.",
          "Connection to Wi-Fi for listening to Internet Radio Stations.",
          "Intuitive audio and visual cues for user feedback.",
          "Advanced noise cancellation using beamforming techniques to compensate noises from external sources.",
          "Implements Acoustic Echo Cancelation (AEC) for voice controlling the device while the speaker is on.",
          "Supports simultaneous recognition of voice commands in two languages.",
          "OTA upgrade for firmware and voice models.",
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
