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

interface JourneyProps {}

const Journey: FC<JourneyProps> = ({}) => {
  return (
    <section className="lg:px-60 px-4 py-20 dark:bg-white bg-background ">
      <div className="text-center">
        <Heading>
          <h1 className="text-white dark:text-black">Our Journey</h1>
        </Heading>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:mt-10">
        <div className="grid mt-10 gap-10">
          <Card className="h-fit">
            <CardHeader className="">
              <CardTitle>
                <Heading className="">2019</Heading>
              </CardTitle>
              <CardDescription className="text-pretty">
                SAMA was founded with the mission to revolutionize audio and
                voice technologies. With a focus on innovation, we set out to
                develop solutions that combine advanced engineering with
                real-world usability. From the beginning, our goal was to
                redefine how users interact with technology using seamless
                voice-enabled solutions.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-fit">
            <CardHeader className="">
              <CardTitle>
                <Heading className="">2019-2022</Heading>
              </CardTitle>
              <CardDescription className="text-pretty">
                During this period, SAMA specialized in designing
                Alexa-certified, IoT-based smart speaker modules for the German
                market. Our advanced modules offered seamless integration with
                IoT ecosystems, focusing on high-quality sound and intuitive
                user experiences. These products earned recognition for their
                compliance with global standards and innovation in the smart
                speaker domain.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="grid  gap-10">
          <Card className="h-fit">
            <CardHeader className="">
              <CardTitle>
                <Heading className="">2020 Onwards</Heading>
              </CardTitle>
              <CardDescription className="text-pretty">
                From 2020, SAMA extended its expertise to serve a leading
                telecom operator in India. Our engineering services included
                developing products such as smart speakers, IP cameras, and IoT
                gateways. This partnership solidified SAMA's position as a
                trusted technology provider, delivering high-performance,
                scalable solutions for diverse applications.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-fit">
            <CardHeader className="">
              <CardTitle>
                <Heading className="">2023 Onwards</Heading>
              </CardTitle>
              <CardDescription className="text-pretty">
                In 2023, SAMA began developing cost-optimized offline voice
                modules equipped with excellent noise cancellation and
                state-of-the-art voice recognition. These modules are tailored
                for controlling home appliances like fans, air conditioners, and
                other IoT devices. By focusing on offline functionality, SAMA
                ensures privacy, reduced latency, and reliable operation even in
                low-connectivity areas.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Journey;
