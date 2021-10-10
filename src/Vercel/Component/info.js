import React from "react";
import styled from "styled-components";
import { Framework } from "./framework";

const Info = () => {
  return (
    <Container>
      <Wrapper>
        <SvgBuild>
          <TopHeader>
            <Red></Red>
            <Green></Green>
            <Blue></Blue>
            <Code>Index.js</Code>
          </TopHeader>
          <CodeEnv>
            <NumCount>
              <Num>1</Num>
              <Num>2</Num>
              <Num>3</Num>
              <Num>4</Num>
              <Num>5</Num>
            </NumCount>
            <CodeLab>
              <Codes>
                <span>export </span>
                <span>default </span>
                <span>function </span>
                <span>( </span>
                <span></span>
              </Codes>
              <Codes>
                return <span></span>
                <code>Layout</code>
              </Codes>
              <Codes>3</Codes>
              <Codes>4</Codes>
              <Codes>5</Codes>
            </CodeLab>
          </CodeEnv>
          <SvgChild>
            <TopHeader>
              <Red></Red>
              <Green></Green>
              <Blue></Blue>
              <Code>Index.js</Code>
            </TopHeader>
          </SvgChild>
        </SvgBuild>

        <TextBuild>
          <Text>
            <TextTitle>Fast Refresh</TextTitle>
            <TitleDescc>Reliable live-editing experience for your UI components.</TitleDescc>
          </Text>
          <Text>
            <TextTitle>Flexible Data Fetching</TextTitle>
            <TitleDescc>
              Connect your pages to any data source, headless CMS, or API and make it work in
              everyone’s dev environment.
            </TitleDescc>
          </Text>
          <Text>
            <TextTitle>Edge on Localhost</TextTitle>
            <TitleDescc>
              RFrom caching to Serverless Functions, all our cloud primitives work perfectly on
              localhost.
            </TitleDescc>
          </Text>
        </TextBuild>
      </Wrapper>
      <Framework />
    </Container>
  );
};
export default Info;
const Codes = styled.div`
  padding: 3px 2px;
`;
const CodeLab = styled.div`
  width: 500px;
  background: red;
  height: 150px;
  padding: 5px;
`;
const CodeEnv = styled.div`
  display: flex;
`;

const NumCount = styled.div`
  background: #eaeaea;
  width: 10px;
  padding: 5px;
`;
const Num = styled.div`
  padding: 3px 2px;
  opacity: 0.6;
`;

const Code = styled.div`
  padding: 10px;
  border: 1px solid #eaeaea;
  border-bottom: none;
  opacity: 0.6;
  font-size: 15px;
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
const Text = styled.div`
  padding: 20px 0;
`;
const TextTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 10px 0;
`;
const TitleDescc = styled.div`
  font-size: 16px;
  opacity: 0.6;
`;
const SvgChild = styled.div`
  width: 500px;
  height: 250px;
  border: 0.3px solid #eaeaea;
  margin: 0 20px;
  box-shadow: 0px 10px -10px 16px rgb(0 0 0/39%);
  border-radius: 10px;
  position: absolute;
  left: 20px;
`;
const SvgBuild = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0/39%) 0px 16px 10px -10px;
  width: 500px;
  height: 350px;
  border: 0.3px solid #eaeaea;
  margin: 0 20px;
  box-shadow: 0px 10px -10px 16px rgb(0 0 0/39%);
  border-radius: 10px;
`;
const TextBuild = styled.div`
  width: 450px;
  font-family: ubuntu;
  margin: 0 30px;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  min-heigt: 80vh;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;
