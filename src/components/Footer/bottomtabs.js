import React from "react";
import styled from "styled-components";
import { IoMdSearch, IoMdHome } from "react-icons/io";
// import { IoHomeOutline } from "react-icons/im";
import { BsCompass } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";

const BottomTabWrapper = styled.div`
  display: flex;
  min-width: 100%;
`;

const Home = styled(IoMdHome)`
  flex-basis: 25%;
  font-size: x-large;
`;
const Search = styled(IoMdSearch)`
  flex-basis: 25%;
  font-size: x-large;
`;
const Browse = styled(BsCompass)`
  flex-basis: 25%;
  font-size: x-large;
`;
const Login = styled(RiUserLine)`
  flex-basis: 25%;
  font-size: x-large;
`;

export default function bottomtabs() {
  return (
    <BottomTabWrapper>
      <Home />
      <Search />
      <Browse />
      <Login />
    </BottomTabWrapper>
  );
}
