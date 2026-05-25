import React from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css'; // Asegúrate de importar el CSS de AOS
import itineraryImg from '../../assets/img/itinerary.svg'
// Inicializa AOS dentro del componente o en index.tsx
import Button from '../Button/Button';

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const ItinerarySection = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 7rem 2rem;

  background-image: url('https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/835f0798-64af-42c2-b99d-5deec8c48f0f/europeana-UrY_zS0mb5g-unsplash.jpg');
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: hsla(68, 29%, 15%, 0.92);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h1`
  text-align: center;

  color: #f5f1e8;

  font-family: "Viaoda Libre", serif;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 5rem;
 @media (min-width: ${breakpoints.sm}) {
     font-size: 3rem;
     margin-bottom: 2rem
  }
`;

const EventsGrid = styled.div`
  max-width: 500px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const EventCard = styled.div`
  text-align: center;
`;

const EventTitle = styled.h2`
  font-family: "Pinyon Script", cursive;
  font-size: 1.8rem;
  font-weight: 100;

  color: #f5f1e8;

  line-height: 1.1;

  margin-bottom:1rem;
  @media (max-width: ${breakpoints.sm}) {
    
  }
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const InfoBlock = styled.div``;

const Label = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: rgba(245, 241, 232, 0.65);

  margin-bottom: 0.1rem;
`;

const Value = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;

  color: #f5f1e8;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`; 
const ViewMoreInfo = styled.a`
  font-family: "Karla", sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #f5f1e8;

  text-decoration: none;
  border-bottom: 1px solid rgba(245, 241, 232, 0.4);

  transition: opacity 0.3s ease;

  &:hover {
    color: #D4A5A5;
  }
`;

const Itinerary: React.FC = () => {
  return (
    <ItinerarySection>
      <Overlay />
      <Content  data-aos="fade-up">
        <SectionTitle>The Celebration</SectionTitle>
        <EventsGrid>
          <EventCard>
            <EventTitle>Ceremony</EventTitle>
            <EventInfo>
                        <InfoBlock>
                <Label>Time</Label>
                <Value>5:00 PM</Value>
              </InfoBlock>

              <InfoBlock>
                <Label>Venue</Label>
                <Value>Eglesia Nova</Value>
              </InfoBlock>

            </EventInfo>
          </EventCard>

          <EventCard>
            <EventTitle>Reception</EventTitle>

            <EventInfo>


              <InfoBlock>
                <Label>Time</Label>
                <Value>7:30 PM</Value>
              </InfoBlock>

              <InfoBlock>
                <Label>Venue</Label>
                <Value>Son Doblons</Value>
              </InfoBlock>

            </EventInfo>
          </EventCard>
        </EventsGrid>
        <ButtonContainer><ViewMoreInfo href="#/event">
            View More Information
          </ViewMoreInfo>       
        </ButtonContainer>
      </Content>
    </ItinerarySection>
  );
};

export default Itinerary;