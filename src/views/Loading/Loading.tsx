import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import "./loading.css";
import { motion, AnimatePresence } from "framer-motion";

import Seal from "../../assets/seal.png";

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const Overlay = styled.div`
  justify-content: flex-start;
  padding-top: 12vh;
  padding-bottom: 3vh;
  box-sizing: border-box;

  min-height: 100dvh;
  width: 100%;

  background: hsla(68, 29%, 15%);

  z-index: 1000;

  display: flex;
  flex-direction: column;

  align-content: center;
  flex-wrap: nowrap;

  gap: 18px;
`;

const Title = styled.h1`
  font-size: 1.9vh;
  text-align: center;

  font-family: 'Playfair Display', serif;
  text-transform: uppercase;

  color: rgb(254, 253, 250);

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

const SubTitle = styled.div`
  text-align: center;

  font-weight: 100;
  line-height: 1;

  font-size: 2.8rem;

  font-family: "Monsieur La Doulaise", cursive;

  max-width: 600px;

  margin: 0 auto 0 auto;

  color: rgb(254, 253, 250);

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 0.5rem;
    font-size: 4.5rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-weight: 100;
    padding-bottom: 0.5rem;
    font-size: 4.8rem;
  }
`;

const Description = styled.p`
  text-align: center;

  font-family: 'Playfair Display', serif;
  text-transform: uppercase;

  color: rgb(254, 253, 250);
`;

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
      <Title data-aos="fade-up">
        we’re getting married
      </Title>

      <SubTitle data-aos="fade-up">
        <span className="mobile-names">
          <span>Daniel</span>

          <br />

          <span className="ampersand">&</span>

          <br />

          <span>Jasmine</span>
        </span>

        <span className="desktop-names">
          Daniel <span className="ampersand">&</span> Jasmine
        </span>
      </SubTitle>

      <div className="envlope-wrapper" data-aos="fade-up">
        <div
          className="seal"
          style={{
            backgroundImage: `url(${Seal})`
          }}
        ></div>
        <div
          id="envelope"
          className={open ? "open" : "close"}
          onClick={handleOpen}
        >
          <div className="front flap">
        
      </div>

<div className="front pocket"></div>

          <div className="letter">
            <p className="text">
              We’re so happy you’re here!
            </p>
          </div>
        </div>
      </div>

      <Description >
        CLICK ENVELOPE TO OPEN
      </Description>
    </Overlay>
  );
}