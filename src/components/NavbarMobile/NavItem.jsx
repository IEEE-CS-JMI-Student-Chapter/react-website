import React from "react";
import classes from "./NavbarMobile.module.css";
import { NavLink } from "react-router-dom";
const NavItem = (props) => {
  return (
    <NavLink exact={true} activeClassName={classes.active} to={props.to} className={`${classes["nav-item"]}`}>
      <span className={classes["nav-icon"]}> {props.icon}</span>

      <span className={classes["nav-title"]}>{props.children}</span>
    </NavLink>
  );
};

export default NavItem;
