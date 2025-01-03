import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  service: "gamil",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const contactEmail = {
  from: process.env.MAIL_USER,
  to: process.env.MAIL_USER,
  subject: "Inquiry",
  text: "",
};

export const sendContactEmail = (msg: string) => {
  transport.sendMail({
    to: process.env.MAIL_USER,
    subject: "Inquiry from the website.",
    html: msg,
  });
};
