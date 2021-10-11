import React from "react";
import ReactDOM from "react-dom";
import classes from "./Footer.module.css";
import logo from "./landingLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-brands-svg-icons";
import Button from "../UI/Button/Button";
import ContactForm from "../Forms/ContactForm";
import Backdrop from "../UI/Backdrop/Backdrop";

const Footer = () => {
  return (
    <section className={classes["footer-main"]}>
      <div className={classes.content}>
        <div className={classes["logo"]}>
          <img src={logo} />
        </div>
        <div className={classes["menu"]}>
          <ul>
            <li>Menu</li>
            <li>Home</li>
            <li>Teams</li>
            <li>Heads</li>
            <li>Events</li>
          </ul>
        </div>
        <div className={classes["follow"]}>
          <div className={classes["heading"]}>Follow Us On</div>
          <ul>
            <li>
              <FontAwesomeIcon icon={icons.faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={icons.faLinkedinIn} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
