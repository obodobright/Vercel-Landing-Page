import React from "react";
import styled from "styled-components";
import {
  SiNextdotjs,
  SiReact,
  SiNuxtdotjs,
  SiEmberdotjs,
  SiSvelte,
  SiAngular,
  SiHugo,
  SiGatsby,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
export const Framework = () => {
  const Frames = [
    {
      id: 1,
      name: "Next",
      icon: <SiNextdotjs />,
    },
    {
      id: 2,
      name: "React",
      icon: <SiReact />,
    },

    {
      id: 3,
      name: "Nuxt",
      icon: <SiNuxtdotjs />,
    },

    {
      id: 4,
      name: "Vue",
      icon: <RiVuejsFill />,
    },

    {
      id: 5,
      name: "Ember",
      icon: <SiEmberdotjs />,
    },

    {
      id: 6,
      name: "Svelte",
      icon: <SiSvelte />,
    },

    {
      id: 7,
      name: "Angular",
      icon: <SiAngular />,
    },
    {
      id: 8,
      name: "Hugo",
      icon: <SiHugo />,
    },
    {
      id: 1,
      name: "Gatsby",
      icon: <SiGatsby />,
    },
  ];

  const [showName, setShowName] = React.useState(false);

  return (
    <Container>
      <Wrapper>
        <WrapperTitle>works with over 30+frameworks</WrapperTitle>
        <WrapperFramework>
          {Frames.map((frame) => {
            const { id, name, icon } = frame;
            return (
              <Frame key={id}>
                {icon}
                <span>{name}</span>
              </Frame>
            );
          })}
        </WrapperFramework>
      </Wrapper>
    </Container>
  );
};

const Frame = styled.div`
  font-size: 35px;
  margin: 5px 15px;
  position: relative;
  :hover {
    cursor: pointer;

    span {
      opacity: 1;
    }
  }

  span {
    display: flex;
    justify-content: center;
    font-size: 15px;
    width: fit-content;
    height: 20px;
    background: blue;
    padding: 5px 9px;
    border-radius: 4px;
    background: white;
    color: black;
    box-shadow: rgb(0 0 0/39%) 0px 16px 16px -10px;
    position: absolute;
    top: 45px;
    right: -3px;
    opacity: 0;
    transition: all 350ms;
  }
`;
const WrapperFramework = styled.div`
  display: flex;
  justify-content: center;
`;
const WrapperTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
const Container = styled.div`
  width: 100%;
  height: 30vh;
  margin-top: 30px;
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:30vh;
  justify-content: center;
  align-items:center

  justify-content: center;
`;
