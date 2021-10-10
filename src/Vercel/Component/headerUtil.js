import React from "react";
import styled from "styled-components";

export const HeaderUtils = ({ text, lg, op }) => {
  return (
    <Container>
      <DesignHeader>
        <TopLine lg={lg} op={op}></TopLine>
        <RoundDesign lg={lg} op={op}>
          {text}
        </RoundDesign>
      </DesignHeader>
    </Container>
  );
};
export default HeaderUtils;

const DesignHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
`;
const TopLine = styled.div`
  width: 1px;
  fade: ease-in;
  height: 100px;
  background-image: ${({ lg }) =>
    lg ? "linear-gradient(90deg, #0387ed, #12c5de, #02a9e5)" : null};
  background-image: ${({ op }) =>
    op ? "linear-gradient(90deg,  #C8109E, #991FB9, #CE0E9B, #B118AC, #D10D99)" : null};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const RoundDesign = styled.div`
  background-image: ${({ op }) =>
    op ? "linear-gradient(to right,#8226C6, #991FB9,#B118AC, #C8109E, #CE0E9B, #D10D99)" : null};
  background-image: ${({ lg }) =>
    lg ? "linear-gradient(90deg, #0387ed, #12c5de, #02a9e5)" : null};

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  left: -20px;
  border-radius: 50%;
  color: white;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
