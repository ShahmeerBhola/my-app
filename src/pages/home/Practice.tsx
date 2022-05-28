import React from 'react'
import styled from "styled-components";

function Practice() {
  return (
    <Wrapper>
        <p>We are proud to offer <span>Allē</span> at our practice</p>
        <p>Allē is an aesthetics loyalty program from the makers of JUVÉDERM® and BOTOX®. Allē helps you save on a variety of products and treatments at our office.</p>

    </Wrapper>
  )
}

export default Practice

const Wrapper=styled.div`
font-family: 'Graphik';
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
`;