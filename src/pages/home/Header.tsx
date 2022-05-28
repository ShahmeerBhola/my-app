import React from "react";
import styled from "styled-components";
import Offer from "../../components/Offer";


function Header() {
    return (
        <Wrapper>
      <Content>
        <Column1>
          <img src="/img/logo.png" />
          <h2>Zen Beauty Cosmetics</h2>
          <p>9400 Brighton Way STE 305, Beverly Hills, CA 90210</p>
          <p>+1 (718) 668-0004</p>
        </Column1>
        <Offer/>
        
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
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0px;
  flex-direction: row;
  width: 75%;
  margin: 0 auto;
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
    font-family: "Graphik";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

