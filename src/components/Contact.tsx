import { FC } from "react";
import Heading from "./ui/heading";
import Paragraph from "./ui/Paragraph";
import ShinyButton from "./ui/ShinyButton";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="grid lg:grid-cols-2 justify-between min-h-80">
      <div className="flex flex-col justify-between lg:w-[850px]">
        <div className="flex flex-col gap-4">
          <div className="uppercase">Contact</div>
          <div className="">
            <Heading>
              <h1>Need Assistance?</h1>
            </Heading>
          </div>
          <Paragraph>
            For inquiries about Sama, feel free to contact us. Our team is
            available to provide information, answer questions, and assist with
            your needs. Reach out via email, phone, or our online support portal
            for prompt assistance.
          </Paragraph>
        </div>
        <div className="flex flex-col gap-4 max-lg:hidden">
          <p className="uppercase">Find us on</p>
          <div className="flex gap-2 shrink-0">
            <div className="p-2 size-12 flex items-center justify-center border rounded-full hover:bg-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer">
              TW
            </div>
            <div className="p-2 size-12 flex items-center justify-center border rounded-full hover:bg-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer shrink-0">
              IN
            </div>
            <div className="p-2 size-12 flex items-center justify-center border rounded-full hover:bg-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer">
              FB
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] lg:mx-auto max-lg:mt-20">
        <form className="flex flex-col gap-10">
          <div className="">
            <input
              type="text"
              className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
              placeholder="Your Name"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
              placeholder="Your Email"
            />
          </div>
          <div className="">
            <textarea
              rows={6}
              className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
              placeholder="Your Message"
            />
          </div>

          <div className="">
            <ShinyButton className="w-40 h-10 uppercase">Submit</ShinyButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
