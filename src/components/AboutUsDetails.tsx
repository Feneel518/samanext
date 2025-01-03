import { FC } from "react";
import OurJourney from "./OurJourney";
import Journey from "./Journey";
import Mission from "./Mission";
import Careers from "./Careers";

interface AboutUsDetailsProps {}

const AboutUsDetails: FC<AboutUsDetailsProps> = ({}) => {
  return (
    <section className="">
      <div className="px-8">
        <OurJourney></OurJourney>
      </div>
      <Journey></Journey>
      <Mission></Mission>
      {/* <Careers></Careers> */}
    </section>
  );
};

export default AboutUsDetails;
