import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import LanguageContext from "../language/LanguageContext";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const { isItalian, isFrench } = useContext(LanguageContext);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Post to Netlify Function which will send via SendGrid.
    // Requires these Netlify env vars: SENDGRID_API_KEY and TO_EMAIL.
    const url = '/.netlify/functions/send-email';
    const formData = new FormData(e.target);

    const payload = {};
    formData.forEach((v, k) => (payload[k] = v));

    try {
      const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await resp.json();
      if (resp.ok) {
        setMessage('Email sent successfully!');
        e.target.reset();
      } else {
        setMessage('Error sending email: ' + (data.error || resp.statusText));
        console.error('Send function error', data);
      }
    } catch (err) {
      console.error('Send function fetch error', err);
      setMessage('Error sending email: ' + err.message);
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
