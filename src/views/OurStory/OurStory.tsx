import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";

const breakpoints = {
  sm: "767.98px",
  md: "991.98px",
};

const StorySection = styled.section`
  background: #F3EDE4;
 ;
  overflow: hidden;
`;

/* HERO */

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: 80vh;
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const HeroImage = styled.div<{ image: string; hideMobile?: boolean }>`
  min-height: 80vh;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(48, 47, 24, 0.28);
  }

  @media (max-width: ${breakpoints.sm}) {
    min-height: 90vh;

    ${({ hideMobile }) =>
      hideMobile &&
      `
        display: none;
      `}
  }
`;

/* CONTENT */

const StoryContent = styled.div`
  max-width: 980px;

  margin: 0 auto;

  padding: 10rem 3rem 1rem 3rem;

  text-align: center;

  @media (max-width: ${breakpoints.sm}) {
    padding: 5rem 2rem 1rem 2rem;
  }
`;
const ScriptTitle = styled.h2`
  font-family: "Viaoda Libre", serif;

  font-size: 4rem;

  color: #6d6a43;

  font-weight: 400;

  margin-bottom: 1.5rem;


  @media (max-width: ${breakpoints.sm}) {
    font-size: 3rem;
    margin-bottom: 0.7rem;
  }
`;
const StorySubtitle = styled.h3`
    font-family: "Pinyon Script", cursive;
      color: #6d6a43;
      margin-bottom: 3rem;
      font-size: 2rem;
    @media (max-width: ${breakpoints.sm}) {
        font-size: 1.5rem;
        margin-bottom: 2rem;
  }
    `

const StoryText = styled.p`
  font-family: "Karla", sans-serif;
  font-weight: 300;
  color: #4f4b35;

  max-width: 500px;

  margin: 0 auto 1rem auto;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;


const FloralDivider = styled.img`
    width: 350px;


  margin: 2rem auto 0 auto;

  display: block;

  @media (max-width: ${breakpoints.sm}) {
    width: 250px;
  }

`;
const OurStory: React.FC = () => {
  return (
    <StorySection>
        <Navbar />
      <HeroGrid>

        <HeroImage image="https://live.staticflickr.com/65535/55281933381_c65e331c9e_b.jpg" />
        <HeroImage image="https://live.staticflickr.com/65535/55281933366_2b24637a70_b.jpg" hideMobile={true} />
      </HeroGrid>

      <StoryContent >
        <ScriptTitle  data-aos="fade-up">OUR STORY</ScriptTitle>
        <StorySubtitle  data-aos="fade-up">A beautiful journey together.</StorySubtitle>
        <StoryText  data-aos="fade-up">
        We met during one of the most unexpected seasons of life, working
        side by side at the Cedars Sinai vaccine and testing clinic during
        COVID. What began as a simple friendship between coworkers slowly
        turned into shared conversations, long shifts together, and a
        connection that continued to grow beyond the hospital walls.
        </StoryText>

        <StoryText  data-aos="fade-up">
        Through quarantine days, demanding schedules, and the transition
        into new chapters of our careers, we built a relationship rooted in
        support, laughter, and the comfort of simply doing life together.
        Between traveling, discovering new coffee shops and restaurants, and
        quiet evenings at home, we found joy in both the extraordinary and
        the everyday.
        </StoryText>

        <StoryText  data-aos="fade-up">
        Our proposal took place near MacArthur Park in Los Angeles during what was
        meant to be a casual photoshoot with a friend. As soon as we arrived,
        it became clear that the moment would become one of the most
        meaningful memories of our story — the beginning of a new chapter
        together.
        </StoryText>

        <StoryText  data-aos="fade-up">
        Spain already held a special place in our hearts as our next planned
        adventure together, making it feel like the perfect setting for our
        wedding celebration. It reflects our love for travel, meaningful
        experiences, and creating memories together away from the pace of
        everyday life in Los Angeles.
        </StoryText>

        <FloralDivider
          src="https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/e9de7db2-d495-4d43-8fee-8e511b506d38/floral+border2.png?format=1000w"
          alt="Floral Divider"
           data-aos="fade-up"
        />
      </StoryContent>
      <Carousel buttonText="View Gallery"
  textColor="#6d6a43"
  hoverTextColor="white"
  hoverBgColor="#6d6a43"
  backgroundColor="transparent"
  outlineColor="#6d6a43"
  hoverOutlineColor="#f5f2e9"/>
      <Footer />
    </StorySection>
  );
};

export default OurStory;