import React from "react";
import styled from "styled-components";
import { IoMdSearch, IoMdHome } from "react-icons/io";
// import { IoHomeOutline } from "react-icons/im";
import { BsCompass } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";

const BottomTabWrapper = styled.div`
  display: flex;
`;

const Home = styled(IoMdHome)``;
const Search = styled(IoMdSearch)``;
const Browse = styled(BsCompass)``;
const Login = styled(RiUserLine)``;

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
