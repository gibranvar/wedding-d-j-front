
import styled from "styled-components";

const breakpoints = {
    xxs: '400.98px',
    xs: '575.98px',
    sm: '767.98px',
    md: '991.98px',
    lg: '1199.98px',
    xl: '1600px',
};

import GuestForm from "../GuestForm/GuestForm";
interface RsvpSectionProps {
    title?: string;
    subtitle?: string;
}
const RsvpSectionContainer = styled.div`

    background: transparent;
    color: white;
    background-size: cover;
    background-position-x: center ;
    background-position-y:  center ;
    background-repeat: no-repeat;
    padding: 0 5vw;
    text-align: center;
    position: relative;
    @media (min-width: ${breakpoints.lg}) {
        background-position-x: center !important;
        background-position-y:  -560px !important;
    }
    @media (min-width: ${breakpoints.sm}) {
       padding: 0 14vw;
    }
    
`
const RsvpSectionTitle = styled.h1`
    
`

const RsvpSectionSubtitle = styled.p`
    margin: 0 0 25px 0;
    font-size:18px;
    font-weight: 300;
    z-index: 2;
    position: relative;
`
const RsvpSectionDescription= styled.p`
    margin-bottom: 35px;
    font-size: 15px;
    font-weight: 200;
    z-index: 2;
    position: relative;
    white-space: pre-wrap;
    text-align: justify;
    strong{
        font-weight: bold;
        text-decoration: underline;
    }
    em{
        font-weight: bold;
    }
    @media (min-width: ${breakpoints.sm}) {
        font-size: 13px;
        margin: 0;
    }
`
const FormContainer= styled.div`
    margin: 0;
    z-index: 2;
    position: relative;
    
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
 
`;
const RsvpSection: React.FC<RsvpSectionProps> = ({
    title, 
}) =>{
    return(
        <RsvpSectionContainer>
             <Overlay/>
            <RsvpSectionTitle className="title-rsvp">{title}</RsvpSectionTitle>
            <RsvpSectionSubtitle>We would love to share this special moment with you! <br />
            <span>Please confirm your attendance before <strong>July 7, 2026 </strong></span>  </RsvpSectionSubtitle>
            <RsvpSectionDescription><br />Enter the <strong>first 3 letters</strong> of your name and click on the suggestion that will appear. The tickets section will be filled in automatically.<br /><br />As part of your RSVP, we kindly ask guests to share their arrival details, dietary restrictions, and any allergies to help us prepare for the wedding weekend.<br /><br />Before clicking "SEND", make sure everything is correct, as it won't be possible to modify once submitted. </RsvpSectionDescription>
            <FormContainer>
                <GuestForm/>
            </FormContainer>
        </RsvpSectionContainer>
    );
}
export default RsvpSection