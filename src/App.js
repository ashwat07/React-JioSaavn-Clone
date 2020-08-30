import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Container from "./components/Container";

const Main = styled.div`
  height: auto;
  max-width: 120rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <Header />
      <Container />
    </Main>
  );
}

export default App;
