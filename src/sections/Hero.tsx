import { AnimatedBeamDemo } from "@/components/AnimatedBeams";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselThumbsContainer,
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
      <Carousel
        autoplay={true}
        autoplayInterval={10000}
        carouselOptions={{ loop: true }}
      >
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
                  className=" md:max-w-80 text-white h-12"
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
              {/* <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center">
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
              </div> */}
              <div className="grid items-center justify-center lg:grid-cols-2 gap-10 lg:gap-20">
                <Heading className=" text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 ">
                  <h1>Aster</h1>
                </Heading>
                <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Bellis</h1>
                </Heading>
                <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Dahlia</h1>
                </Heading>
                <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
                  <h1>Eruca</h1>
                </Heading>
              </div>
            </div>
          </SliderMainItem>
          <SliderMainItem className="bg-transparent  h-[700px]  flex lg:flex-row flex-col items-center justify-center">
            <Heading className="w-1/3">
              <h1>
                The future of voice is{" "}
                <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
                  Offline
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
                  Private
                </span>
              </h1>
            </Heading>

            <div className="relative w-[1000px] aspect-[1020/596] dark:scale-100 scale-0 hidden dark:flex">
              <Image
                alt="Offline Represntation"
                src={"/OfflineWhite.png"}
                fill
                className="object-contain"
              ></Image>
            </div>
            <div className="relative w-[1000px] aspect-[1020/596] dark:scale-0 scale-100 dark:hidden">
              <Image
                alt="Offline Represntation"
                src={"/Offline.png"}
                fill
                className="object-contain"
              ></Image>
            </div>
            {/* <AnimatedBeamDemo></AnimatedBeamDemo> */}
          </SliderMainItem>
        </CarouselMainContainer>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
          {/* </div> */}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
