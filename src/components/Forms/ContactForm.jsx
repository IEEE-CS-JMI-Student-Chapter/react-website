import React from "react";
import classes from "./ContactForm.module.css";
import Button from "../UI/Button/Button";
import styled from "styled-components";
import Card from "../UI/Card/Card";

function ContactForm(props) {
  const contactUs = [
    {
      name: "Email",
      value: "ieeecsjmi@gmail.com",
    },
    {
      name: "Phone",
      value: "+91-7303435034",
    },
  ];
  return (
    <Card>
      <div className={classes["contactus"]}>
        <button className={classes.close} onClick={props.onClose}>
          X
        </button>
        <ul>
          <li>Contact Us</li>
          <li>
            {contactUs.map((contact, index) => {
              return (
                <div key={index} className={classes["contactCard"]}>
                  <div>
                    {contact.name}
                  </div>
                  <div>
                    {contact.value}
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
        <form className={classes.sendmessage} onSubmit={props.onSubmit}>
          <label htmlFor="email-id">Email: </label>
          <input id="email-id" placeholder="Enter e-mail..." />

          <label htmlFor="subject-id">Subject: </label>
          <input id="subject-id" placeholder="Enter subject..." />
          
          <label htmlFor="subject-id">Message: </label>
          <textarea
            name="message"
            id="message-id"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Button>Send Message</Button>
        </form>
      </div>
    </Card>
  );
}

export default ContactForm;
