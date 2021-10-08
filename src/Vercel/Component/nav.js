import React from "react";
import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <BsTriangleFill style={{ fontSize: "30px" }} />
          <Text>Vercel</Text>
        </Logo>
        <Navigation>
          <NavLink>Template</NavLink>
          <NavLink>Integrations</NavLink>
          <NavLink>Analytics</NavLink>
          <NavLink>Customers</NavLink>
          <NavLink>Pricing</NavLink>
        </Navigation>
        <SideNavigation>
          <NavLink>Contact</NavLink>
          <NavLink>Login</NavLink>
          <Button>Sign Up</Button>
        </SideNavigation>
      </Wrapper>
    </Container>
  );
};
export default Nav;

const Button = styled.button`
  outline: none;
  border: 0;
  background: black;
  height: 35px;
  width: 75px;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 28px;
  padding: 0;
  font-weight: bold;
  font-family: arial black;
`;
const Navigation = styled.div`
  display: flex;
`;
const NavLink = styled.div`
  margin: 0 10px;
  font-size: 15px;
  opacity: 0.6;
  transition: all 350ms;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const SideNavigation = styled.div`
  display: flex;
  margin-right: 60px;
  align-items: center;
`;
const Logo = styled.div`
  width: 200px;
  height: 40px;
  object-fit: contain;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: whitesmoke;
`;
