import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container>
        <Logo>
          <img src={logo} alt="logo" width="100px" height="40px" />
        </Logo>

        <Menu>
          <p>
            <Link href="">Model X</Link>
          </p>
          <p>
            <Link href="">Model F</Link>
          </p>
          <p>
            <Link href="">Model Y</Link>
          </p>
          <p>
            <Link href="">Model W</Link>
          </p>
        </Menu>
        <HelloMenu>
          <p>
            <Link href="">Shop</Link>
          </p>
          <p>
            <Link href="">Account</Link>
          </p>
          <p>
            <p
              onClick={() => setShow(true)}
              style={{ textDecoration: "underLine" }}
            >
              Menu
            </p>
          </p>
        </HelloMenu>

        <BurgerSideBarr show={show}>
          <br />
          <CloseMenu onClick={() => setShow(false)}>Close </CloseMenu>
          <NMenu>
            <p>
              <Link href="">Model X</Link>
            </p>
            <p>
              <Link href="">Model F</Link>
            </p>
            <p>
              <Link href="">Model Y</Link>
            </p>
            <p>
              <Link href="">Model W</Link>
            </p>
          </NMenu>
          <li>
            <a href="">Existing Invertory</a>
          </li>
          <li>
            <a href="">used Invertory</a>
          </li>
          <li>
            <a href="">Trade-In</a>
          </li>
          <li>
            <a href="">Cyber-truck</a>
          </li>
          <li>
            <a href="">Existing Invertory</a>
          </li>
          <li>
            <a href="">Roadaster</a>
          </li>

          <li>
            <a href="">Existing Invertory</a>
          </li>
          <li>
            <a href="">Existing Invertory</a>
          </li>
          <li>
            <a href="">Existing Invertory</a>
          </li>
        </BurgerSideBarr>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;

  display: flex;
  z-index: 1;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  flext: 1;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-content: center;
  align-self: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    color: black;
  }
  p a {
    color: black;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  display: column;
  align-slef: center;
  align-content: center;
  justify-content: flex-start;
  justify-self: flex-start;
  width: 30px;
`;

const HelloMenu = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  p {
    padding: 0 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
  }
  p a {
    color: black;
  }
  margin-top: 20px;
`;

const BurgerSideBarr = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-item: flex-start;
  text-decoration: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 250px;
  z-index: 16;
  transition: transform 0.2s;
  li {
    display: flex;
    border-bottom: 1px solid black;
    padding: 15px;
    text-decoration: none;
    list-style: none;
  }

  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
`;

const CloseMenu = styled.button`
  display: flex;
justify-self:flex-end;
align-self:flex-end;
justify-content-flex-end;
  float:right;
  margin-bottom:20px;
  padding:10px;
  border-radius:10px;
`;

const NMenu = styled(Menu)`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    display: none;
  }
  p {
    width: 100%;
    border-bottom: 1px solid black;
    padding: 10px;
  }
`;
