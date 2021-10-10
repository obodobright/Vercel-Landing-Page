import React from "react";
import styled from "styled-components";
import Info from "./info";
import HeaderUtils from "./headerUtil";

const Develop = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderText>EXPLORE THE VERCEL WAY</HeaderText>
        <HeaderUtils text="1" lg bg />
        <Title>Develop</Title>
        <SubTitle>Start with the developer</SubTitle>
        <TextContainer>
          <Text>
            Developers love <span>Next.js</span>, the open source React framework Vercel built
            together with Google and Facebook. Next.js powers the biggest websites like{" "}
            <span>Patreon</span>, for use cases in <span>e-commerce</span>, <span>travel</span> ,
            <span> news</span>, and {""}
            <span>marketing</span>.
          </Text>
          <Text>
            Vercel is the best place to deploy any frontend app. Start by deploying with zero
            configuration to our <span>global edge network</span>. Scale dynamically to millions of
            pages without breaking a sweat.
          </Text>
        </TextContainer>
        <Info />
      </Wrapper>
    </Container>
  );
};
export default Develop;

const Text = styled.div`
  padding: 0 20px;
  letter-spacing: 0.7px;
  color:gray;

  span {
    color: blue;
    font-weight:500
    transition:all 350ms;
    opacity:1;


    :hover{
      cursor:pointer;
      color:black;
      opacity:2;
      

    }
  }
`;
const TextContainer = styled.div`
  margin: 20px 0;
  width: 80%;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 55px;
  font-weight: bold;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 70px;
  padding: 20px 0;
  background: -webkit-linear-gradient(360deg, #0080ef, #0096e9, #00a5e6, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderText = styled.div`
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 2px;
  margin: 40px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  margin-top: 100px;
`;
