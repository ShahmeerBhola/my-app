import React from 'react'
import styled from "styled-components";

function Practice() {
  return (
    <Wrapper>
        <p>We are <span>proud</span> to offer <span>Allē</span> at <span>our practice</span></p>
        <p>Allē is an aesthetics loyalty program from the makers of JUVÉDERM® and BOTOX<sup>®</sup>. Allē helps you save on a variety of products and treatments at our office.</p>

    </Wrapper>
  )
}

export default Practice

const Wrapper=styled.div`
font-family: 'Roboto';
display: flex;
align-items:center;
justify-content: space-between;
padding: 80px 0px;
flex-direction: row;
width: 75%;
gap:40px;
margin: 0 auto;
p{
    width:450px;
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 48px;
letter-spacing: -1px;
color: #020202;
span{
font-family: 'Graphik';
font-style:italic;
}
span:nth-child(2){
font-style: normal;
    color: #C08676;
}

}
p:nth-child(2){
    width:380px;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
}
@media (max-width: 1070px){
  width:85%;  
  gap:30px;
  p{
    font-size:38px;
  }
}
`;