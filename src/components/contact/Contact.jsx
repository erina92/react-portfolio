import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import LanguageContext from "../language/LanguageContext";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const { isItalian, isFrench } = useContext(LanguageContext);

  const sendEmail = async (e) => {
    e.preventDefault();
    setMessage("Sending...");
    // Send via Web3Forms (client-side). This uses the access key you provided.
    // Web3Forms endpoint: https://api.web3forms.com/submit
    const WEB3FORMS_KEY = "5629a6c2-2130-4ea7-8a8d-2559859daab1";

    // Collect form values
    const fd = new FormData(e.target);
    const payload = {
      access_key: WEB3FORMS_KEY,
      name: fd.get("user_name"),
      email: fd.get("user_email"),
      subject: fd.get("subject") || "New contact message",
      message: fd.get("message"),
      // optional metadata
      site_origin: fd.get("site_origin") || window.location.href,
      time: fd.get("time") || new Date().toLocaleString(),
    };

    try {
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json();
      if (data.success) {
        setMessage(
          isItalian
            ? "Email inviata con successo!"
            : isFrench
            ? "E-mail envoyée avec succès!"
            : "Email sent successfully!"
        );
        e.target.reset();
        console.log("Web3Forms response", data);
      } else {
        setMessage("Error sending email: " + (data.message || resp.statusText));
        console.error("Web3Forms error:", data);
      }
    } catch (err) {
      console.error("Web3Forms fetch error", err);
      setMessage("Error sending email: " + err.message);
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
