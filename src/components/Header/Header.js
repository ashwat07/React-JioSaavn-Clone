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
  z-index: 999;
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
