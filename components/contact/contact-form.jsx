import React from "react";
import classes from "./contact-form.module.css";
function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" />
          </div>
        </div>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
