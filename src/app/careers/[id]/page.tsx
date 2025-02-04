import CareerForm from "@/components/CareerForm";

import Heading from "@/components/ui/heading";
import { CAREERS } from "@/lib/Careers";

import { FC } from "react";

interface pageProps {
  params: Promise<{
    id: number;
  }>;
}

const page: FC<pageProps> = async ({ params }) => {
  const { id: careerId } = await params;

  const career = CAREERS.find((id) => id.id == careerId);

  if (!career) return;

  return (
    <div className="px-4 lg:px-16 pb-20">
      <div className=" my-4 lg:my-10 relative h-40 lg:h-80 rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-20 flex items-center px-8 border-b border-gray-200/20">
          <Heading className="dark:text-white text-white lg:text-8xl">
            <h1>{career?.title}</h1>
          </Heading>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="mt-10 ">
          <div className="flex flex-col gap-4">
            <div className="">
              {career.description && (
                <div className="">
                  <p className="text-sm text-gray-300">{career.description}</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 ">
              <p>Category:</p>
              <p className="col-span-2">{career.category}</p>
              <p>Type:</p>
              <p className="col-span-2">{career.type}</p>
              <p>Location:</p>
              <p className="col-span-2">{career.location}</p>
            </div>
            <div className="">
              <h1>Requirements:</h1>
              {career.reqirements.map((req, index) => {
                return (
                  <p className="text-sm text-gray-300">
                    {index + 1}. {req}
                  </p>
                );
              })}
            </div>
            <div className="">
              <h1>Optional Requirements:</h1>
              {career.optionalSkills.map((req, index) => {
                return (
                  <p className="text-sm text-gray-300">
                    {index + 1}. {req}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <p>Apply Online</p>
          <CareerForm></CareerForm>
        </div>
      </div>
    </div>
  );
};

export default page;
