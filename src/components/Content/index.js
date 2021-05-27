import React from "react";
import styled from "styled-components";
import songsList from "../../data/songData";
import SongCard from "./SongCard";

const Wrapper = styled.div`
  flex: 1;
  margin-top: 15rem;
  z-index: 0;
  @media (max-width: 1100px) {
    margin-left: 2.5rem;
  }
`;

const TrendingHeader = styled.h3`
  position: fixed;
`;

const SongListWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SongWrapper = styled.div`
  overflow: scroll;
  width: 75%;
  white-space: nowrap;
  position: fixed;
  height: 500px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function Content() {
  return (
    <Wrapper>
      <TrendingHeader>Trending Now</TrendingHeader>
      <SongWrapper>
        <SongListWrapper>
          {songsList.slice(0, 11).map(({ id, name, category, img }) => (
            <SongCard key={id} name={name} category={category} img={img} />
          ))}
        </SongListWrapper>
        <SongListWrapper>
          {songsList.slice(11).map(({ id, name, category, img }) => (
            <SongCard key={id} name={name} category={category} img={img} />
          ))}
        </SongListWrapper>
      </SongWrapper>
    </Wrapper>
  );
}

export default Content;
