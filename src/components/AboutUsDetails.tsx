import { FC } from "react";
import OurJourney from "./OurJourney";
import Journey from "./Journey";
import Mission from "./Mission";

interface AboutUsDetailsProps {}

const AboutUsDetails: FC<AboutUsDetailsProps> = ({}) => {
  return (
    <section className="">
      <div className="px-8">
        <OurJourney></OurJourney>
      </div>
      <Journey></Journey>
      <Mission></Mission>
    </section>
  );
};

export default AboutUsDetails;
