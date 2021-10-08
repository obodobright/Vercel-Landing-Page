import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Develop>Develop.</Develop>
          <Preview>Preview.</Preview>
          <Ship>Ship.</Ship>
        </Text>

        <Button>
          <GlobalButton text="Start Deploying" bg cl bd />
          <GlobalButton text="Get a Demo" bd />
        </Button>
        <Sub>
          Vercel combines the best developer experience with an obsessive focus on end-user
          performance. Our platform enables frontend teams to do their best work.
        </Sub>
      </Wrapper>
    </Container>
  );
};
export default Hero;
const Ship = styled.div``;
const Preview = styled.div``;
const Develop = styled.div``;
const Text = styled.div`
  padding: 20px 0;
  font-family: ubuntu;
  font-size: 160px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 800;
`;
const Button = styled.div`
  display: flex;
  margin: 40px 0;
`;
const Sub = styled.div`
  width: 70%;
  text-align: center;
  font-size: 20px;
  opacity: 0.6;
  margin-top: 20px;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;

  background: white;
`;
