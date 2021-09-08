import React from "react";
import classes from "./NavbarMobile.module.css";
import { HashLink  } from 'react-router-hash-link';
const NavItem = (props) => {
  return (
    <HashLink exact={true} activeClassName={classes.active} to={props.to} className={`${classes["nav-item"]}`}>
      <span className={classes["nav-icon"]}> {props.icon}</span>

      <span className={classes["nav-title"]}>{props.children}</span>
    </HashLink>
  );
};

export default NavItem;
