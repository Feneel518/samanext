import { AnimatedBeamDemo } from "@/components/AnimatedBeams";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
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
    <section className="px-4 lg:px-8 py-10 lg:h-screen">
      <Carousel
        autoplay={true}
        autoplayInterval={10000}
        carouselOptions={{ loop: true }}
      >
        <CarouselMainContainer className="">
          <SliderMainItem className="bg-transparent  lg:h-[700px]  flex items-center justify-center">
            <Slide1></Slide1>
          </SliderMainItem>
          <SliderMainItem className="bg-transparent  h-[700px]  flex ">
            <Slide2></Slide2>
          </SliderMainItem>
          <SliderMainItem className="bg-transparent  h-[700px] flex items-center justify-center ">
            <Slide3></Slide3>
          </SliderMainItem>
        </CarouselMainContainer>
        <div className="absolute -bottom-4 xl:-bottom-12 left-1/2 -translate-x-1/2">
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
