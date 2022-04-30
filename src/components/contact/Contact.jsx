import { GitHub, LinkedIn, Email, Phone, Instagram, Twitter } from "@mui/icons-material";
import "./contact.scss";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vm5f8qb",
        "template_4qli9oo",
        form.current,
        "zzGaGl6ZOZA8uZGhz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="heading">
        <h1>Contacts</h1>
      </div>
      <div className="left">
        <div className="social">
          <div>
            <img src="assets/contact1.png" alt="" />
          </div>
          <div className="gitli">
          <a href="https://github.com/haldaranup" target="_blank" rel="noreferrer">
            <GitHub className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/haldar-anup/" target="_blank" rel="noreferrer">
            <LinkedIn className="socialIcon" />
          </a>
          <a href="https://instagram.com/haldaranup1" target="_blank" rel="noreferrer">
            <Instagram className="socialIcon" />
          </a>
          <a href="https://twitter.com/haldar_anup1"  rel="noreferrer" target="_blank">
            <Twitter className="socialIcon" />
          </a>
          </div>
        </div>
        <div>
          <div className="contacts">
            <div>
              <Email className="socialIcon" />
              <span>haldaranup.github@gmail.com</span>
            </div>
            <div>
              <Phone className="socialIcon" />
              <span>+91 7351972087</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>Get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />

          <input type="email" name="user_email" placeholder="Email" />

          <textarea name="message" placeholder="Message" />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
