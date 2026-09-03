const EMAIL: string = "facundoaylan3@gmail.com";
const SUBJECT: string = "vi tu portafilio y me gustaria comunicarme contigo";
const BODY: string = "Hola, Facundo";

export const mailtoLink: string = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${encodeURIComponent(
  SUBJECT,
)}&body=${encodeURIComponent(BODY)}`;

export default mailtoLink;
