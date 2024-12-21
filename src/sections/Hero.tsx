import { AnimatedBeamDemo } from "@/components/AnimatedBeams";
import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
} from "@/components/ui/carousel";
import Heading from "@/components/ui/heading";
import Paragraph from "@/components/ui/Paragraph";
import ShinyButton from "@/components/ui/ShinyButton";
import Image from "next/image";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="px-4 lg:px-8 py-10">
      <Carousel>
        <CarouselMainContainer>
          <SliderMainItem className="bg-transparent  h-[700px]  flex items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-10 lg:items-center">
              <div className="flex flex-col gap-6 xl:w-3/4 xl:mx-auto">
                <Heading>
                  <h1>
                    Seamless{" "}
                    <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
                      Voice Control
                    </span>{" "}
                    without the Internet
                  </h1>
                </Heading>
                <Paragraph>
                  <p>
                    We set the benchmark in delivering flawless voice activation
                    across devices.
                  </p>
                </Paragraph>
                <ShinyButton
                  href="/products"
                  className=" md:max-w-80 text-foreground h-12"
                >
                  Expore More
                </ShinyButton>
              </div>
              <div className="relative w-full aspect-[1280/960] rounded-xl ">
                <Image
                  alt="Hero Image"
                  src={"/heroImage.png"}
                  fill
                  className="rounded-xl "
                ></Image>
              </div>
            </div>
          </SliderMainItem>
          <SliderMainItem className="bg-transparent  h-[700px]  flex ">
            <div className="grid lg:grid-cols-2 gap-10 lg:items-center">
              <div className="flex flex-col gap-6 xl:w-3/4 xl:mx-auto">
                <Heading>
                  <h1>
                    SAMA NextGen's{" "}
                    <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
                      AI-powered
                    </span>{" "}
                    smart home solutions
                  </h1>
                </Heading>
                <Paragraph>
                  <p>
                    Discover how SAMA NextGen can revolutionize your business
                    with advanced automation.
                  </p>
                </Paragraph>
              </div>
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center">
                <Heading className=" text-7xl lg:text-9xl text-center hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Aster</h1>
                </Heading>
                <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Bellis</h1>
                </Heading>
                <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Dahlia</h1>
                </Heading>
                <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Eruca</h1>
                </Heading>
              </div>
            </div>
          </SliderMainItem>
          <SliderMainItem className="bg-transparent  h-[700px]  flex items-center justify-center">
            <div className="">
              <Heading>
                <h1>The future of voice is offline and private</h1>
              </Heading>
              {/* <AnimatedBeamDemo></AnimatedBeamDemo> */}
            </div>
          </SliderMainItem>
        </CarouselMainContainer>
      </Carousel>
    </section>
  );
};

export default Hero;
