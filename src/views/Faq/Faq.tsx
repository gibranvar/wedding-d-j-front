import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const breakpoints = {
   xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};
const FAQSection = styled.section`
  background: hsla(68, 29%, 15%);

  min-height: 100vh;

  padding: 12rem 2rem 8rem 2rem;

  color: #f5f1e8;

  @media (max-width: ${breakpoints.sm}) {
    padding: 8rem 1.5rem 6rem 1.5rem;
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
    font-size: 2.5rem;
    font-family:"Viaoda Libre", serif;
    text-transform: uppercase;
   

  margin: 3rem auto 2rem auto;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 3rem;
    font-size: 2.3rem;
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


const faqs = [
  {
    question: 'What does "Formal Attire" mean?',
    answer:
      "We kindly ask guests to dress in elegant formal attire. Floor-length gowns and sophisticated evening dresses are encouraged for ladies, while gentlemen are invited to wear suits or tuxedos.",
  },

  {
    question: "Are specific colors required for the dress code?",
    answer:
      "We kindly invite our guests to dress in elegant formal attire inspired by the warmth and romance of the Mediterranean. Think soft sunset hues, warm neutrals, champagne, blush, sand, caramel, taupe, soft gold, and muted earthy tones.",
  },


  {
    question: "Will transportation be provided?",
    answer:
      "Guest transportation will be provided between the villa and the ceremony venue, with return service back to the villa. Additional transportation details will be shared closer to the wedding date.",
  },

  {
    question: "Can I bring a plus one?",
    answer:
      "Due to limited capacity, invitations are extended only to the guests listed on your invitation.",
  },
];

const FAQ = () => {
  return (
    <div>
        <Navbar/>
    <FAQSection>
      <FAQContainer data-aos="fade-up" >
        <FAQTitle>
          Frequently Asked
          <br />
          Questions
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
                <Answer>{faq.answer}</Answer>
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

export default FAQ;