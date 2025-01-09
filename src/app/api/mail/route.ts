import { sendContactEmail } from "@/lib/mail";

export async function POST(req: Request) {
  //   console.log(await req.text());

  const message = await req.text();

  console.log(JSON.parse(message));

  //   try {
  //     if (message) {
  const result = sendContactEmail(message);
  return new Response("OOPK");
  //     }
  //     return new Response("No message found");
  //   } catch (error) {
  //     console.log(error);

  //   return new Response("Something went wrong", { status: 500 });
  //   }
}
