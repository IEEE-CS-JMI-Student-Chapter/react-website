import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import Button from "../UI/Button/Button";
import styled from "styled-components";
import Card from "../UI/Card/Card";
import axios from 'axios'
import loadingimg from "../../images/Loading.gif"
import { withSnackbar, useSnackbar } from 'react-simple-snackbar'


const options = {
  position: 'bottom-right',
  style: {
    backgroundColor: 'green'
  },
}


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

  const [Subject, setSubject] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const [loading, setloading] = useState(false);

  const [openSnackbar, closeSnackbar] = useSnackbar(options)

  async function sendmessage(e) {
    e.preventDefault();
    setloading(true);
    const res = await axios.post('https://vast-cove-87257.herokuapp.com/', {
      subject: Subject,
      mail: Email,
      message: Message
    });
    openSnackbar('Message Sent Successfully!')
    setloading(false);
  }


  function setDisable()
  {
    if(Subject === "" || Email === "" || Message === "")
    {
      return true;
    }

    return false;
  }

  return (
    <Card>
        {loading ?

          <div className={classes["contactus"]}>

          <div className={classes["loading"]}>
            <img src={loadingimg} />
          </div>
          </div>
          :
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
            {/* onSubmit={(event) => sendmessage(event)} */}
            <form className={classes.sendmessage} name="contact"  action="/sucess/" data-netlify="true">
              <label htmlFor="email-id">Email: </label>
              <input id="email-id" placeholder="Enter e-mail..." value={Email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="subject-id">Subject: </label>
              <input id="subject-id" placeholder="Enter subject..." value={Subject} onChange={(e) => setSubject(e.target.value)} />

              <label htmlFor="subject-id">Message: </label>
              <textarea
                name="message"
                id="message-id"
                cols="30"
                rows="10"
                placeholder="Message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <Button disabled={setDisable()}>Send Message</Button>
            </form>
          </div>
        }
    </Card>
  );
}

export default withSnackbar(ContactForm, options);
