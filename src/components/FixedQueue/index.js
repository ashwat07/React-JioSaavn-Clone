import React, { useState } from "react";
import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Layout = styled.div`
  position: fixed;
  right: 0;
  top: 15%;
  height: 70%;
  width: ${({ isexpand }) => (isexpand ? "450px" : "75px")};
  background-color: #f6f6f6;
  border: 1px solid #e9e9e9;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.05);
  transition: width 300ms ease-out;
  cursor: pointer;
  z-index: 9999;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e9e9e9;
  height: 50px;
`;

const Queue = styled.h4`
  align-self: center;
`;

const Horz = styled(BiDotsHorizontalRounded)`
  display: ${({ isexpand }) => (isexpand ? "block" : "none")};
  align-self: center;
  font-size: 30px;
  color: #eee;
`;

const SaveAndClearWrapper = styled.h4`
  display: ${({ isexpand }) => (isexpand ? "block" : "none")};
  padding: 10px 10px;
  background-color: #eee;
  color: #fff;
  border-radius: 10px;
  align-self: center;
`;

const HeaderEnd = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

function FixedQueue() {
  const [expandQueue, setExpandQueue] = useState(false);

  const handleWidth = () => setExpandQueue((s) => !s);

  return (
    <Layout
      isexpand={expandQueue ? 1 : 0}
      onMouseEnter={handleWidth}
      onMouseLeave={handleWidth}
    >
      <Header>
        <Queue>Queue</Queue>
        <HeaderEnd>
          <Horz isexpand={expandQueue ? 1 : 0} />
          <SaveAndClearWrapper isexpand={expandQueue ? 1 : 0}>
            Save
          </SaveAndClearWrapper>
          <SaveAndClearWrapper isexpand={expandQueue ? 1 : 0}>
            Clear
          </SaveAndClearWrapper>
        </HeaderEnd>
      </Header>
    </Layout>
  );
}

export default FixedQueue;
