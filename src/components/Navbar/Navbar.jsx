import React,{useState,useRef,useEffect} from "react";
import classes from "./Navbar.module.css";
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NavActive from "./NavActive";

const Navbar = () => {

  const [pos, setpos] = useState(0);
  const [Click, setClick] = useState(0);
  const Buttonref = useRef(null);

  const setactive = (e,index) => {
    setClick(index);
  }

  useEffect(() => {
    let right = Buttonref.current.getBoundingClientRect().x;
    setpos({
      right: right,
      width: Buttonref.current.getBoundingClientRect().width
    });
  });

  const NavInfo = [
    {
      "to" : "/",
      "name" : "Home",
    },
    {
      "to" : "/teams",
      "name" : "Teams",
    },
    {
      "to" : "/leads",
      "name" : "Leads",
    },
    {
      "to" : "/events",
      "name" : "Events",
    }
  ]

  return (
    <nav className={classes["nav-container"]}>
      <NavBrand logo={"/assets/ieeecs_logo.svg"} />
      <div className={classes["nav-links"]}>
        <NavActive right={pos.right} width={pos.width} styles={{right: {pos}}}/>
        {NavInfo.map((item, index) => {
          return(
            <NavItem key={index} innerRef ={index === Click? Buttonref : null} to={item.to} onClick={(e) => setactive(e,index)}>
              {item.name}
            </NavItem>
          )
        })}
      </div>
    </nav>
  );
};

export default Navbar;
