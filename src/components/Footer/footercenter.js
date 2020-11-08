import React from "react";
import styled from "styled-components";
import { BiRepeat } from "react-icons/bi";
import { BiShuffle } from "react-icons/bi";
import { MdSkipPrevious, MdSkipNext, MdPlayArrow } from "react-icons/md";

const Wrapper = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 0.5rem;
    opacity: 0.5;
  }

  &:not(:first-child),
  &:not(:last-child) {
    font-size: 45px;
  }
`;
const Prev = styled(MdSkipPrevious)``;

const Next = styled(MdSkipNext)``;
const Repeat = styled(BiRepeat)`
  font-size: 25px;
`;
const Play = styled(MdPlayArrow)``;

const Shuffle = styled(BiShuffle)`
  font-size: 25px;
`;

function FooterCenter() {
  return (
    <Wrapper>
      <Repeat />
      <Prev />
      <Play />
      <Next />
      <Shuffle />
    </Wrapper>
  );
}

export default FooterCenter;
