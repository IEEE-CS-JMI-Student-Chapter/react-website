import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Navbar.module.css";
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NavActive from "./NavActive";
import { useLocation, useHistory } from "react-router";
import Button from "./../UI/Button/Button";
import ContactForm from "../Forms/ContactForm";
import Backdrop from "../UI/Backdrop/Backdrop";
import SnackbarProvider from "react-simple-snackbar";

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

  const contactModalHandler = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const submitHandler = () => {
    console.log("Your response has been rejected!");
  };
  const handlePath = React.useCallback(() => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/teams":
        return 1;
      case "/events":
        return 2;
      case "/leetcode":
        return 3;
      default:
        return 3;
    }
  }, [location.pathname]);
  const [pos, setpos] = useState(0);
  const [Click, setClick] = useState(handlePath());
  const Buttonref = useRef(null);

  const setactive = (e, index) => {
    setClick(index);
    Buttonref.current = this;
  };
  const handleScroll = () => {
    if(Buttonref.current == undefined)
      return;
    let right = Buttonref.current.getBoundingClientRect().left;
    setpos({
      right: right,
      width: Buttonref.current.getBoundingClientRect().width,
    });
  };

  useEffect(() => {
    if(Buttonref.current == null || Buttonref == null)
      return;
    else{
      console.log(Buttonref.current)
      handleScroll();
      window.addEventListener("resize", handleScroll);  
    }
  }, [Click]);

  useEffect(() => {
    if(Buttonref.current == null || Buttonref == null)
    return;

    setTimeout(() => {
      handleScroll();
    }, 100);
  }, []);

  useEffect(() => {
    setClick(handlePath);
  }, [handlePath, location.pathname]);

  const NavInfo = [
    {
      to: "/#top",
      name: "Home",
    },
    {
      to: "/teams",
      name: "Teams",
    },
    {
      to: "/events",
      name: "Events",
    },
    {
      to: '/leetcode',
      name: "Leetcode Rankings"
    }
  ];

  return (
    <nav className={classes["nav-container"]}>
      <NavBrand
        logo={"/assets/ieeecs_logo.svg"}
        onClick={() => history.push("/")}
      />
      <div className={classes["nav-links"]}>
        {NavInfo.map((item, index) => {
          return (
            <NavItem
              key={index}
              innerRef={index === Click ? Buttonref : null}
              to={item.to}
              onClick={(e) => setactive(e, index)}
            >
              {item.name}
            </NavItem>
          );
        })}
        <Button
          onClick={() => contactModalHandler()}
          className={classes["contact-button"]}
        >
          Contact
        </Button>
        {isContactOpen &&
          ReactDOM.createPortal(
            <SnackbarProvider>
              <ContactForm
                onSubmit={submitHandler}
                onClose={closeContactModal}
              />
            </SnackbarProvider>,
            document.getElementById("modal")
          )}
        {isContactOpen &&
          ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop")
          )}
        <NavActive
          right={pos.right}
          width={pos.width}
          styles={{ left: pos.right !== undefined ? pos.right : 2200 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
