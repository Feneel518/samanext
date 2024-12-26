import { FC } from "react";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "./ui/carousel";

import Image from "next/image";
import { ArrowRight, Waves } from "lucide-react";
import { ProductComponentsType } from "@/lib/Products";
import Heading from "./ui/heading";
import Paragraph from "./ui/Paragraph";

interface ProductCarouselProps {
  productComponents: ProductComponentsType[];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ productComponents }) => {
  return (
    <Carousel carouselOptions={{ loop: true }}>
      {productComponents.length > 1 && (
        <>
          <CarouselNext />
          <CarouselPrevious />
        </>
      )}
      {/* <div className="relative "> */}
      <CarouselMainContainer className="">
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {productComponents.map((comp, index) => {
          return (
            <SliderMainItem
              key={index}
              className="bg-transparent  overflow-hidden"
            >
              <div className="flex flex-col justify-start pl-4 gap-10 ">
                <div
                  className={`flex flex-col gap-8 lg:pl-20 ${
                    comp.name === "Eruca" ? "" : "max-sm:h-[650px]"
                  } `}
                >
                  <Heading className="">
                    <h1>{comp.name}</h1>
                  </Heading>
                  <ol className="list-disc flex flex-col gap-4   ">
                    {comp.features.map((fea, inde) => {
                      return (
                        <li key={inde}>
                          <Paragraph>{fea}</Paragraph>
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <div className="relative w-[430px]  md:w-[700px] lg:w-[600px] xl:w-[900px] aspect-[1209/817] shrink-0 lg:mx-auto rounded-2xl ">
                  <Image
                    src={comp.image}
                    alt={comp.name}
                    fill
                    className="object-cover rounded-2xl"
                  ></Image>
                </div>
              </div>
            </SliderMainItem>
          );
        })}
      </CarouselMainContainer>
      {productComponents.length > 1 && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {productComponents.map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
          {/* </div> */}
        </div>
      )}
    </Carousel>
  );
};

export default ProductCarousel;
