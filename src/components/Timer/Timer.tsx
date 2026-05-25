// src/components/Countdown.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TheDestiny from "../../assets/fonts/The-Destiny.woff"
import TheDestiny2 from "../../assets/fonts/The-Destiny.woff2" 

interface CountdownProps {
  targetDate: string;
}

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};
const LineDivider = styled.div`
  background-color: #f3f1e2;
  opacity: 0.5;
  width: 1px;
  height: 50px; /* 👈 altura fija para que sí se vea */
  margin: 0 10px;

  `
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
  if (!timeLeft[interval]) return;

  timerComponents.push(
    <React.Fragment key={interval}>
      <TimerContainer>
        <TimerNumber>{timeLeft[interval]}</TimerNumber>
        <TimerLabel>{interval}</TimerLabel>
      </TimerContainer>

      {/* Agrega la línea solo si NO es el último */}
      {index < array.length - 1 && <LineDivider />}
    </React.Fragment>
  );
});

  return (
    <CountdownWrapper>
      {timerComponents.length ? timerComponents : 
      <div className='title-timer-container'>
        <p className='title-timer'>THE BIG DAY IS HERE!</p>
      </div>}
    </CountdownWrapper>
  );
};

const CountdownWrapper = styled.div`
  text-align: center;
  font-size: 1.5em;
  color: #F2EDE7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 10px;
  @media (max-width: ${breakpoints.xxs}) {
        font-size: 1.45em;
  }
`;

const TimerContainer = styled.div`
  display: inline-block;
  margin: 10px;
  text-align: center;
  
  @media (min-width: ${breakpoints.md}) {
        margin: 10px 40px;
  }
`;

const TimerNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  font-family: "Viaoda Libre", serif;
  @media (min-width: ${breakpoints.md}) {
    font-size: 70px;
  }
`;

const TimerLabel = styled.div`
  font-size: 0.6rem;
  font-weight: 120;
  letter-spacing:2px;
  font-family: "Pinyon Script", cursive;
  @media (min-width: ${breakpoints.md}) {
        font-size: 18px;
        font-weight: 100;

  }
  `;

export default Countdown;
