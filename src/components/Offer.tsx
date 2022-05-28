import React from 'react'
import styled from "styled-components";


function Offer() {
  return (
    <Column2>
    <p>Allē MEMBER EXCLUSIVE</p>
    <Bottom>
      <Button>
        <p>claim offer</p>
        <img src="/img/Shape.png" />
      </Button>
      <span>Valid Only at Zen Beauty Cosmetics</span>
    </Bottom>
  </Column2>
  )
}

export default Offer
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 448px;
  height: 539px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  p {
    font-family: "Graphik";
    padding-top: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.08674px;
    text-transform: uppercase;
    color: #c08676;
  }
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  span {
    color: #000;
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    mix-blend-mode: multiply;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #020202;
  border-radius: 4px;
  gap: 10px;
  p {
    padding-top: 0px;
    color: #fff;
  }
`;