import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bottomtabs from "./bottomtabs";
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
  const [isInvisibleBottomTab, setIsInvisibleBottomTab] = useState(
    window.innerWidth > 980
  );

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleSize = () => {
    setIsInvisibleBottomTab(window.innerWidth > 980);
  };

  return (
    <FooterWrapper>
      {isInvisibleBottomTab ? (
        <>
          <FooterStart />
          <FooterCenter />
          <FooterEnd />
        </>
      ) : (
        <Bottomtabs />
      )}
    </FooterWrapper>
  );
}

export default Footer;
