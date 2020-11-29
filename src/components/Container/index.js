import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Content from "../Content";
import FixedQueue from "../FixedQueue";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

function Container() {
  return (
    <Layout>
      <Sidebar />
      <Content />
      <FixedQueue />
    </Layout>
  );
}

export default Container;
