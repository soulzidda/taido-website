import emailjs from "emailjs-com";

export const sendEmail = (data: any) => {
  emailjs
    .send("service_teku7br", "contact_form", data, "user_OyNJ1JI85TEg9S3A7RaqI")
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return error.text;
      }
    );
};
