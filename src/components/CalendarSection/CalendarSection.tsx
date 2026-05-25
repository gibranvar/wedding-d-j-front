import React from "react";
import ICalendarButton from "./iCalendarButton"; 
import styled from "styled-components";
import Countdown from "../Timer/Timer";
import { images } from '../../helpers/images';
import imgLogo from "../../assets/img/nuestro-dia.svg"
const backgroundImage = images[14];
const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

interface CalendarSectionProps {
  title?: string;
  buttonText: string;
  textColor: string;
  backgroundColor: string;
  hoverBgColor: string;
  hoverOutlineColor: string;
  hoverTextColor: string;
}

const CalendarSectionContainer = styled.div`
  background-color: #64623F;

  background-image: url("");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #F2EDE7;
  padding: 20vh 0;
  text-align: center;
  position: relative;
  @media (min-width: ${breakpoints.md}) {
    padding: 20vh 0 30vh 0;
  }
`;
const ImageBg = styled.div`
  position: absolute;

  inset: 0;

  background-image: url("https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/1772531941865-9TNC7QD3XO9NXMHGOCW3/Asset+3.png");

  background-repeat: no-repeat;

  background-position: center bottom;

  background-size: 78%;

  opacity: 0.12;

  pointer-events: none;

  z-index: 0;

  @media (max-width: ${breakpoints.sm}) {
    background-size: 140%;
    background-position: center bottom;
    opacity: 0.08;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
`;
const TextContainer = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  color: #f0f0f0;
  z-index: 2;
`;
const CalendarSectionTitle = styled.div`

`;
const CalendarTitle = styled.h1`
  font-size: 6vh;
  text-transform: uppercase;
  line-height: 6vh;
  @media (min-width: ${breakpoints.md}) {
    font-size: 7vh;
    line-height: 1.1em;
  }
`;

const CalendarSubtitle = styled.div`
margin:0;

`


const Subtitle = styled.h2`
  font-weight:200;
  font-size: 16px;
  color: white;
  font-family: 'Karla', sans-serif !important;
  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 3.5vw;
  }

`
const CalendarSectionTimer = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
`;

const CalendarSectionButtonContainer = styled.div`
  margin: 0 15vw;
  @media (max-width: ${breakpoints.xxs}) {
    margin: 0 20vw;
  }
  @media (min-width: ${breakpoints.md}) {
    margin: 0 5vw;
  }
`;

const CalendarSection: React.FC<CalendarSectionProps> = ({
  buttonText,
}) => {
  

  return (
    <CalendarSectionContainer>
      <Overlay/>
      <TextContainer data-aos="flip-left">
        <CalendarSectionTitle><CalendarTitle>Let the 
        <br/>countdown begin</CalendarTitle></CalendarSectionTitle>
        <CalendarSubtitle>
          <Subtitle>September 28th, 2026</Subtitle>
        </CalendarSubtitle>
        <CalendarSectionTimer>
          <Countdown targetDate="2026-09-28T17:00:00" />
        </CalendarSectionTimer>
        <CalendarSectionButtonContainer>
          <ICalendarButton  buttonText={buttonText} />
        </CalendarSectionButtonContainer>
      </TextContainer>
      <ImageBg />
    </CalendarSectionContainer>
  );
}

export default CalendarSection;
