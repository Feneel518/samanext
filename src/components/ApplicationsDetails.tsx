import { FC } from "react";

import Image from "next/image";
import { ApplicationType } from "@/lib/Applications";
import Heading from "./ui/heading";
import Paragraph from "./ui/Paragraph";

interface ApplicationsDetailsProps {
  application: ApplicationType;
}

const ApplicationsDetails: FC<ApplicationsDetailsProps> = ({ application }) => {
  return (
    <div
      className={`py-10 lg:py-20 flex flex-col xl:items-center ${
        application.id % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
      } max-lg:gap-10 border-b border-gray-200/20`}
    >
      <div
        className={`flex-1 shrink-0 ${
          application.id % 2 === 0 ? " xl:ml-20" : "xl:ml-20"
        }`}
      >
        <Heading className="">
          <h1 className="">{application.heading}</h1>
        </Heading>
        <Paragraph>
          <div className="p-8 xl:w-2/3">
            <ol className="list-disc space-y-1">
              {application.features.map((fea, index) => {
                return <li key={index}>{fea}</li>;
              })}
            </ol>
          </div>
        </Paragraph>
      </div>

      <div
        className={`md:w-[750px] h-[300px] relative  ${
          application.id % 2 === 0
            ? "xl:border-l xl:pl-8"
            : "xl:border-r xl:pr-8"
        } border-gray-200/20 xl:mx-auto   shrink-0  lg:ml-5  `}
      >
        <div className="relative p-8 w-full h-full rounded-xl">
          <Image
            src={application.image}
            alt={application.heading}
            fill
            className={`object-cover rounded-xl ${
              application.id === 3 && "object-center"
            }`}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsDetails;
