import React from "react";
import styled from "styled-components";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Img = styled.img`
  border-radius: 5px;
  height: 100%;
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
  bottom: 0px;
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
  max-width: 140px;
  max-height: 140px;
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
`;

function SongCard(props) {
  const { name, category, img } = props;
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
      {name}
      {category}
    </Wrapper>
  );
}

export default SongCard;
