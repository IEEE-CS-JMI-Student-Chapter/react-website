import React from 'react';
import classes from "./Footer.module.css";
import logo from "./landingLogo.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = ()=>{
    return(
        <section className={classes["footer-main"]}>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2 d-flex justify-content-start align-items-center">
                        <ul className={classes["social-links"]}>
                           <li>F</li> {/* FACEBOOK LINK */}
                           <li>I</li> {/* INSTA LINK */}
                           <li>L</li> {/* LINKEDIN LINK */}
                        </ul>
                    </div>
                    <div class="col d-flex justify-content-center">
                         <img src={logo} alt="Hero Box" className={classes["logo-image"]}/>
                    </div>
                    <div class="col-2 d-flex justify-content-end align-items-center">
                        <em style={{fontWeight:"200"}}>@ieeecsjmi</em>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row text-center d-flex justify-content-center" style={{padding:"30px 0"}} >
                    <div class="col-2" >
                        LINKS
                    </div>
                    <div class="col-2">
                        LINKS
                    </div>
                    <div class="col-2">
                        LINKS
                    </div>
                    <div class="col-2">
                        LINKS
                    </div>
                    <div class="col-2">
                        LINKS
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row ">
                    <div class="col">
                        <p className={classes["lorem-para"]}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <h6>
                            @IEEECSJMI2018
                        </h6>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Footer;