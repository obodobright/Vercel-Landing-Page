import React from "react";
import styled from "styled-components";
import HeaderUtils from "./headerUtil";
export const Preview = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderUtils text="2" op />
        <Title>Preview</Title>
        <SubTitle>Accelerate with your Team</SubTitle>
        <Text>
          Frontend development is not meant to be a solo activity. The Vercel platform makes it a
          collaborative experience with deploy previews for every code change, by seamlessly
          integrating with <span>GitHub</span> , <span>Bitbucket</span>, and <span>GitLab</span>.
        </Text>
      </Wrapper>
    </Container>
  );
};
export default Preview;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  padding: 20px 0;
  background: -webkit-linear-gradient(10deg, #8226c6, #991fb9, #b118ac, #c8109e, #ce0e9b, #d10d99);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: 55px;
  font-weight: bold;
`;
const Text = styled.div`
width:60%;
text-align:center;
margin:20px 0;
  padding: 0 20px;
  letter-spacing: 0.7px;
  color:gray;
  line-height:1.6;

  span {
    color: #d10d99;
    font-weight:500
    transition:all 350ms;
    opacity:1;


    :hover{
      cursor:pointer;
      color:black;
      opacity:2;
      box-shadow:0 30px 30px rgb(0 0 0 / 2%), 0 0 8px rgb(0 0 0 / 3%), 0 1px 0 rgb(0 0 0 / 5%)

    }
  }
`;
