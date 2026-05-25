

const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};import React from "react";
import styled from "styled-components";



const Section = styled.section`
  padding: 8rem 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem 6rem;
  align-items: center;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
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

const TextBlock = styled.div<{ align?: string }>`
  text-align: ${({ align }) => align || "left"};

  @media (max-width: ${breakpoints.md}) {
    text-align: center;
  }
`;

const ScriptTitle = styled.h2`
  font-family: "Viaoda Libre", serif;
  font-size: 2rem;
  line-height: 1.1;
  text-transform: uppercase;
  font-weight: 500;
  color: #5d5a35;

  margin-bottom: 2rem;
   @media (min-width: ${breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: "Karla", sans-serif;
  font-weight: 300;

  color: #4d4d4d;

  max-width: 500px;

  margin-bottom: 2.5rem;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`;

const OutlineButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 190px;

  padding: 1rem 2.8rem;

  border: 1px solid #6f6b44;

  border-radius: 100px;

  background: transparent;

  color: #6f6b44;

  text-decoration: none;

  font-family: "Yellowtail", cursive;
  font-size: 2rem;

  transition: all 0.35s ease;

  cursor: pointer;

  &:hover {
    background: #6f6b44;
    color: #f5f2e8;
  }
`;

const MobileReverse = styled.div`
  display: contents;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column-reverse;
    gap: 5rem;
  }
`;
const ViewMoreLink = styled.a`
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
  }
`;

const EditorialSection: React.FC = () => {
  return (
    <Section>
      <Container  data-aos="fade-up">
        <Grid>
          {/* IMAGE 1 */}
          <ImageWrapper>
            <img
              src="https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/73aa84b8-9916-42a3-882b-a3e09c3bb96b/6b9a00c5-2a4c-448a-aae1-df8989355f27.jpg?format=2500w"
              alt="Mallorca"
            />
          </ImageWrapper>

          {/* REGISTRY */}
          <TextBlock align="center">
            <ScriptTitle>Registry</ScriptTitle>

            <Description>
              Your presence at our wedding is the greatest gift we could ask
              for. However, if you would like to celebrate this moment with a
              gesture, we have created a small registry for your convenience.
            </Description>

            <ViewMoreLink href="
            /#/gifts">
              Registry
            </ViewMoreLink>
          </TextBlock>

          {/* MOBILE REVERSE BLOCK */}
          <MobileReverse>
            {/* TRAVEL */}
            <TextBlock align="center">
              <ScriptTitle>Travel & Stay</ScriptTitle>

              <Description>
                We are so grateful that many of you will be travelling to
                Mallorca to celebrate with us. We have curated a selection of
                our favorite hotels, restaurants, and places to explore during
                your stay.
              </Description>

              <ViewMoreLink href="/#/travel">
                Explore Guide
              </ViewMoreLink>
            </TextBlock>

            {/* IMAGE 2 */}
            <ImageWrapper >
              <img
                src="https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/1772531941845-2ZRQQA23XWPWU87EOSY3/karl-muscat-R8fTulnTr7Y-unsplash.jpg"
                alt="Mallorca Road"
              />
            </ImageWrapper>
          </MobileReverse>
          {/* IMAGE 3 */}
<ImageWrapper>
  <img
    src="https://images.squarespace-cdn.com/content/v1/69a6b0deacfcea5ece6bc960/1772531941723-014YFQ3VYKASJW11KM9N/mitchell-luo-iGC5SaSpaKY-unsplash.jpg?format=750w"
    alt="Mallorca Coast"
  />
</ImageWrapper>

{/* FAQS */}
<TextBlock align="center">
  <ScriptTitle>FAQs</ScriptTitle>

  <Description>
    We know destination weddings can come with many questions, so we
    prepared a small guide with helpful information regarding
    transportation, dress code, weather, and local recommendations.
  </Description>

  <ViewMoreLink href="/#/faqs">
    Read FAQs
  </ViewMoreLink>
</TextBlock>
        </Grid>
      </Container>
    </Section>
  );
};

export default EditorialSection;