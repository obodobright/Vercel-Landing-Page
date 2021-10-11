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
        <PreviewContent>
          <ImageBox>
            <Terminal>
              <SvgChild>
                <TopHeader>
                  <Red></Red>
                  <Green></Green>
                  <Blue></Blue>
                  <Code>Bash</Code>
                </TopHeader>
                <BashTerminal>~ e-commerce-site/ git push</BashTerminal>
              </SvgChild>
            </Terminal>
            <Comment>
              <CommentBox>
                <TopHeader>
                  <Logo>Vercel</Logo>
                  <Bot>Bot</Bot>
                  <CommentHour>Commented one hour ago</CommentHour>
                </TopHeader>
                <CommentContainer>
                  <Content>
                    This pull request is being automatically deployed with Vercel. To see the status
                    of your deployment, click below:
                  </Content>
                  <Link>
                    🔍 Inspect: <span>https://vercel.com/acme/shop/krgj1n5 </span>
                  </Link>
                  <Link>
                    ✅ Preview: <span> https://shop-git-new-checkout.vercel.app</span>{" "}
                  </Link>
                </CommentContainer>
              </CommentBox>
            </Comment>
          </ImageBox>
          <LineDraw>
            <FirstDraw></FirstDraw>
            <SecondDraw></SecondDraw>
            <ThirdDraw></ThirdDraw>
            <SecondDraw></SecondDraw>
            <ThirdDraw></ThirdDraw>
          </LineDraw>
          <TextBox></TextBox>
        </PreviewContent>
      </Wrapper>
    </Container>
  );
};
export default Preview;
const Link = styled.div`
  font-size: 13px;
  font-weight: bold;

  span {
    color: BLUE;
    text-decoration: underline;
    font-weight: NORMAL;
  }
`;
const Content = styled.div`
  font-size: 13px;
  opacity: 0.7;
  margin: 20px 0;
`;
const CommentContainer = styled.div`
  padding: 10px 15px;
`;
const Logo = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 7px 10px;
`;
const Bot = styled.div`
  font-size: 12px;
  padding: 7px 10px;
  background: BLUE;
  margin: 0 6px;
  border-radius: 7px;
`;
const CommentHour = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 7px 10px;
  opacity: 0.6;
`;
const Comment = styled.div``;
const CommentBox = styled.div`
  width: 450px;
  height: 200px;
  border: 0.3px solid #eaeaea;
  margin: 50px 20px;
  box-shadow: rgb(0 0 0/39%) 0px 16px 16px -10px;
  border-radius: 10px;
`;
const BashTerminal = styled.div``;
const Code = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-self:center
  opacity: 0.6;
  font-size: 13px;
  margin-left:150px
`;
const Red = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  margin: 0 4px;
`;
const Green = styled.div`
  width: 10px;
  height: 10px;
  background: green;
  border-radius: 50%;
  margin: 0 4px;
`;
const Blue = styled.div`
  width: 10px;
  height: 10px;
  background: gold;
  border-radius: 50%;
  margin: 0 4px;
`;
const TopHeader = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
`;
const Terminal = styled.div`
  position: relative;
`;
const SvgChild = styled.div`
  width: 450px;
  height: 250px;
  border: 0.3px solid #eaeaea;
  margin: 0 20px;
  box-shadow: rgb(0 0 0/39%) 0px 16px 16px -10px;
  border-radius: 10px;
`;

const ThirdDraw = styled.div`
  border-right: 2px dotted black;
  height: 350px;
`;
const SecondDraw = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;
const FirstDraw = styled.div`
  width: 2px;
  height: 100px;
  background: blue;
  margin: 0 10px;
`;
const PreviewContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
`;
const ImageBox = styled.div`
  width: 500px;
  height: 800px;
  background: whitesmoke;
  margin: 0 10px;
`;
const LineDraw = styled.div``;
const TextBox = styled.div`
  width: 500px;
  height: 300px;
  background: green;
  margin: 0 10px;
`;
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
