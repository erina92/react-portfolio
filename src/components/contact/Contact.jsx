import React, { useContext, useRef, useState, useEffect } from "react";
import "./contact.css";
import LanguageContext from "../language/LanguageContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const { isItalian, isFrench } = useContext(LanguageContext);

  useEffect(() => {
    // Initialize EmailJS with your public key (replace the placeholder below)
    // Get your PUBLIC KEY from EmailJS dashboard -> Integration
    // Example: emailjs.init('your_public_key_here');
    // Do NOT commit your real key to the repository. Replace locally or in CI.
    try {
      emailjs.init("cNSIlVWEWDInmdpbi");
    } catch (err) {
      // emailjs.init may throw in some environments; ignore here
      // you'll still need to pass the public key when calling sendForm if required
      console.warn("EmailJS init skipped or failed:", err);
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setMessage("Sending...");

  // EmailJS Service and Template IDs provided by the user.
  const SERVICE_ID = "service_tzdyrzd";
  const TEMPLATE_ID = "template_uey931b";

    try {
      // ensure hidden fields are set (site_origin and time)
      const formEl = form.current;
      if (formEl) {
        const originInput = formEl.querySelector("input[name=site_origin]");
        if (originInput) originInput.value = window.location.href;
        const timeInput = formEl.querySelector("input[name=time]");
        if (timeInput) timeInput.value = new Date().toLocaleString();
      }

      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current);
      console.log("EmailJS result", result);
      setMessage(
        isItalian
          ? "Email inviata con successo!"
          : isFrench
          ? "E-mail envoyée avec succès!"
          : "Email sent successfully!"
      );
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setMessage(
        isItalian
          ? "Errore durante l'invio. Controlla la console e le impostazioni EmailJS."
          : isFrench
          ? "Erreur lors de l'envoi. Vérifiez la console et les paramètres EmailJS."
          : "Error sending email. Check console and EmailJS settings."
      );
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">
        <span className="contact-slash">&#47;</span>
        {isItalian
          ? "Contattami"
          : isFrench
          ? "On reste en contact!"
          : "Get In Touch"}
      </h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            {isItalian
              ? "Facciamoci una chiaccherata"
              : isFrench
              ? "Parlons de tout"
              : "Let's talk about everything!"}
          </h3>
          <p className="contact__details">
            {isItalian
              ? "Scrivimi tramite questo modulo 👋🏻"
              : isFrench
              ? "Écrivez-moi via ce formulaire et je recevrai un e-mail!"
              : "Send me an email through this form 👋"}
          </p>
        </div>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type="text"
                placeholder={
                  isItalian ? "Nome" : isFrench ? "Nom" : "Insert your name"
                }
                name="user_name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type="email"
                placeholder={
                  isItalian
                    ? "Email"
                    : isFrench
                    ? "E-mail"
                    : "Insert your email"
                }
                name="user_email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              className="contact__form-input"
              type="text"
              placeholder={
                isItalian
                  ? "Oggetto"
                  : isFrench
                  ? "Objet"
                  : "Insert your subject"
              }
              name="subject"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder={
                isItalian
                  ? "Messaggio"
                  : isFrench
                  ? "Message"
                  : "Write your message"
              }
            ></textarea>
          </div>

            {/* hidden fields to send extra info to EmailJS template */}
            <input type="hidden" name="site_origin" value="" />
            <input type="hidden" name="time" value="" />

            <button className="btn">
            {isItalian
              ? "Invia Messaggio"
              : isFrench
              ? "Envoyer Message"
              : "Send Message"}
          </button>
          {message && <p className="message__sent">🎉{message}🎉</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
