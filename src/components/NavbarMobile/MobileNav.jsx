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
      <NavItem to="/#leads" icon={<FontAwesomeIcon icon={icons.faCrown} />}>
        Leads
      </NavItem>
      <NavItem to="/events" icon={<FontAwesomeIcon icon={icons.faCalendarAlt} />}>
        Events
      </NavItem>
    </div>
  );
};

export default MobileNav;
