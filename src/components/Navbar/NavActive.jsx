import styled from "styled-components";
import React from "react";


const Nav = styled.div`
    position: absolute;
    background-color:#ffa236;
    width: ${props => props.width}px;
    height:5px;
    bottom:0;
    left:${props => props.right}px;
    transition: 0.5s all ease-in-out;

`;

const NavActive = (props) => {
    return (
        <Nav right={props.right} width={props.width} styles = {props.styles}>
            {props.children}
        </Nav>
    )
};

export default NavActive;