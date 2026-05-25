import React from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const breakpoints = {
  sm: "767.98px",
};

const Section = styled.section`
  background: #6b6a3f;
  padding: 5rem 0 7rem 0;
  overflow: hidden;
`;

const Title = styled.h2`
  font-family: "Yellowtail", cursive;
  color: #f4efe5;
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 3rem;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 3rem;
  overflow-x: auto;

  padding: 0 8vw 3rem 8vw;

  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const Card = styled.div`
  min-width: 430px;

  display: flex;
  flex-direction: column;
  align-items: center;

  scroll-snap-align: center;

  @media (max-width: ${breakpoints.sm}) {
    min-width: 80vw;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 620px;

  object-fit: cover;

  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    height: 420px;
  }
`;

const CardText = styled.p`
  max-width: 90%;

  text-align: center;

  color: #f4efe5;

  font-family: "Karla", sans-serif;

  font-size: 1.6rem;

  line-height: 1.7;

  font-weight: 300;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;

const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;

  ${({ left }) => (left ? "left: 3rem;" : "right: 3rem;")}

  bottom: 1rem;

  background: transparent;

  border: none;

  color: rgba(255,255,255,0.8);

  cursor: pointer;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const TuscanySection = () => {
  return (
    <Section>
      <Title>Tuscany</Title>

      <SliderWrapper>
        <SliderTrack>
          <Card>
            <CardImage src="https://images.unsplash.com/photo-1543429776-2782fc93bd1f?q=80&w=1200&auto=format&fit=crop" />

            <CardText>
              Discover Florence, where timeless architecture, quiet streets,
              and golden sunsets create the perfect Italian atmosphere.
            </CardText>
          </Card>

          <Card>
            <CardImage src="https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=1200&auto=format&fit=crop" />

            <CardText>
              Explore the Town of Pienza. A jewel of the Val d’Orcia, this
              small Renaissance town offers picture-perfect streets, artisan
              cheese shops, and sweeping countryside views.
            </CardText>
          </Card>

          <Card>
            <CardImage src="https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1200&auto=format&fit=crop" />

            <CardText>
              Experience authentic Tuscan cuisine through handmade pasta, local
              wines, and unforgettable dinners under the Italian sky.
            </CardText>
          </Card>

          <Card>
            <CardImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" />

            <CardText>
              Wander through the rolling hills and vineyards that make Tuscany
              one of the most romantic destinations in the world.
            </CardText>
          </Card>
        </SliderTrack>

        <ArrowButton left>
          <ChevronLeft size={42} strokeWidth={1.5} />
        </ArrowButton>

        <ArrowButton>
          <ChevronRight size={42} strokeWidth={1.5} />
        </ArrowButton>
      </SliderWrapper>
    </Section>
  );
};

export default TuscanySection;