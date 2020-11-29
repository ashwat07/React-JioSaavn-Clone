import React from "react";
import styled from "styled-components";
import { RiVolumeUpFill } from "react-icons/ri";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Wrapper = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * {
    margin: 1rem;
    opacity: 0.5;
  }

  &:not(:first-child) {
    font-size: 25px;
  }
`;

const Time = styled.span`
  font-size: 0.866rem;
`;
const Horz = styled(BiDotsHorizontalRounded)``;
const Volume = styled(RiVolumeUpFill)``;
const FullScreen = styled(CgArrowsExpandRight)``;

function FooterEnd() {
  return (
    <Wrapper>
      <Time>0.00/0.00</Time>
      <Horz />
      <Volume />
      <FullScreen />
    </Wrapper>
  );
}

export default FooterEnd;
