import React, { useState } from "react";
import classes from "./contact-form.module.css";
function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  function sendMsg(e) {
    e.preventDefault();
    console.log("form submitted");
    fetch("/api/contact", {
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((finalRes) => {
        console.log("finalRes", finalRes);
      });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form onSubmit={sendMsg} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
            />
          </div>
        </div>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor="message">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="message"
            ></textarea>
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
