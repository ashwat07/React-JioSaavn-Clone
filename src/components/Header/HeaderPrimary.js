import React from "react";
import styled from "styled-components";
import AppLogo from "./Logo";

const HeaderPrimaryMain = styled.div`
  display: flex;
  width: 25%;
  margin: 0 5px;
`;

const LogoImg = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavPrimary = styled.nav`
  width: 75%;
  margin: auto;
  font-weight: 700;
  font-size: 1rem;
  height: 100%;
`;

const NavItem = styled.li`
  height: inherit;
  display: flex;
  align-items: center;
  position: relative;

  &:hover::after {
    height: 2px;
    content: "";
  }

  &::after {
    content: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #101010;
    transition: height 0.4s;
  }
`;

const AnchorItem = styled.a`
  color: #3e3e3e;
  opacity: 0.8;
  font-size: 0.895rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;


const headerFirst = [
  { id: 1, label: "Home" },
  { id: 2, label: "Browse" },
  { id: 3, label: "Premium" },
];

function HeaderPrimary() {
  return (
    <HeaderPrimaryMain>
      <LogoImg>
        <AppLogo />
      </LogoImg>
      <NavPrimary>
        <NavList>
          {headerFirst.map(({ id, label }) => (
            <NavItem key={id}>
              <AnchorItem href="/" text={label}>
                {label}
              </AnchorItem>
            </NavItem>
          ))}
        </NavList>
      </NavPrimary>
    </HeaderPrimaryMain>
  );
}

export default HeaderPrimary;
