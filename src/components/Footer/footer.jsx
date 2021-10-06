import React from 'react';
import classes from "./Footer.module.css";
import logo from "./landingLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const contactUs = [
        {
            name: "Email",
            value: "ieeecsjmi@gmail.com"
        },
        {
            name: "Phone",
            value: "+91-7303435034"
        }
    ]

    return (
        <section className={classes["footer-main"]}>
            <div className={classes['logo']}>
                <img src={logo} />
            </div>
            <div className={classes["menu"]}>
                <ul>
                    <li>
                        Menu
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Teams
                    </li>
                    <li>
                        Heads
                    </li>
                    <li>
                        Events
                    </li>
                </ul>
            </div>
            <div className={classes["follow"]}>
                <div className={classes["heading"]}>
                    Follow Us On
                </div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={icons.faInstagram} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={icons.faLinkedinIn}/>
                    </li>
                </ul>
            </div>
            <div className={classes["contactus"]}>
                <ul>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        {contactUs.map((contact,index) => {
                            return(
                                <div className={classes["contactCard"]}>
                                    <div>
                                        {contact.name}
                                    </div>
                                    <div>
                                        {contact.value}
                                    </div>
                                </div>
                            )
                        })}
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;