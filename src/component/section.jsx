import React from "react";
import styled from "./section.module.css";
import styled1 from "styled-components";
import logo from "../images/down-arrow.svg";
import Fade from "react-reveal/Fade";
const Section = ({ title, discription, leftButton, rightButton, image }) => {
  return (
    <div>
      <Wrap bgImage={image}>
        <h1>Boss</h1>
        <TextParagraph>
          <h2>{title}</h2>
          <p>{discription}</p>
        </TextParagraph>
        <Fade bottom cascade>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton ? <RightButton>{rightButton}</RightButton> : ""}
            <DownArrow src={logo}></DownArrow>
          </ButtonGroup>
        </Fade>
      </Wrap>
    </div>
  );
};

export default Section;

const Wrap = styled1.div`
background-color: aquamarine;
height: 100vh;
width: 100vw;
background-position: center;
background-size: cover;

background-image: url(${(props) => props.bgImage});
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: -1;
`;
const TextParagraph = styled1.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-top:18vh;

//  animation:animationDown infinite 1.5s;


`;

const ButtonGroup = styled1.div`
display:flex;
flex:1;
flex-direction:column;
align-items:center;
align-self:flex-end
z-index: -1;
`;

const LeftButton = styled1.button`


border-radius:50px;
padding:21px;
width:310px;
background-color:black;
opacity:0.8;

color:white;
align-item:center;
text-transform:uppercase,
font-sie:12px;
margin-bottom:30px;
cursor:pointer

`;
const RightButton = styled1(LeftButton)`
background-color:white;
color:black;
font-weight:700;
opacity:0.8
`;

const DownArrow = styled1.img`
overflow-x:hidden;
margin-top:30px;
height:50px;
animation:animationDown infinite 1.5s;
`;

const Buttons = styled1.div``;
