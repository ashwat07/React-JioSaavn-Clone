import React from "react";
import styled from "styled-components";
import HeaderPrimary from "./HeaderPrimary";
import HeaderSecondary from "./HeaderSecondary";
import HeaderTertiary from "./HeaderTertiary";

const HeaderMain = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0 3px;
  border-bottom: 1px solid #e9e9e9;
  position: fixed;
  z-index: 10000;
  background-color: #f6f6f6;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

function Header() {
  return (
    <HeaderMain>
      <HeaderPrimary />
      <HeaderSecondary />
      <HeaderTertiary />
    </HeaderMain>
  );
}

export default Header;
