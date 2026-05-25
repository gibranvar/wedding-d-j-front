import React from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css'; // Asegúrate de importar el CSS de AOS
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
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

  background-image: url("https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/1772531935149-OCDUAA8I82FA3ODCI5TU/rhamely-gjjHYW6jssE-unsplash.jpg&quot");

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
`;

const RegistryTitle = styled.h2`
  font-family: "Viaoda Libre", serif;

  font-size: 3.5rem;

  font-weight: 400;
  margin-bottom: 1rem;
margin-top: 2.5rem;
  text-transform: uppercase;

  color: #f5f1e8;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-top: 3.5rem;
  }
`;

const RegistryDescription = styled.p`
  font-family: "Karla", sans-serif;

  font-size: 1.05rem;

  font-weight: 300;

  color: rgba(245, 241, 232, 0.92);

  line-height: 1.2;

  max-width: 350px;

  margin: 0 auto 2rem auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.3;
   padding: 0 2.5rem;
    margin-bottom: 4rem;
  }
`;

const RegistryCard = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
`;

const RegistryCardTitle = styled.h3`
  font-family: "Pinyon Script", cursive;

  font-size: 2.5rem;

  color: #f5f1e8;

  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const RegistryCardText = styled.p`
  font-family: "Karla", sans-serif;

  font-size: 1rem;

  line-height: 1.2;

  font-weight: 300;

  color: rgba(245, 241, 232, 0.9);

  max-width: 350px;

  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.3;
   padding: 0 2.5rem;
  }
`;

const ViewMoreInfo = styled.a`
  font-family: "Karla", sans-serif;

  font-size: 0.95rem;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  color: #f5f1e8;

  text-decoration: none;

  border-bottom: 1px solid rgba(245, 241, 232, 0.4);

  padding-bottom: 0.3rem;

  transition: all 0.3s ease;

  &:hover {
    color: #d4a5a5;

    border-color: #d4a5a5;
  }
`;


const Gifts: React.FC = () => {
  return (
    <div>
    <RegistrySection>
        <Navbar/>
      <RegistryBg />
      <RegistryOverlay />

      <RegistryContent data-aos="fade-up" >
        <RegistryTitle>Registry</RegistryTitle>

        <RegistryDescription>
          Your presence is truly more than enough. For those who have asked, we’ve created a registry for anyone who would like to take a look.
        </RegistryDescription>

        <RegistryCard>
          <RegistryCardTitle>Gifts</RegistryCardTitle>

          <RegistryCardText>
            Explore a curated selection of items that will help us build our
            future home and create lasting memories together.
          </RegistryCardText>

          <ViewMoreInfo href="https://www.crateandbarrel.com/gift-registry/jasmine-ben-and-daniel-pimentel/r7514248" target="_blank" rel="noopener noreferrer">
            View Registry
          </ViewMoreInfo>
        </RegistryCard>
      </RegistryContent>
      
    </RegistrySection>
    <Footer/>
    </div>
  );
}

export default Gifts;
