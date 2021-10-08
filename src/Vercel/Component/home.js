import React from "react";
import styled from "styled-components";
import Hero from "./hero";
import Nav from "./nav";
const Home = () => {
  return (
    <Container>
      <Nav />
      <Hero />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export default Home;
