  const EMAIL = "facundoaylan3@gmail.com";
  const SUBJECT = "vi tu portafilio y me gustaria comunicarme contigo";
  const BODY = "Hola, Facundo";

  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;

  export default mailtoLink;