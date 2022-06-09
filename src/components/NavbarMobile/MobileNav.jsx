import React from "react";
import classes from "./NavbarMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";
const MobileNav = () => {
  return (
    <div className={classes["nav-container"]}>
      <NavItem to="/#top" icon={<FontAwesomeIcon icon={icons.faHome} />}>
        Home
      </NavItem>
      <NavItem to="/teams" icon={<FontAwesomeIcon icon={icons.faUsers} />}>
        Teams
      </NavItem>
      <NavItem
        to="/resources"
        icon={<FontAwesomeIcon icon={icons.faCalendarAlt} />}
      >
        Resources
      </NavItem>
      <NavItem to="/leetcode" icon={<FontAwesomeIcon icon={icons.faCode} />}>
        Leetcode
      </NavItem>
    </div>
  );
};

export default MobileNav;
