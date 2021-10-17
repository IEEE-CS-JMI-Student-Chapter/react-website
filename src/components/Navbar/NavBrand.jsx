import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  img {
    width: 40px;
  }
`;

const NavBrand = (props) => {
  return (
    <LogoContainer>
      <img src={props.logo} alt="logo" onClick={props.onClick} />
    </LogoContainer>
  );
};

export default NavBrand;
