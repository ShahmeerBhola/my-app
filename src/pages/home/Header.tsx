import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Offer from "../../components/Offer";
import Offers from "../../components/Offers";

function Header() {
  const matches = useMediaQuery('(max-width:786px)');
    return (
        <Wrapper>
      <Content>
        <Column1>
          <img src="/img/logo.png" />
          <h2>Zen Beauty Cosmetics</h2>
          <p>9400 Brighton Way STE 305, Beverly Hills, CA 90210</p>
          <p>+1 (718) 668-0004</p>
        </Column1>
        {
          matches?<Offers/>:
        <Offer/>

        }
        
      </Content>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
overflow:hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
      312.47deg,
      #f6f6f6 23.87%,
      rgba(246, 246, 246, 0) 47.11%
    ),
    linear-gradient(66.05deg, #f6f6f6 32.24%, rgba(246, 246, 246, 0) 48.95%);
  background-color: #000;
  @media (max-width: 786px){
      height:100%;
    }
    @media (max-width:580px){
      background:linear-gradient(340.22deg,#f6f6f6 68.91%,rgba(246,246,246,0) 80.83%),linear-gradient(25.07deg,#f6f6f6 76.86%,rgba(246,246,246,0) 87.71%);
  background-color: #000;

    }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0px;
  flex-direction: row;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 1070px) {
    width:85%;
  }
  @media (max-width: 786px) {
    width:90%;
  }
  @media (max-width: 580px) {
    width:95%;
    flex-direction:column;  
    align-items:center;
    gap:10px;
  }
`;
const Column1 = styled.div`
  padding: 90px 0px;
  display: flex;
  width: 50%;
  flex-direction: column;
  img {
    height: 94px;
    width: 94px;
  }
  h2 {
    margin: 0;
    font-family: "Petersburg";
    font-style: normal;
    font-weight: 400;
    width: 300px;
    font-size: 64px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #000000;
  }
  p {
    width: 216px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1070px) {
    width:45%;
    img {
      height: 80px;
      width: 80px;
    }
    h2 {
      width: 260px;
      font-size: 54px;
      line-height: 100%;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (max-width: 786px) {
    width:40%;
    align-self: flex-end;
    padding:0;  
    img {
      height: 64px;
      width: 64px;
    }
    h2 {
      width: 200px;
      font-size: 43px;
      line-height: 60px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media (max-width: 580px) {
    width:95%;
    padding:0;  
    img {
      height: 36px;
      width: 36px;
    }
    h2 {
      width: 200px;
      font-size: 36px;
      line-height: 41px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

`;

