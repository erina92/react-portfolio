import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tzdyrzd",
        "template_xt7yofd",
        form.current,
        "cNSIlVWEWDInmdpbi"
      )
      .then(
        (result) => {
          setMessage("Email sent successfully!");
        },
        (error) => {
          setMessage("Error sending email!");
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type="text"
                placeholder="Insert your name"
                name="user_name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type="email"
                placeholder="Insert your email"
                name="user_email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              className="contact__form-input"
              type="text"
              placeholder="Insert your subject"
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
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
          {message && <p className="message__sent">🎉{message}🎉</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
