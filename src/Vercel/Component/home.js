import React from "react";
import styled from "styled-components";
import Develop from "./develop";
import Hero from "./hero";
import Nav from "./nav";
import Preview from "./preview";

const Home = () => {
  return (
    <Container>
      <Nav />
      <Hero />
      <Develop />
      <Preview />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export default Home;
