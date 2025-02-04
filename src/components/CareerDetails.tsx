import { CAREERS } from "@/lib/Careers";
import { FC } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

interface CareerDetailsProps {}

const CareerDetails: FC<CareerDetailsProps> = ({}) => {
  return (
    <div className="px-4 lg:px-16 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl gray-grad">Be A Part Of SAMA Family</h1>
        <p className="text-xs lg:w-1/5 text-gray-300">
          Join a group that is as dedicated and witty as you, and introduce
          yourself to a versatile team. We strive to provide an efficient
          working environment, where each member grows individually as well as a
          team member.
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3">
        {CAREERS.map((career) => {
          return (
            <Link href={`/careers/${career.id}`} className="">
              <Card className="p-4" key={career.id}>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="">
                      <h1 className="text-3xl">{career.title}</h1>
                      {career.description && (
                        <div className="">
                          <p className="text-sm text-gray-300">
                            {career.description}
                          </p>
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
                      <p className="text-sm text-gray-300">
                        1. {career.reqirements[0]}
                      </p>
                      <p className="text-sm text-gray-300">
                        2. {career.reqirements[1]}
                      </p>
                      <p className="text-sm text-gray-300 text-right">
                        ... See More
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CareerDetails;
