"use client";

import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface CareerFormProps {}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is requred." }),
  email: z.string().email().min(1, { message: "Email is requred." }),
  phone: z.string().email().min(1, { message: "Phone Number is requred." }),
  address: z.string().min(1, { message: "Address is requred." }),
});

type formSchemaRequest = z.infer<typeof formSchema>;

const CareerForm: FC<CareerFormProps> = ({}) => {
  const form = useForm<formSchemaRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      address: "",
      name: "",
    },
  });
  const sendEmail = async (values: formSchemaRequest) => {
    const htmlmessage = `<div><p>Name:${values.name}</p> <p>Email:${values.email}</p><p>Message:${values.address}</p></div>`;

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(htmlmessage),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };
  return (
    <div className="lg:w-[80%]  max-lg:mt-20">
      <Form {...form}>
        <form
          className="flex flex-col gap-10 mt-8"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
                    placeholder="Your Phone Number"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    {...field}
                    rows={4}
                    className="sm:w-full w-[400px]  bg-transparent p-4 border-b outline-none focus-within:bg-white/5 focus-within:rounded-sm text-xl placeholder:gray-grad"
                    placeholder="Your Address"
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
  );
};

export default CareerForm;
