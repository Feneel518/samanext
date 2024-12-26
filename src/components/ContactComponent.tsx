import { FC, ReactNode } from "react";

interface ContactComponentProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ContactComponent: FC<ContactComponentProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <div className=" flex-1 ">
      <div className="flex items-center gap-8">
        <div className="">{icon}</div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl ">{title}</h1>
          <p className="tracking-widest">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
