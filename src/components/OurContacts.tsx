import { AtSign, MapPin, Phone } from "lucide-react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Heading from "./ui/heading";
import ContactComponent from "./ContactComponent";

interface OurContactsProps {}

const OurContacts: FC<OurContactsProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="flex flex-col lg:flex-row py-10 lg:py-20  border-b border-gray-200/20">
        <div className="lg:w-[550px] lg:border-r border-gray-200/20 flex items-start lg:shrink-0 ">
          <div className="flex flex-col gap-6 ">
            <Heading className="lg:w-[80%]">
              <h1>Our Contacts</h1>
            </Heading>
          </div>
        </div>
        <div className=" flex flex-col mt-10 gap-5 lg:pl-8 xl:hidden w-full">
          <div className="flex flex-col w-full  gap-5">
            <ContactComponent
              icon={<Phone strokeWidth={1} size={50}></Phone>}
              title="+91 1234567890"
              description="Phone Number"
            ></ContactComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>
            <ContactComponent
              icon={<AtSign strokeWidth={1} size={50}></AtSign>}
              title="Helpline@sama.com"
              description="Email Address"
            ></ContactComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>
          </div>
          <div className="flex flex-col  xl:flex-row gap-5">
            <ContactComponent
              icon={<FaWhatsapp strokeWidth={1} size={50}></FaWhatsapp>}
              title="+91 1234567890"
              description="Whatsapp"
            ></ContactComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>

            <ContactComponent
              icon={<MapPin strokeWidth={1} size={50}></MapPin>}
              title="Bangalore - 560103"
              description="Address"
            ></ContactComponent>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col xl:pl-10 w-full gap-10 2xl:gap-20 max-xl:hidden">
          <div className="flex max-lg:flex-col gap-12">
            <div className=" flex-1 ">
              <div className="flex  gap-8">
                <div className="">
                  <Phone strokeWidth={1} size={80}></Phone>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">+91 1234567890</h1>
                  <p className="tracking-widest">Phone Number</p>
                </div>
              </div>
            </div>

            <div className="h-full border border-gray-200/20"></div>
            <div className=" flex-1 ">
              <div className="flex  gap-8">
                <div className="">
                  <AtSign strokeWidth={1} size={80}></AtSign>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Helpline@sama.com</h1>
                  <p className="tracking-widest">Email Address</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto border border-gray-200/20"></div>
          <div className="flex gap-12">
            <div className=" flex-1 ">
              <div className="flex  gap-8">
                <div className="">
                  <FaWhatsapp strokeWidth={1} size={80}></FaWhatsapp>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">+91 1234567890</h1>
                  <p className="tracking-widest">Whatsapp</p>
                </div>
              </div>
            </div>
            <div className="h-full border border-gray-200/20"></div>
            <div className=" flex-1 ">
              <div className="flex  gap-8">
                <div className="">
                  <MapPin strokeWidth={1} size={80}></MapPin>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Bangalore - 560103</h1>
                  <p className="tracking-widest">Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContacts;

{
  /* <div className="grid grid-cols-2 gap-4 -ml-6">
            <div className="flex  items-center justify-center  gap-4">
              <Phone strokeWidth={1} size={40}></Phone>
              <div className="">
                <div className="text-xl">Phone Number</div>
                <p>+91 1234567890</p>
              </div>
            </div>
            <div className="flex  items-center justify-center  gap-4">
              <AtSign strokeWidth={1} size={40}></AtSign>
              <div className="">
                <div className="text-xl">Email Address</div>
                <p>Helpline@sama.com</p>
              </div>
            </div>
            <div className="flex  items-center justify-center  gap-4">
              <FaWhatsapp size={40}></FaWhatsapp>
              <div className="">
                <div className="text-xl">Whatsapp</div>
                <p>+91 1234567890</p>
              </div>
            </div>
            <div className="flex  items-center justify-center  gap-4">
              <MapPin strokeWidth={1} size={40}></MapPin>
              <div className="w-1/2 ">
                <div className="text-xl">Location</div>
                <p className="text-xs">
                  #201, 3rd Floor, Green Glen Layout, Bellandur, Bangalore -
                  560103
                </p>
              </div>
            </div>
          </div> */
}
