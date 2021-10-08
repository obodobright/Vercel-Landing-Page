import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, bg, cl, bd }) => {
  return (
    <Container bg={bg} cl={cl} bd={bd}>
      {text}
    </Container>
  );
};
export default GlobalButton;
const Container = styled.div`
  width: 200px;
  height: 50px;
  color: ${({ cl }) => (cl ? "white" : "gray")};
  background: ${({ bg }) => (bg ? "black" : "transparent")};
  border: ${({ bd }) => (bd ? "0.6px solid whitesmoke" : "null")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 7px;
  margin: 0 13px;
  transition: all 350ms;
  :hover {
    color: ${({ cl }) => (cl ? "black" : "black")};
    background: ${({ bg }) => (bg ? "transparent" : "transparent")};
    border: ${({ bd }) => (bd ? "1px solid black" : "null")};
  }
`;
