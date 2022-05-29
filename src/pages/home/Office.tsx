import { useMediaQuery } from "@mui/material";
import { match } from "assert";
import React from "react";
import styled from "styled-components";
import Offer from "../../components/Offer";
import Offers from "../../components/Offers";


function Office() {
  const matches=useMediaQuery('(max-width:786px)'); 
    return (
        <Wrapper>
      <Content>
        <Column1>
          <h2>Office <span>hours</span></h2>
          <p>Claim your offer and Zen Beauty Cosmetics will contact you to schedule your appointment.</p>
          <Timing>
              <h2>Monday</h2>
              <p>10:00AM - 5:00PM</p>
          </Timing>
          <Timing>
              <h2>Tuesday</h2>
              <p>10:00AM - 5:00PM</p>
          </Timing>
          <Timing>
              <h2>Wednesday</h2>
              <p>10:00AM - 5:00PM</p>
          </Timing>
          <Timing>
              <h2>Thursday</h2>
              <p>10:00AM - 5:00PM</p>
          </Timing>
          <Timing>
              <h2>Friday</h2>
              <p>10:00AM - 5:00PM</p>
          </Timing>
          <Timing>
              <h2>Saturday</h2>
              <p>10:00AM - 5:00PM</p>
          </Timing>
          <Timing>
              <h2>Sunday</h2>
              <p>Closed</p>
          </Timing>
        </Column1>
        {
          matches?<Offers/>:<Offer/>
        }
        
      </Content>
    </Wrapper>
  );
}

export default Office;

const Wrapper = styled.div`
overflow:hidden;
  height: 100vh;
  width: 100%;
  background: radial-gradient(215.68% 113.67% at -16.67% -8.36%, #FFFFFF 0%, #F5E0D8 35.97%, #F4DFD7 72.19%, #DFC2BB 98.65%) ;
  @media (max-width: 786px){
    height:100%;  
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 0px;
  flex-direction: row;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 1070px){
    width:85%;
  }
  @media (max-width: 786px){
    width:90%;
    gap:10px;
  }
  @media (max-width: 580px){
    padding:80px 0px;
    width:95%;
    flex-direction:column;
    align-items:center;
    gap:50px;
  }

`;
const Column1 = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  h2 {
    margin: 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
    /* or 100% */
    
    letter-spacing: -1px;
    color: #000000;
    span{
    font-family: 'Petersburg';
    font-style:italic;

    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1070px){
    width: 290px;
    h2 {
      font-size: 40px;
      line-height: 36px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }

  }
  @media (max-width: 786px){
    width: 250px;
    h2 {
      font-size: 34px;
      line-height: 28px;
    }
    p {
      font-size: 12px;
      line-height: 16px;
    }

  }
  @media (max-width: 786px){
    width: fit-content;
    text-align:center;
    h2 {
      font-size: 34px;
      line-height: 28px;
    }
    p {
      font-size: 12px;
      line-height: 16px;
    }

  }
`;
const Timing=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
border-bottom: 1px solid rgba(2, 2, 2, 0.1);
h2{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
}
@media (max-width: 1070px){
    gap:30px;
    h2{
        font-size: 16px;
        line-height: 26px;
    }
}
`;

