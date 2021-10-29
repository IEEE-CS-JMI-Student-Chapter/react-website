import React from "react";
import classes from "./NavbarMobile.module.css";
import { NavHashLink } from "react-router-hash-link";
const NavItem = (props) => {
  return (
    <NavHashLink smooth={true} exact={true} activeClassName={classes.active} to={props.to} className={` ${classes["nav-item"]}`}>
      <span className={classes["nav-icon"]}> {props.icon}</span>

      <span className={classes["nav-title"]}>{props.children}</span>
    </NavHashLink>
  );
};

export default NavItem;
