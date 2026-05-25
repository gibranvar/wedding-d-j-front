import styled from 'styled-components';
import { bgImages } from '../../helpers/background';


interface HeroSectionContainerProps {
  $bg?: string;
}

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: hsla(68, 29%, 15%, 0.9);
`;

const HeroSectionContainer = styled.div<HeroSectionContainerProps>`
  display: flex;
 position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-image: url(${({ $bg }) => $bg});
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  top:0%;
  @media (min-width: ${breakpoints.md}) {
    background-position: top;
    min-height: 100vh;
  }
`;

const TextContainer = styled.div`

  top: 0%; /* Ajusta este valor para mover el contenedor más abajo */
  transform: translateY(-50%);
  margin: 0 3.5rem;
  text-align: center;
  color: rgb(255, 251, 245);
  z-index: 2;
  @media (min-width: ${breakpoints.sm}) {
    top: 30%; /*compputadora*/ 
     margin: 0 auto;
  }
`;

const Date = styled.h2`
  color: rgb(255, 251, 245);
  font-family: "Pinyon Script", cursive;
  font-weight: 300;
  font-size: 20px;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h3`
  color: rgb(255, 251, 245);
  font-size: 45px;
  font-family: "Viaoda Libre", serif;
  text-transform: uppercase;
  margin: 5px 0;
  font-weight: 100 !important;
  line-height: 50px;
  @media (min-width: ${breakpoints.md}) {
    font-size: 5em;
    font-weight: 400 !important;
    line-height: 85px  !important;
  
  }
`;

const Message = styled.p`
  color: rgb(255, 251, 245);
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 1.5px;
  font-family: "Pinyon Script", cursive;
  font-weight: 300;
  @media (min-width: ${breakpoints.sm}) {
    font-size: 24px;
  }
`;


const HeroSection = () => {
  const mainImg = bgImages[0];
  return (
    <HeroSectionContainer $bg={mainImg.src}>
      <Overlay></Overlay>
      <TextContainer data-aos="zoom-in">
        <Date>September 28th, 2026</Date>
        <Subtitle>Daniel <br /> & <br /> Jasmine</Subtitle>
        <Message>Mallorca, Spain</Message>
      </TextContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
