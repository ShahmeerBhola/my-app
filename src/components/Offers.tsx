import React from 'react'
import styled from "styled-components";


function Offers() {
  return (
    <Column2>
    <Button>
        <p>claim this offer</p>
        <img src="/img/Shape.png" />
      </Button>
    <Bottom>
    <p>Allē MEMBER EXCLUSIVE</p>
      <span>Valid Only at Zen Beauty Cosmetics</span>
    </Bottom>
  </Column2>
  )
}

export default Offers
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 250px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
@media (max-width:580px){
    width:90%;
    height:420px;
    margin:0 auto;
}
 

`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 170px;
  p {
    font-family: "Graphik";
    padding-top:70px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.08674px;
    text-transform: uppercase;
    color: #c08676;
  }
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
  @media (max-width:580px){
      gap:220px;
      span{
          font-size:10px;
      }
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Roboto";
  background: #020202;
  border-radius: 4px;
  gap: 10px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 1.08674px;
    text-transform: uppercase;
    padding-top: 0px;
    color: #fff;
  }
  @media (max-width:580px){
    p{
        font-size: 14px;  
    }
}
`;