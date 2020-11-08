import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background: orangered;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
`;

function Footer() {
  return <FooterWrapper>Footer</FooterWrapper>;
}

export default Footer;
