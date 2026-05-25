import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import "./loading.css";

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const Overlay = styled.div`
 justify-content: center;
    height: 100vh;
    width: 100%;
    background: hsla(68, 29%, 15%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: nowrap;
    gap:18px;
`;

const Title = styled.h1`
  font-size: 2.5vh;
  text-align:  center;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  color: rgb(254, 253, 250);
  `
const SubTitle = styled.h2`
  text-align: center;
    font-weight: 100;
    line-height: 1;
    font-size: 2.5rem;
   font-family: "Monsieur La Doulaise", cursive;
  max-width: 600px;

  margin: 3rem auto 0 auto;
  color:rgb(254, 253, 250);
  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 1rem;
    
    font-size: 3.5rem;
  }
  
  @media (min-width: ${breakpoints.sm}) {
    font-weight: 100;
    padding-bottom: 2rem;
    font-size: 4.5rem;
   
  
  }
  `

const Description = styled.p`
  text-align:  center;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  color: rgb(254, 253, 250);

`

export default function Envelope() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
     setTimeout(() => {
      navigate("/home");
    }, 2500);
  };

  return (
    <Overlay>
    <Title>we’re getting married</Title>
    <SubTitle>Daniel<br/>&<br/>Jasmine</SubTitle>
    <div className="envlope-wrapper">
      <div
        id="envelope"
        className={open ? "open" : "close"}
        onClick={handleOpen}
      >
        <div className="front flap"></div>
        <div className="front pocket"></div>

        <div className="letter">
          <p className="text">We’re so happy you’re here!</p>
        </div>
        
      </div>
      
    </div>
    <Description>
      CLICK ENVELOPE TO OPEN
    </Description>
    </Overlay>
  );
}