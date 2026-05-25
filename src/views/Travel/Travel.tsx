import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { bgImages } from '../../helpers/background';

import * as Accordion from "@radix-ui/react-accordion";
import { Quote } from "lucide-react";

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
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.sm}) {
    letter-spacing: 8px;
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
  padding: 3rem 5rem;
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

  margin: 2rem auto 2rem auto;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 2rem;
    width: 90%;
    font-size: 1.8em;
  }
  
  @media (min-width: ${breakpoints.md}) {
    font-weight: 100;
    line-height: 1em;
    font-size: 2.5rem;
    width:50%;
    margin: 2rem auto 5rem auto;
  
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

const ImageWrapper = styled.div<{ landscape?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: ${({ landscape }) => (landscape ? "100%" : "75%")};

    aspect-ratio: ${({ landscape }) =>
      landscape ? "1.3 / 0.8" : "0.7 / 1"};

    object-fit: cover;

    transition: transform 0.6s ease;
    fill-opacity: 0.1;
    filter: brightness(0.90)
        contrast(0.95)
        saturate(0.85)
        sepia(0.08);

    &:hover {
      transform: scale(1.03);
    }

    @media (max-width: ${breakpoints.md}) {
      width: 100%;
    }
  }
`;
const Content = styled.div`
  direction: ltr;
`;

const ScriptTitle = styled.h2`
    text-align: center;
    font-family: "Pinyon Script", cursive;
      color: #6d6a43;
      margin-bottom: 1.5rem;
      font-size: 2rem;
    @media (max-width: ${breakpoints.sm}) {
        font-size: 1.5rem;
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

  &:hover {
    color: #6d6a43;
    border-bottom: 1px solid #6d6a43;
}

  @media (max-width: ${breakpoints.sm}) {
    margin-left: auto;
    margin-right: auto;
  }
`;




const MapContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  gap: 2rem;
 
`

const MapFrameWrapper = styled.div`
   width: 100%;
  max-width: 720px;
  margin: 0 auto;

  overflow: hidden;
  border-radius: 24px;

  iframe {
    display: block;
  }
`;

const FAQSection = styled.section`
  background: hsla(68, 29%, 15%);


  padding: 4rem 2rem 8rem 2rem;

  color: #f5f1e8;

  @media (max-width: ${breakpoints.sm}) {
    padding: 4rem 1.5rem 8rem 1.5rem;
  }
`;

const FAQContainer = styled.div`
   max-width: 500px;

  margin: 0 auto;
`;

const FAQTitle = styled.h2`
   text-align: center;
    font-weight: 100;
    line-height: 1em;
    font-size: 1.8rem;
    font-family:"Viaoda Libre", serif;
    text-transform: uppercase;
   

  margin: 3.5rem auto 2rem auto;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 3rem;
    font-size: 1.5rem;
  }
  
  @media (min-width: ${breakpoints.md}) {
    font-weight: 100;
    line-height: 1em;
    font-size: 3rem;
   
  
  }`

const AccordionRoot = styled(Accordion.Root)`
  width: 100%;
`;

const AccordionItem = styled(Accordion.Item)`
  border-bottom: 1px solid rgba(245, 241, 232, 0.45);
`;

const Plus = styled.span`
  font-size: 3rem;

  font-weight: 200;

  line-height: 1;

  margin-left: 2rem;

  transition: transform 0.3s ease;

  color: #f5f1e8;

  flex-shrink: 0;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2.3rem;

    margin-left: 1rem;
  }
`;

const AccordionTrigger = styled(Accordion.Trigger)`
  width: 100%;

  background: transparent;

  border: none;

  padding: 2rem 0;

  display: flex;

  align-items: center;

  justify-content: space-between;

  cursor: pointer;

  color: #f5f1e8;

  text-align: left;

  font-family: "Karla", sans-serif;

  font-size: 1.25rem;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &[data-state="open"] ${Plus} {
    transform: rotate(45deg);
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;

    line-height: 1.5;

    padding: 1.7rem 0;
  }
`;

const AccordionContent = styled(Accordion.Content)`
  overflow: hidden;

  &[data-state="open"] {
    animation: slideDown 300ms ease;
  }

  &[data-state="closed"] {
    animation: slideUp 300ms ease;
  }

  @keyframes slideDown {
    from {
      height: 0;
      opacity: 0;
    }

    to {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }

    to {
      height: 0;
      opacity: 0;
    }
  }
`;

const Answer = styled.div`
  padding-bottom: 2rem;

  max-width: 760px;

  font-family: "Karla", sans-serif;

  font-size: 1.05rem;
    font-weight: 300;
  line-height: 1.9;

  color: rgba(245, 241, 232, 0.82);

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.98rem;

    line-height: 1.8;
  }
`;

const TitleRecomendation = styled.a`
  text-decoration: underline;
  font-family: "Karla", sans-serif;

  &:hover {
   color: #d4a5a5;
  }
`;

const faqs = [
  {
  question: 'By the Sea',
  answer: [
    {
      title: "Cala Romantica",
      description:
        "A serene Mediterranean cove known for its calm turquoise water, soft sand, and relaxed atmosphere — perfect for a slow beach day surrounded by Mallorca’s natural beauty.",
      link: "https://maps.app.goo.gl/QEUBxjgqMDdHAmRQ8"
    },

    {
      title: "Caló des Moro",
      description:
        "One of Mallorca’s most iconic hidden coves, with impossibly clear turquoise water and dramatic cliffs that feel straight out of a postcard.",
      link: "https://maps.app.goo.gl/8wv4bCsz5vRJdQWQ8"
    },

    {
      title: "Cala Llombards",
      description:
        "A quiet and picturesque beach surrounded by pine trees and soft limestone cliffs, perfect for a relaxed Mediterranean beach day.",
      link: "https://maps.app.goo.gl/fS8mM4zQ2vYx7rK17"
    },

    {
      title: "Sa Calobra",
      description:
        "Famous for its breathtaking drive and dramatic scenery, Sa Calobra offers one of the most cinematic coastal landscapes in Mallorca.",
      link: "https://maps.app.goo.gl/XjTPM6tur2cGUmGN7"
    },

    {
      title: "Es Trenc",
      description:
        "With soft white sand and crystal-clear water stretching for miles, Es Trenc captures the effortless beauty of Mallorca’s Mediterranean coastline.",
      link: "https://maps.app.goo.gl/JkDsv2csRFCppnR98"
    }
  ]
},
    {
    question: 'Town & Surroundings',
    answer: [
      {
      title: "Valldemossa",
      description:
        "A charming mountain village filled with stone streets, quiet cafés, and timeless Mediterranean beauty, nestled in the heart of the Tramuntana mountains.",
      link: "https://maps.app.goo.gl/xdQEQ5CzUUKGDe2r5"
    },
    {
      title: "Catedral-Basílica de Santa María de Mallorca",
      description:
        "Overlooking the sea in Palma, this iconic cathedral is one of Mallorca’s most breathtaking landmarks, known for its grand Gothic architecture and stunning light-filled interiors.",
      link: "https://maps.app.goo.gl/gYvGgnbPqVjaq8VX9"
    },
    {
      title: "Deià",
      description:
        "A picturesque hillside village beloved for its artistic spirit, romantic scenery, and unforgettable sunset views over the Mediterranean.",
      link: "https://maps.app.goo.gl/fNLAtXs7JMem9DQV8"
    },
    {
      title: "Ecovinyassa",
      description:
        "A peaceful organic citrus farm in Sóller where guests can wander through orange groves and experience one of Mallorca’s most beautiful countryside settings.",
      link: "https://maps.app.goo.gl/HJVB1eZXxhQGYHcs5"
    },
    {
      title: "L’Hort del Rei",
      description:
        "Elegant gardens tucked beside the Royal Palace in Palma, offering shaded walkways, fountains, and a tranquil atmosphere in the heart of the city.",
      link: "https://maps.app.goo.gl/bJMKrwqybTpjFTh79"
    },
    {
      title: "Santanyí Market",
      description:
        "Held every Wednesday and Saturday, the Santanyí Market is one of Mallorca’s most beloved local experiences, filled with artisan goods, fresh produce, charming cafés, and the relaxed atmosphere of a traditional Mediterranean town.",
      link: "https://maps.app.goo.gl/h6nukigVBFpDNvuE6"
    }
    ]
  },

  {
    question: 'Food & Coffee',
    answer: [
      {
        title: "El Olivo",
        description:
          "An elegant fine dining experience set within a historic manor in Deià, known for its romantic atmosphere, candlelit terraces, and breathtaking mountain views.",
        link: "https://maps.app.goo.gl/i6Qq6G4wNtssjSdb8"
      },
      {
        title: "Sea Club",
        description:
          "A stylish beachfront restaurant and lounge in Cap Rocat offering Mediterranean cuisine, ocean views, and one of the most beautiful sunset settings on the island.",
        link: "https://maps.app.goo.gl/15HXj93y9EBZjN6b9"
      },
      {
        title: "Ca's Patró March",
        description:
          "Perched above the sea in Cala Deià, this iconic seafood restaurant is beloved for its rustic charm, fresh Mediterranean dishes, and unforgettable coastal views.",
        link: "https://maps.app.goo.gl/pTioa84dmnAELoju6"
      },
      {
        title: "Roseta Valldemossa",
        description:
          "A charming café and bakery in the heart of Valldemossa, perfect for slow mornings, coffee, and pastries surrounded by the village’s timeless atmosphere.",
        link: "https://maps.app.goo.gl/cQMU3FZCpqn7Tpnj9"
      },
      {
        title: "BACAN – Specialty Coffee & Brunch",
        description:
          "A modern brunch spot in Palma known for specialty coffee, fresh seasonal dishes, and a warm, minimalist Mediterranean aesthetic.",
        link: "https://maps.app.goo.gl/HkW45qRQynrpdiWA7"
      },
      {
        title: "Re Sen Beauty Lounge & Café Mallorca",
        description:
          "A beautifully designed café and beauty lounge blending wellness, coffee, and relaxed Mediterranean elegance in the heart of Palma.",
        link: "https://maps.app.goo.gl/kBhcpiGomL7vbRzn9"
      }
    ]
  }
];


const EventDetails = () => { const mainImg = bgImages[1];
  return (
    <div>
        <Navbar/>
        
        <HeroSectionContainer $bg={mainImg.src}>
      <Overlay></Overlay>
      <TextContainer data-aos="zoom-in">
        <Subtitle>Travel & Stay</Subtitle>
        <Message>Mallorca, Spain</Message>
      </TextContainer>
    </HeroSectionContainer>
    <Section >
      <Heading data-aos="fade-up" >
       Mallorca Travel Guide
      </Heading>
      
      
      {/* CEREMONY */}

      <Row reverse data-aos="fade-up">
        <Content>
          <ScriptTitle>Transportation</ScriptTitle>
          <DetailGrid>
            
            <DetailRow>      
              <Value>
               Guest transportation will be provided between the villa and the ceremony venue, with return service back to the villa. Additional transportation details will be shared closer to the wedding date.
               <br/>
               
              </Value>
            </DetailRow>
           
          </DetailGrid>
        </Content>
        <ImageContainer>
          <ImageWrapper>
            <img src="https://i.pinimg.com/736x/77/25/76/77257604dbcc2c1c438c8831fb3f8e50.jpg" alt="Flor de Mandarina Hotel" />
          </ImageWrapper>
        </ImageContainer>
      </Row>

      

      {/* RECEPTION */}

      <Row data-aos="fade-up" >
        <Content>
          <ScriptTitle>Flights</ScriptTitle>
          <DetailGrid>
            <DetailRow>      
              <Value>
                Most international flights to Mallorca include one stop depending on the airline and departure city. For reference, we will be flying with Lufthansa. 
              </Value>
            </DetailRow>
            <DetailRow>
                <ViewMoreInfo href="https://www.google.com/travel/flights?q=flights%20to%20Palma%20de%20Mallorca"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Flights
                </ViewMoreInfo>
            </DetailRow>
          </DetailGrid>
        </Content>
        <ImageContainer>
          <ImageWrapper>
            <img src="https://i.pinimg.com/736x/6c/8a/54/6c8a54533089bb55e2bc2368b2db2556.jpg" alt="Reception Venue" />
          </ImageWrapper>
        </ImageContainer>
      </Row>
          <ScriptTitle data-aos="fade-up" >Wedding Weekend Guide</ScriptTitle>
          <MapContainer data-aos="fade-up" >
          <Value>
               To make your wedding weekend experience as seamless and enjoyable as possible, we’ve highlighted the ceremony and reception venues, nearby recommended areas to stay, and Palma de Mallorca Airport for easier travel planning.
                <br/><br/>
                We recommend staying in the Alcudia area or near Es Blau des Nord, both known for their beautiful Mediterranean atmosphere and convenient access to the celebrations.
               <br/><br/>
                <strong >
                A small travel tip we want to share is  that the best way to get around Mallorca is by renting a car, although taxis and Uber are also available</strong >
          </Value>
          <MapFrameWrapper>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1caQY4RepX1lRA416xzbjfCi4ttLGyUY&ehbc=6d6a43&noprof=1"
                width="100%"
                height="550"
                style={{ border: "0" }}
                loading="lazy"
              />
          </MapFrameWrapper>
    
      </MapContainer>
        </Section>
   
      <FAQSection >
            <FAQContainer data-aos="fade-up" >
              <FAQTitle>
                Things to see, wander, and enjoy.
              </FAQTitle>
      
              <AccordionRoot type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <Accordion.Header>
                    <AccordionTrigger>
                      {faq.question}

                      <Plus>+</Plus>
                    </AccordionTrigger>
                  </Accordion.Header>

                  <AccordionContent>
                    {faq.answer.map((place, i) => (
                      <div key={i}>
                        <TitleRecomendation
                          href={place.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {place.title}
                        </TitleRecomendation>

                        <Answer>
                          {place.description}
                        </Answer>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                
              ))}
              </AccordionRoot>
            </FAQContainer>
           
          </FAQSection>
    <Footer/>
    
    </div>
  );
};

export default EventDetails;