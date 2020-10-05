import React, { useState } from "react";
import styled from "styled-components";
import AppLogo from "./Logo";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const HeaderMain = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0 3px;
  border-bottom: 1px solid #e9e9e9;
`;

const HeaderPrimary = styled.div`
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

const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
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

const HeaderSecondary = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  flex: 1;
  height: 60px;
`;

const SearchWrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.isFocus ? "-30%" : "5%")};
  right: ${(props) => (props.isFocus ? "-30%" : "5%")};
  box-shadow: ${(props) =>
    props.isFocus ? "0 20px 30px 10px rgba(0,0,0,.1)" : "none"};
  top: 10px;
  font-size: 0.8rem;
  display: inline-block;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  border-radius: 22px;
`;

const Input = styled.input`
  outline: none;
  border: 0px;
  height: 40px;
  padding: 0 15px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: ${(props) => (props.isFocus ? "1px solid #e2e2e2" : "none")};
`;

const Placeholders = styled.span`
  position: absolute;
  top:10px;
  left: ${(props) =>
    props.isFocus ? "5px" : "40%"};
  transition: left .3s ease-in-out;
`;

const SearchIcon = styled(FaSearch)`
  cursor: inherit;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out
`;

const Label = styled.label`
  cursor: inherit;
  margin-left: 0.5rem;
  opacity: ${(props) =>
    props.isFocus ? "0" : "1"};
  transition: opacity .3s ease-in-out
`;

const SearchList = styled.div`
  width: 100%;
  /* max-height: 800px; */
  background-color: #fff;
  height: ${(props) => (props.isFocus ? "170px" : "0px")};
  transition: all 0.3s ease-in-out 0.3s;
  z-index: 100;
`;



const HeaderTertiary = styled.div`
  display: flex;
  width: 25%;
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

// const AsideHeader = styled.div``;

const AsideType = styled.span`
  position: relative;
  opacity: 0.9;
`;

const AsideSelect = styled.span`
  display: block;
  opacity: 0.5;
`;

const Angle = styled(FaChevronDown)`
  position: absolute;
  top: 8px;
  right: -20px;
`;

const NavTertiary = styled(NavPrimary)`
  width: 50%;
`;

const headerFirst = [
  { id: 1, label: "Home" },
  { id: 2, label: "Browse" },
  { id: 3, label: "Premium" },
];

const headerLast = [
  { id: 1, label: "Log In" },
  { id: 2, label: "Sign Up" },
];

function Header() {
  const [toggleInput, setToggleInput] = useState(false);

  console.log(toggleInput);
  return (
    <HeaderMain>
      <HeaderPrimary>
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
      </HeaderPrimary>
      <HeaderSecondary>
        <Form action="#">
          <SearchWrapper isFocus={toggleInput}>
            <Input
              isFocus={toggleInput}
              type="text"
              onClick={() => setToggleInput((state) => !state)}
            />
            <SearchList isFocus={toggleInput}>
              <div>Helo</div>
            </SearchList>
            <Placeholders isFocus={toggleInput}>
              <SearchIcon isFocus={toggleInput} />
              <Label isFocus={toggleInput}>Search</Label>
            </Placeholders>
          </SearchWrapper>
          {/* {toggleInput && (
            
          )} */}
        </Form>
      </HeaderSecondary>
      <HeaderTertiary>
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
      </HeaderTertiary>
    </HeaderMain>
  );
}

export default Header;
