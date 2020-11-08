import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const Main = styled.div`
  height: auto;
  max-width: 120rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <Header />
      <Container />
      <Footer />
    </Main>
  );
}

export default App;
