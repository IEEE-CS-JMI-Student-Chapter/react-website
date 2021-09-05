import React from "react";
import classes from "./Navbar.module.css";
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className={classes["nav-container"]}>
      <NavBrand logo={"/assets/ieeecs_logo.svg"} />
      <div className={classes["nav-links"]}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/teams">Our Team</NavItem>
        <NavItem to="/leads">Leads</NavItem>
        <NavItem to="/events">Events</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
