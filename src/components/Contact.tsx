"use client";

import { FC } from "react";
import Heading from "./ui/heading";
import Paragraph from "./ui/Paragraph";
import ShinyButton from "./ui/ShinyButton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

interface ContactProps {}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is requred." }),
  email: z.string().email().min(1, { message: "Email is requred." }),
  message: z.string().min(1, { message: "Message is requred." }),
});

type formSchemaRequest = z.infer<typeof formSchema>;

const Contact: FC<ContactProps> = ({}) => {
  const form = useForm<formSchemaRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });
  const sendEmail = async (values: formSchemaRequest) => {
    const htmlmessage = `<div><p>Name:${values.name}</p> <p>Email:${values.email}</p><p>Message:${values.message}</p></div>`;

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(htmlmessage),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  // console.log(form.watch("email"));
  // console.log(form.watch("message"));
  // console.log(form.watch("name"));

  return (
    <div className="grid lg:grid-cols-2 justify-between min-h-80">
      <div className="flex flex-col justify-between lg:w-[850px]">
        <div className="flex flex-col gap-4">
          <Heading>
            <h1>For any Inquiries</h1>
          </Heading>
          <Paragraph>
            Feel free to contact us. Our team is available to provide
            information, answer questions and assist with your needs.
          </Paragraph>
        </div>
        {/* <div className="flex flex-col gap-4 max-lg:hidden">
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
        </div> */}
      </div>
      <div className="lg:w-[80%] lg:mx-auto max-lg:mt-20">
        <Form {...form}>
          <form
            className="flex flex-col gap-10"
            onSubmit={form.handleSubmit(sendEmail)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      type="text"
                      className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
                      placeholder="Your Name"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      type="text"
                      className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
                      placeholder="Your Email"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={6}
                      className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
                      placeholder="Your Message"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className={cn(
                "group relative flex transform w-40 h-10 uppercase items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-samaPrimary dark:bg-robin_egg_blue-900 px-8 text-base/7 font-medium text-sama-secondary transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2"
              )}
            >
              <span className="relative z-10 flex items-center gap-2 ">
                Submit
              </span>
              <div className="ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-black opacity-10 transition-all duration-500 group-hover:left-[120%] "></div>
            </button>

            {/* <button>Submit</button>

            <div className="">
              <ShinyButton type="submit" className="w-40 h-10 uppercase">
                Submit
              </ShinyButton>
            </div> */}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
