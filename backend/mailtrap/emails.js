import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  console.log(verificationToken);
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ), // ensure case matches
      category: "Email verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "33b3ba6e-aeaa-462a-a492-0db68d15ae83",
      template_variables: {
        name: name,
      },
    });

    console.log("email sent successfully ", response);
  } catch (error) {
    console.log(`Error while sending welcome email ${error}`);
    throw new Error(`Error while sending welcome email ${error}`);
  }
};

export const sendPasswordRestEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  console.log("in forgot password");
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL), // ensure case matches
      category: "Password Reset",
    });

    console.log("email sent successfully ", response);
  } catch (error) {
    console.log(`Error while sending reset password email ${error}`);
    throw new Error(`Error while sending reset password email ${error}`);
  }
};

export const sendsuccessResetPasswordEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your Password",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("email for password reset sent successfully ", response);
  } catch (error) {
    console.error(`Error while sending password reset success email ${error}`);
    throw new Error(
      `Error while sending password reset success email ${error}`
    );
  }
};
