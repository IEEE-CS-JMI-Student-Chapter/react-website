import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavItemLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: calc(100%-5px);
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 5px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #42474d;

    transition: all 0.3s ease-in-out;
  }
  &.active {
    border-bottom: 5px solid #ffa236;
    background: #42474d;

    transition: all 0.3s ease-in-out;
  }
`;

const NavItem = (props) => {
  return (
    <NavItemLink exact={true} to={props.to}>
      {props.children}
    </NavItemLink>
  );
};

export default NavItem;
