import React from "react";
import styled from "styled-components";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Img = styled.img`
  border-radius: 5px;
  height: 90%;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const IconsWrapper = styled.div`
  width: 100%;
  position: absolute;
  transform: translate(30%, 60%);
  transition: opacity 0.3s ease-out;
  opacity: 0;
`;

const BottomIconsWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  opacity: 0;
  padding: 5px;
  transition: opacity 0.3s ease-out;
`;

const PlayIcon = styled(AiFillPlayCircle)`
  font-size: 3.5rem;
  color: #fff;
  transition: opacity 0.3s ease-out;
`;
const HeartIcon = styled(AiOutlineHeart)`
  font-size: 1.3rem;
  color: #fff;
`;

const HorzIcon = styled(BsThreeDots)`
  font-size: 1.3rem;
  color: #fff;
`;

const Wrapper = styled.div`
  min-width: 140px;
  min-height: 140px;
  margin-top: 1rem;
  cursor: pointer;
  position: relative;

  &:hover ${IconsWrapper}, &:hover ${BottomIconsWrapper} {
    opacity: 1;
    z-index: 99;
  }

  &:hover ${Img} {
    filter: brightness(40%);
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const P = styled.p`
  display: block;
  text-align: center;
  font-size: 0.86667rem;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: opacity 0.3s ease-in;
  background: aliceblue;

  &:hover {
    opacity: 0.5;
  }
`;

function SongCard(props) {
  const { name, img } = props;
  return (
    <Wrapper>
      <IconsWrapper>
        <PlayIcon />
      </IconsWrapper>
      <BottomIconsWrapper>
        <HeartIcon />
        <HorzIcon />
      </BottomIconsWrapper>
      <Img src={img}></Img>
      <P>{name}</P>
    </Wrapper>
  );
}

export default SongCard;
