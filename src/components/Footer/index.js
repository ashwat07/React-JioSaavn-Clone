import React from "react";
import styled from "styled-components";
import FooterCenter from "./footercenter";
import FooterEnd from "./footerend";
import FooterStart from "./footerstart";

const FooterWrapper = styled.aside`
  display: flex;
  width: 100%;
  height: 12vh;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  border-top: 5px solid #e3e3e3;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterStart />
      <FooterCenter />
      <FooterEnd />
    </FooterWrapper>
  );
}

export default Footer;
