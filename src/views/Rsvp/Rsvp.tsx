import React from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css'; // Asegúrate de importar el CSS de AOS
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
// Inicializa AOS dentro del componente o en index.tsx

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const RegistrySection = styled.section`
  position: relative;

  padding: 10rem 2rem;

  background-color: #4f512d;

  overflow: hidden;

  text-align: center;

  color: #f5f1e8;

  @media (max-width: 768px) {
    padding: 7rem 1.5rem;
  }
`;

const RegistryBg = styled.div`
  position: absolute;

  inset: 0;

  background-image: url("https://live.staticflickr.com/65535/55251185931_5f73284202_b.jpg");

  background-size: cover;

  background-position: center;

  filter: brightness(0.35);

  opacity: 0.55;

  z-index: 0;
`;

const RegistryOverlay = styled.div`
  position: absolute;

  inset: 0;

  background: rgba(34, 36, 20, 0.45);

  z-index: 1;
`;

const RegistryContent = styled.div`
  position: relative;

  z-index: 2;

  max-width: 900px;

  margin: 0 auto;
  @media (min-width: ${breakpoints.xl}) {
    max-width: 1200px;
  }
`;

const RegistryTitle = styled.h2`
  font-family: "Viaoda Libre", serif;

  font-size: 3.5rem;

  font-weight: 400;
 
  margin-top: 2.5rem;
  text-transform: uppercase;

  color: #f5f1e8;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    
  }
`;




const Rsvp: React.FC = () => {
  return (
    <div>
    <RegistrySection>
        <Navbar/>
      <RegistryBg />
      <RegistryOverlay />

      <RegistryContent>
        <RegistryTitle>Kindly RSVP</RegistryTitle>

        
      <RsvpSection/>
        

      </RegistryContent>
      
    </RegistrySection>
    <Footer/>
    </div>
  );
}

export default Rsvp;
