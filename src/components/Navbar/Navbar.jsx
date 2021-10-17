import React, { useState, useRef, useEffect } from "react";
import classes from "./Navbar.module.css";
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NavActive from "./NavActive";
import { useLocation, useHistory } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  const handlePath = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/#teams":
        return 1;
      case "/#leads":
        return 2;
      case "/events":
        return 3;
      default:
        return 3;
    }
  };
  const [pos, setpos] = useState(0);
  const [Click, setClick] = useState(handlePath());
  const Buttonref = useRef(null);

  const setactive = (e, index) => {
    setClick(index);
    Buttonref.current = this;
  };
  const handleScroll = () => {
    let right = Buttonref.current.getBoundingClientRect().left;
    setpos({
      right: right,
      width: Buttonref.current.getBoundingClientRect().width,
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
  }, [Click]);

  useEffect(() => {
    setTimeout(() => {
      handleScroll();
    }, 100);
  }, []);

  useEffect(() => {
    setClick(handlePath);
  }, [location.pathname]);

  const NavInfo = [
    {
      to: "/#top",
      name: "Home",
    },
    {
      to: "/#teams",
      name: "Teams",
    },
    {
      to: "/#leads",
      name: "Leads",
    },
    {
      to: "/events",
      name: "Events",
    },
  ];

  return (
    <nav className={classes["nav-container"]}>
      <NavBrand logo={"/assets/ieeecs_logo.svg"} onClick={() => history.push("/")}/>
      <div className={classes["nav-links"]}>
        {NavInfo.map((item, index) => {
          return (
            <NavItem key={index} innerRef={index === Click ? Buttonref : null} to={item.to} onClick={(e) => setactive(e, index)}>
              {item.name}
            </NavItem>
          );
        })}
        <NavActive right={pos.right} width={pos.width} styles={{ left: pos.right !== undefined ? pos.right : 2200 }} />
      </div>
    </nav>
  );
};

export default Navbar;
