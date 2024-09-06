import {MailtrapClient }from "mailtrap";
import dotenv from "dotenv";
dotenv.config();


const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailTrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Weshare corp",
};


// const recipients = [
//   {
//     email: "vibez2055@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);