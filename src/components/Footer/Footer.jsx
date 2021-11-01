import React from "react";
import ReactDOM from "react-dom";
import classes from "./Footer.module.css";
import logo from "./landingLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-brands-svg-icons";
import Button from "../UI/Button/Button";
import ContactForm from "../Forms/ContactForm";
import Backdrop from "../UI/Backdrop/Backdrop";
import SnackbarProvider from "react-simple-snackbar";
import bgImage from "./../../images/bg_texture.png";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const contactModalHandler = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const submitHandler = () => {
    console.log("Your response has been rejected!");
  };

  return (
    <section className={classes["footer-main"]}>
      <div className={classes.overlay}></div>
      <Button className={classes.level} onClick={() => contactModalHandler()}>
        Contact
      </Button>
      {isContactOpen &&
        ReactDOM.createPortal(
          <SnackbarProvider>
            <ContactForm onSubmit={submitHandler} onClose={closeContactModal} />
          </SnackbarProvider>,
          document.getElementById("modal")
        )}
      {isContactOpen && ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      <div className={classes.content}>
        <div className={classes["logo"]}>
          <img src={logo} />
        </div>
        <div className={classes["menu"]}>
          <ul>
            <li>Menu</li>
            <li>
              <NavHashLink to="/#top">Home</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#teams">Teams</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/#leads">Leads</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/events">Events</NavHashLink>
            </li>
          </ul>
        </div>
        <div className={classes["follow"]}>
          <div className={classes["heading"]}>Follow Us On</div>
          <ul>
            <li>
              <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ieeecs_jmi/">
                <FontAwesomeIcon icon={icons.faInstagram} />
              </a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/ieee-computer-society-jmi---student-chapter/mycompany/">
                <FontAwesomeIcon icon={icons.faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
