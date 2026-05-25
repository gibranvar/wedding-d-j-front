import styled from "styled-components";
const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

const FooterContainer = styled.div`
     background: hsla(68, 29%, 15%);
    color: #F2EDE7;
    padding: 20px 20px;
   @media (max-width: ${breakpoints.xxs}) {
   padding: 25px 10px;
  }
  
`
const FooterInfo = styled.p`
    font-family: "Inter";
    text-align: center;
    font-size: 12px;

    @media (max-width: ${breakpoints.xxs}) {
    font-size: 0.65 rem;
  }
`
const FooterInfoDeveloper = styled.strong`
    
`
const Footer = () => {
    return(
        <FooterContainer>
                <FooterInfo>DESIGNED AND DEVELOPED BY <FooterInfoDeveloper>DUO STUDIO</FooterInfoDeveloper> ©2026</FooterInfo> 
        </FooterContainer>
        
    )
};

export default Footer