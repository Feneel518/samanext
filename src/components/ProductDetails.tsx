import { ProductType } from "@/lib/Products";
import { FC } from "react";
import Heading from "./ui/heading";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";
import Paragraph from "./ui/Paragraph";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className=" px-4 lg:px-8 ">
      <div className=" py-10 lg:py-20 flex flex-col lg:flex-row gap-10 border-b border-gray-200/20 ">
        <div className="lg:w-[400px]  flex items-start lg:shrink-0 ">
          <div className="flex flex-col gap-6 lg:sticky lg:top-4 transition-all duration-200 ease-in-out w-full pr-8">
            <div className="">
              <Heading className="lg:text-5xl lg:w-[80%]">
                <h1>{product.name}</h1>
              </Heading>
            </div>
            <div className="relative w-full h-[400px] ">
              <div
                className={cn(
                  "absolute inset-0 p-4 z-10 font-oswald text-5xl flex flex-col gap-4",
                  {
                    " text-white": product.id === "avm",
                  }
                )}
              >
                <div className="flex flex-col gap-3">
                  {product.featurepoints.map((point, index) => {
                    return (
                      <Paragraph key={index}>
                        <p
                          className={cn("text-black", {
                            " text-white":
                              product.mainHeading === "Accessory Voice Module",
                          })}
                        >
                          {point}
                        </p>
                      </Paragraph>
                    );
                  })}
                </div>
              </div>
              <Image
                src={product.image}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom rounded-3xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-20 ">
          <div className="flex flex-col gap-10">
            <Heading>
              <h1>{product.mainHeading}</h1>
            </Heading>
            <div className="grid grid-cols-1">
              <Paragraph>
                <p>{product.paragraph1}</p>
              </Paragraph>
              {/* <Paragraph>
            <p>{product.paragraph2}</p>
          </Paragraph> */}
            </div>
          </div>

          <ProductCarousel
            productComponents={product.components}
          ></ProductCarousel>
          <div className="grid grid-cols-1 mt-8">
            {/* <Paragraph>
              <p>{product.paragraph1}</p>
            </Paragraph> */}
            <Paragraph>
              <p>{product.paragraph2}</p>
            </Paragraph>
          </div>
          {/* <div className="w-full mx-auto border border-gray-200/20 "></div> */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
