import React from "react";
import styled from "styled-components";
import songsList from "../../data/songData";
import SongCard from "./SongCard";

const Wrapper = styled.div`
  flex: 1;
  margin-top: 15rem;
`;

const TrendingHeader = styled.h3``;

const SongListWrapper = styled.div`
  /* display: flex; */
  margin: 5px;
`;

function Content() {
  return (
    <Wrapper>
      <TrendingHeader>Trending Now</TrendingHeader>
      <SongListWrapper>
        {songsList.map(({ id, name, category, img }) => (
          <SongCard key={id} name={name} category={category} img={img} />
        ))}
      </SongListWrapper>
    </Wrapper>
  );
}

export default Content;
