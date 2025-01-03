import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Heading from "./ui/heading";
import { CheckCheck } from "lucide-react";
import Paragraph from "./ui/Paragraph";

interface JourneyProps {}

const Journey: FC<JourneyProps> = ({}) => {
  return (
    <section className="px-4 lg:px-8 dark:bg-white bg-background ">
      <div className="py-10 lg:py-20 dark:text-background text-white flex lg:flex-row flex-col max-lg:gap-10">
        <div className="lg:max-w-[550px] w-full lg:border-r ">
          <Heading className="gray-grad dark:text-black max-lg:text-center">
            <h1>Our Journey</h1>
          </Heading>
        </div>
        <div className="lg:px-20 px-8 flex flex-col gap-8 divide-y divide-gray-200/20">
          <div className=" flex flex-col gap-2">
            <Heading className="gray-grad dark:text-black ">
              <h1>2019</h1>
            </Heading>
            <Paragraph className="text-white dark:text-background ">
              <p>
                {" "}
                SAMA was founded with the mission to revolutionize audio and
                voice technologies. With a focus on innovation, we set out to
                develop solutions that combine advanced engineering with
                real-world usability. From the beginning, our goal was to
                redefine how users interact with technology using seamless
                voice-enabled solutions.
              </p>
            </Paragraph>
          </div>
          <div className=" flex flex-col gap-2">
            <Heading className="gray-grad dark:text-black ">
              <h1>2019-2022</h1>
            </Heading>
            <Paragraph className="text-white dark:text-background">
              <p>
                {" "}
                During this period, SAMA specialized in designing
                Alexa-certified, IoT-based smart speaker modules for the German
                market. Our advanced modules offered seamless integration with
                IoT ecosystems, focusing on high-quality sound and intuitive
                user experiences. These products earned recognition for their
                compliance with global standards and innovation in the smart
                speaker domain.
              </p>
            </Paragraph>
          </div>
          <div className=" flex flex-col gap-2">
            <Heading className="gray-grad dark:text-black ">
              <h1>2020 </h1>
            </Heading>
            <Paragraph className=" text-white dark:text-background">
              <p>
                {" "}
                SAMA was founded with the mission to revolutionize audio and
                voice technologies. With a focus on innovation, we set out to
                develop solutions that combine advanced engineering with
                real-world usability. From the beginning, our goal was to
                redefine how users interact with technology using seamless
                voice-enabled solutions.
              </p>
            </Paragraph>
          </div>
          <div className=" flex flex-col gap-2">
            <Heading className="gray-grad dark:text-black ">
              <h1>2023 </h1>
            </Heading>
            <Paragraph className="text-white dark:text-background">
              <p>
                {" "}
                In 2023, SAMA began developing cost-optimized offline voice
                modules equipped with excellent noise cancellation and
                state-of-the-art voice recognition. These modules are tailored
                for controlling home appliances like fans, air conditioners, and
                other IoT devices. By focusing on offline functionality, SAMA
                ensures privacy, reduced latency, and reliable operation even in
                low-connectivity areas.
              </p>
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
    // <section className="lg:px-60 px-4 py-20 dark:bg-white bg-background ">
    //   <div className="text-center">
    //     <Heading>
    //       <h1 className="text-white dark:text-black">Our Journey</h1>
    //     </Heading>
    //   </div>
    //   <div className="grid lg:grid-cols-2 gap-10 lg:mt-10">
    //     <div className="grid mt-10 gap-10">
    //       <Card className="h-fit">
    //         <CardHeader className="">
    //           <CardTitle>
    //             <Heading className="">2019</Heading>
    //           </CardTitle>
    //           <CardDescription className="text-pretty">
    //             SAMA was founded with the mission to revolutionize audio and
    //             voice technologies. With a focus on innovation, we set out to
    //             develop solutions that combine advanced engineering with
    //             real-world usability. From the beginning, our goal was to
    //             redefine how users interact with technology using seamless
    //             voice-enabled solutions.
    //           </CardDescription>
    //         </CardHeader>
    //       </Card>
    //       <Card className="h-fit">
    //         <CardHeader className="">
    //           <CardTitle>
    //             <Heading className="">2019-2022</Heading>
    //           </CardTitle>
    //           <CardDescription className="text-pretty">
    //             During this period, SAMA specialized in designing
    //             Alexa-certified, IoT-based smart speaker modules for the German
    //             market. Our advanced modules offered seamless integration with
    //             IoT ecosystems, focusing on high-quality sound and intuitive
    //             user experiences. These products earned recognition for their
    //             compliance with global standards and innovation in the smart
    //             speaker domain.
    //           </CardDescription>
    //         </CardHeader>
    //       </Card>
    //     </div>
    //     <div className="grid  gap-10">
    //       <Card className="h-fit">
    //         <CardHeader className="">
    //           <CardTitle>
    //             <Heading className="">2020 Onwards</Heading>
    //           </CardTitle>
    //           <CardDescription className="text-pretty">
    //             From 2020, SAMA extended its expertise to serve a leading
    //             telecom operator in India. Our engineering services included
    //             developing products such as smart speakers, IP cameras, and IoT
    //             gateways. This partnership solidified SAMA's position as a
    //             trusted technology provider, delivering high-performance,
    //             scalable solutions for diverse applications.
    //           </CardDescription>
    //         </CardHeader>
    //       </Card>
    //       <Card className="h-fit">
    //         <CardHeader className="">
    //           <CardTitle>
    //             <Heading className="">2023 Onwards</Heading>
    //           </CardTitle>
    //           <CardDescription className="text-pretty">
    //             In 2023, SAMA began developing cost-optimized offline voice
    //             modules equipped with excellent noise cancellation and
    //             state-of-the-art voice recognition. These modules are tailored
    //             for controlling home appliances like fans, air conditioners, and
    //             other IoT devices. By focusing on offline functionality, SAMA
    //             ensures privacy, reduced latency, and reliable operation even in
    //             low-connectivity areas.
    //           </CardDescription>
    //         </CardHeader>
    //       </Card>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Journey;
