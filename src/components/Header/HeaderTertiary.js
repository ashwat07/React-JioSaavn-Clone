import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const HeaderTertiaryMain = styled.div`
  display: flex;
  width: 25%;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const NavPrimary = styled.nav`
  width: 75%;
  margin: auto;
  font-weight: 700;
  font-size: 1rem;
  height: 100%;
`;

const NavTertiary = styled(NavPrimary)`
  width: 50%;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const Angle = styled(FaChevronDown)`
  position: absolute;
  top: 8px;
  right: -20px;
`;

const AsideType = styled.span`
  position: relative;
  opacity: 0.9;
`;

const Aside = styled.aside`
  font-size: 0.8rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AsideSelect = styled.span`
  display: block;
  opacity: 0.5;
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

const headerLast = [
  { id: uuidv4(), label: "Log In" },
  { id: uuidv4(), label: "Sign Up" },
];

function HeaderTertiary() {
  return (
    <HeaderTertiaryMain>
      <Aside>
        <div>
          <AsideType>
            <span>Music Languages</span>
            <Angle />
          </AsideType>
          <AsideSelect>Hindi</AsideSelect>
        </div>
      </Aside>
      <NavTertiary>
        <NavList>
          {headerLast.map(({ id, label }) => (
            <NavItem key={id}>
              <AnchorItem href="/" text={label}>
                {label}
              </AnchorItem>
            </NavItem>
          ))}
        </NavList>
      </NavTertiary>
    </HeaderTertiaryMain>
  );
}

export default HeaderTertiary;
