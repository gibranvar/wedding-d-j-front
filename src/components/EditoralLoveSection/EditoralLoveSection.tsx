import React from "react";
import styled from "styled-components";

const breakpoints = {
   xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const Section = styled.section`
  
  padding: 2rem 0;
  overflow: hidden;
    @media (min-width: ${breakpoints.sm}) {
         
    padding: 5rem 2rem;
    }

`;

const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
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
    margin-bottom: 3rem;
    width: 90%;
    font-size: 2.3rem;
  }
  
  @media (min-width: ${breakpoints.md}) {
    font-weight: 100;
    line-height: 1em;
    font-size: 3rem;
    width:50%;
  
  }
`;

const EditorialGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 7rem;
  align-items: center;

  margin-bottom: 10rem;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 4rem;
    margin-bottom: 6rem;
  }
`;

const EditorialGridReverse = styled(EditorialGrid)`
  grid-template-columns: 0.8fr 1.2fr;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const LargeImage = styled.div`
 display: flex;
  justify-content: center;
  img {
    width: 80%;
    height: 700px;
    object-fit: cover;

    filter:
      brightness(0.92)
      contrast(0.94)
      saturate(0.82)
      sepia(0.08);

    transition: transform 0.7s ease;

    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: ${breakpoints.md}) {
      height: 400px;
    }
  }
`;

const SmallContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SmallText = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 1rem;

  width: 80%;
  color: #494949;

  max-width: 360px;

  text-align: center;

  margin-bottom: 3rem;
`;

const SmallImage = styled.div`
    display: flex;  
    justify-content: center;
  width: 100%;
  max-width: 250px;

  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;

    filter:
      brightness(0.95)
      contrast(0.94)
      saturate(0.82)
      sepia(0.08);
      
    
  }
    @media (min-width: ${breakpoints.md}) {
        
  img {
    width: 100%;
    height: 350px;
    }
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

  &:hover {
    color: #6d6a43;
    border-bottom: 1px solid #6d6a43;
  }
`;
const Description = styled.p`
text-align: center;
margin: 0 auto 8rem auto;
font-family: "Karla", sans-serif;
  font-weight: 300;
  width:80%;
 @media (max-width: ${breakpoints.md}) {
    margin-bottom: 5rem;
  }
  
  @media (min-width: ${breakpoints.md}) {
    
    width:50%;
  
  }
`

const EditorialLoveSection: React.FC = () => {
  return (
    <Section>
      <Container  data-aos="fade-up">
        <HeroTitle>
          A Celebration Of Love In The Heart Of Mallorca
        </HeroTitle>
        <Description>
             We’re so excited to celebrate our wedding in Spain with our closest family and friends. Thank you for being part of our journey. We cannot wait to share this special day with you! 


            </Description>
        {/* BLOCK 1 */}
        <EditorialGrid>
          <LargeImage>
            <img
              src="https://live.staticflickr.com/65535/55282333505_32c8780439_b.jpg"
              alt="Couple"
            />
          </LargeImage>

          <SmallContent>
            <SmallText>
             We met during one of the most unexpected seasons of life, and somewhere between long parking lot clinic shifts, quarantining, plus navigating our careers, we found a love that felt effortless, fun and meant to be.
            </SmallText>
            <SmallImage>
              <img
                src="https://live.staticflickr.com/65535/55281014867_da2c147cbe_b.jpg"
                alt="Editorial"
              />
            </SmallImage>

            <ViewMoreInfo href="/#/our-story">
              Read Our Story
            </ViewMoreInfo>
          </SmallContent>
        </EditorialGrid>

        {/* BLOCK 2 */}
       
      </Container>
    </Section>
  );
};

export default EditorialLoveSection;