import React from "react";
import styled from "styled-components";
import { NavHashLink  } from 'react-router-hash-link';
const NavItemLink = styled(NavHashLink)`
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
`;

const NavItem = (props) => {
  return (
    <NavItemLink smooth={true} innerRef={props.innerRef} to={props.to} onClick={props.onClick}>
      {props.children}
    </NavItemLink>
  );
};

export default NavItem;
