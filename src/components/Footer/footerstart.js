import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  align-items: center;
`;

const ThumbNail = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background: #e3e3e3;
  margin-left: 1rem;
`;

function FooterStart() {
  return (
    <Wrapper>
      <ThumbNail />
    </Wrapper>
  );
}

export default FooterStart;
