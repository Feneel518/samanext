import ApplicationsDetails from "@/components/ApplicationsDetails";
import { APPLICATIONS } from "@/lib/Applications";
import { FC } from "react";

interface ApplicationPageProps {}

const ApplicationPage: FC<ApplicationPageProps> = ({}) => {
  return (
    <section className="px-8">
      {APPLICATIONS.map((application, index) => {
        return (
          <ApplicationsDetails
            key={index}
            application={application}
          ></ApplicationsDetails>
        );
      })}
    </section>
  );
};

export default ApplicationPage;
