import { FC } from "react";
import Heading from "./ui/heading";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface OurJourneyProps {}

const OurJourney: FC<OurJourneyProps> = ({}) => {
  return (
    <div className="lg:py-16 py-4 flex flex-col items-center justify-center gap-8">
      <div className="grid lg:grid-cols-2 w-full l gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-full group overflow-hidden rounded-lg">
            <div className="absolute w-full h-full bg-black z-10 opacity-10"></div>
            <Image
              src={"/meeting.jpg"}
              alt="meeting image"
              fill
              className="object-cover rounded-lg group-hover:scale-[102%] transition-all duration-300 ease-in-out"
            ></Image>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex-1 w-full h-full max-lg:w-full max-lg:min-h-96 max-md:min-h-64   relative group overflow-hidden rounded-lg ">
              <div className="absolute w-full h-full bg-black z-10 opacity-10"></div>
              <Image
                src={"/soldering.jpg"}
                alt="meeting image"
                fill
                className="object-cover rounded-lg group-hover:scale-[102%] transition-all duration-300 ease-in-out"
              ></Image>
            </div>
            <div className="">
              <Card className="">
                <CardHeader className="text-center">
                  <CardTitle>
                    <Heading className="">6 +</Heading>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Years of experience
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
        <div className="">
          <Card className="flex flex-col justify-between  h-full">
            <div className="flex flex-col lg:flex-row">
              <div className="">
                <CardHeader className="">
                  <CardTitle>
                    <Heading className="">
                      Innovation in Audio and Voice Technology
                    </Heading>
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    Innovation in Audio and Voice Technology SAMA is a trusted
                    Original Design Manufacturer (ODM) and system integrator,
                    delivering cutting-edge audio modules for diverse
                    applications. Leveraging Edge AI and advanced voice
                    technologies, our solutions ensure real-time performance,
                    enhanced privacy, and superior user experiences. From smart
                    speakers to intelligent home appliances, we redefine
                    convenience and innovation. SAMA is committed to crafting
                    reliable, scalable, and cost-effective solutions for the
                    future. future.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground mt-4 grid  gap-8">
                  <div className="grid lg:grid-cols-2 lg:gap-8">
                    <div className="">
                      <div className="font-light flex gap-4 text-muted-foreground ">
                        <CheckCheck
                          size={25}
                          className=" dark:text-white  mt-1 shrink-0"
                        />
                        <div className="">ODM Expertise</div>
                      </div>
                      <div className="font-light flex gap-4 text-muted-foreground ">
                        <CheckCheck
                          size={25}
                          className=" dark:text-white  mt-1 shrink-0"
                        />
                        <div className="shrink-0">System Integration</div>
                      </div>
                      <div className="font-light flex gap-4 text-muted-foreground ">
                        <CheckCheck
                          size={25}
                          className=" dark:text-white  mt-1 shrink-0"
                        />
                        <div className="">Field Testing</div>
                      </div>
                    </div>
                    <div className="">
                      <div className="font-light flex gap-4 text-muted-foreground ">
                        <CheckCheck
                          size={25}
                          className=" dark:text-white  mt-1 shrink-0"
                        />
                        <div className="">Audio Front End</div>
                      </div>
                      <div className="font-light flex gap-4 text-muted-foreground ">
                        <CheckCheck
                          size={25}
                          className=" dark:text-white  mt-1 shrink-0"
                        />
                        <div className="">Edge AI</div>
                      </div>
                      <div className="font-light flex gap-4 text-muted-foreground ">
                        <CheckCheck
                          size={25}
                          className=" dark:text-white  mt-1 shrink-0"
                        />
                        <div className="">Speech Recognition </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
