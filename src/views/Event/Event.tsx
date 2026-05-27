import React, { useState } from "react";
import styled from "styled-components";
import ceremonyImg from "../../assets/img/galery/ceremony.png";
import receptionImg from "../../assets/img/galery/reception.png";
import dresscode from "../../assets/img/galery/dresscode.png";
import suitImg from "../../assets/img/galery/suit.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { bgImages } from '../../helpers/background';
import ModalGallery from "../../components/ModalGallery/ModalGallery";
import { dressCodeImages } from "../../helpers/dresscodeImages";
import ICalendarButton from "../../components/CalendarSection/iCalendarButton";
import CalendarButtonEvent from "./CalendarButtonEvent";


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
  height: 600px;
  background-image: url(${({ $bg }) => $bg});
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  top:0%;
  @media (min-width: ${breakpoints.md}) {
    background-position: top;
    min-height: 70vh;
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
  line-height: 2.5rem;
  @media (min-width: ${breakpoints.md}) {
    font-size: 5em;
    font-weight: 400 !important;
    line-height: 120px  !important;
  
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

const Section = styled.section`
  background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
  padding: 5rem 6rem;
  overflow: hidden;

  @media (max-width: ${breakpoints.sm}) {
    padding: 1.5rem 2rem 5rem 2rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
    font-weight: 100;
    line-height: 1em;
    font-size: 2.5rem;
    font-family:"Viaoda Libre", serif;
    text-transform: uppercase;
    color: hsla(68, 29%, 15%, 0.8);

  max-width: 600px;

  margin: 3rem auto 2rem auto;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 5rem;
    width: 90%;
    font-size: 1.8em;
  }
  
  @media (min-width: ${breakpoints.md}) {
    font-weight: 100;
    line-height: 1em;
    font-size: 2.5rem;
    width:50%;
    margin: 3rem auto 5rem auto;
  
  }
`;


const Row = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  margin-bottom: 6rem;

  direction: ${({ reverse }) => (reverse ? "rtl" : "ltr")};

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    direction: ltr;
    margin-bottom: 5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const VenueImage = styled.img<{ $filtered?: boolean }>`
  width: 100%;
  max-width: 500px;
  object-fit: contain;
   ${({ $filtered }) =>
    $filtered &&
    `
      filter: sepia(15%)  contrast(1) saturate(0.55);

    `}
`;

const Content = styled.div`
  direction: ltr;
`;

const ScriptTitle = styled.h2`
    text-align: center;
    font-family: "Pinyon Script", cursive;
      color: #6d6a43;
      margin-bottom: 1.8rem;
      font-size: 2rem;
    @media (max-width: ${breakpoints.sm}) {
        font-size: 2rem;
        margin-bottom: 1rem;
  }
`;

const DetailGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  @media (max-width: ${breakpoints.sm}) {
    align-items: center;
    text-align: center;
  }
`;

const DetailRow = styled.div`
  display: flex;
   
    flex-direction: column;
    align-items: center;
  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const Label = styled.span`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6d6a43;
  font-size: 1rem;
`;

const Value = styled.p`
    font-family: "Karla", sans-serif;
  font-weight: 300;
  color: #4f4b35;
  text-align: center;
  max-width: 500px;


  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const ViewMoreInfo = styled.a`
  font-family: "Karla", sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #000000;

  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  transition: opacity 0.3s ease;

  width: fit-content;
  margin-bottom: 0.5rem;
  &:hover {
    color:#6d6a43;
    border-bottom: 1px solid #6d6a43;
}

  @media (max-width: ${breakpoints.sm}) {
    margin-left: auto;
    margin-right: auto;
  }
`;




const EventDetails = () => { const mainImg = bgImages[2];
  const [isDressModalOpen, setIsDressModalOpen] = useState(false);
  return (
    <div>
        <Navbar/>
        <HeroSectionContainer $bg={mainImg.src}>
      <Overlay></Overlay>
      <TextContainer data-aos="zoom-in">
        <Date>September 28th, 2026</Date>
        <Subtitle>The Celebration</Subtitle>
        <Message>Mallorca, Spain</Message>
      </TextContainer>
    </HeroSectionContainer>
    <Section >
      <Heading data-aos="fade-up">
       From ceremony to reception, every detail has been chosen with love
      </Heading>

      
      {/* CEREMONY */}

      <Row>
        <Content >
          <ScriptTitle>Ceremony</ScriptTitle>
          <DetailGrid>
            <DetailRow>
              <Value>5:00 PM</Value>
              <ViewMoreInfo href="https://maps.app.goo.gl/q6DrANYvrCPVzGDw5?g_st=ic"
              target="_blank">Eglesia Nova</ViewMoreInfo>
              <CalendarButtonEvent
                name="Ceremony at Eglesia Nova"
                description="Join us for our wedding ceremony at the beautiful Església Nova in Son Servera, Mallorca — a breathtaking open-air historic church surrounded by Mediterranean charm and timeless architecture."
                startDate="2026-09-28"
                startTime="17:00"
                endDate="2026-09-28"
                endTime="18:00"
                location="Eglesia Nova, Son Servera, Mallorca, Spain https://maps.app.goo.gl/q6DrANYvrCPVzGDw5?g_st=ic"
                label="ADD TO CALENDAR"
              />
            </DetailRow>
            <DetailRow>      
              <Value>
                Carrer de ses Creus, 4,
                <br />
                07550 Son Servera,
                <br />
                Illes Balears, Spain
              </Value>
            </DetailRow>
          </DetailGrid>
        </Content>
        <ImageContainer>
          <VenueImage src={ceremonyImg}  $filtered/>
        </ImageContainer>
      </Row>

      

      {/* RECEPTION */}

      <Row reverse>
        <Content>
          <ScriptTitle>Reception</ScriptTitle>
          <DetailGrid>
            <DetailRow>
              <Value>7:30 PM</Value>
              <ViewMoreInfo href="https://maps.app.goo.gl/FdtYcQD8aTGmoLhv6?g_st=ic" target="_blank">Son Doblons</ViewMoreInfo>
              <CalendarButtonEvent
                name="Reception at Son Doblons"
                description="After the ceremony, we invite you to celebrate with us at Son Doblons — an elegant countryside estate in Mallorca where the evening will continue with dinner, music, dancing, and unforgettable moments under the stars."
                startDate="2026-09-28"
                startTime="19:30"
                endDate="2026-09-29"
                endTime="02:00"
                location="Son Doblons, Mallorca, Spain https://maps.app.goo.gl/kX1x57WEdEJDTuYE9"
                label="ADD TO CALENDAR"
/>
            </DetailRow>
            
            <DetailRow>
              <Value>
                Diseminado Son Doblons, 154,
                <br />
                07459 Santa Margalida,
                <br />
                Balearic Islands, Spain
              </Value>
            </DetailRow>
          </DetailGrid>
        </Content>
        <ImageContainer>
          <VenueImage src={receptionImg}/>
        </ImageContainer>
      </Row>

     

      {/* DRESS CODE */}
        <Row>
        <Content>
          <ScriptTitle>Dress Code</ScriptTitle>
          <DetailGrid>
            <DetailRow>
              <Value>Formal Attire Requested</Value>
            </DetailRow>
            <DetailRow>      
              <Value>
                We invite our guests to dress in elegant formal attire inspired by the warmth and romance of the Mediterranean. Think soft sunset hues, warm neutrals, champagne, blush, sand, caramel, taupe, soft gold, and muted earthy tones.<br />
                Floor-length gowns and refined evening dresses are encouraged for ladies, while suits or tuxedos are requested for gentlemen.
              </Value>
            </DetailRow>
              <DetailRow>
                <ViewMoreInfo onClick={() => setIsDressModalOpen(true)}>Dress Code Inspiration</ViewMoreInfo>
                <ModalGallery
                    isOpen={isDressModalOpen}
                    onRequestClose={() => setIsDressModalOpen(false)}
                    images={dressCodeImages.map(img => img.src)}
/>
             </DetailRow>
          </DetailGrid>
        </Content>
        <ImageContainer>
          <VenueImage src={dresscode}  />
        </ImageContainer>
      </Row>
     
    </Section>
    <Footer/>
    </div>
  );
};
console.log(dressCodeImages)
export default EventDetails;