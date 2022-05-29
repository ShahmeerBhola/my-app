import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Result() {
  const matches = useMediaQuery("(max-width:786px)");
  const smallscreen = useMediaQuery("(max-width:580px)");
  return (
    <Wrapper>
      <Content>
        {
          smallscreen?
          <Column3>
            <Results1>
              <h2>
                See the <span>results</span>
              </h2>
              <Img>
            <Msg>
              <p>before</p>
              <p>
                AFTER <span>(DAY 30)</span>
              </p>
            </Msg>
            <Photo>
              <div />
              <div />
              <div>
                {" "}
                <img src="/img/left.png" />
                <h2>Drag</h2>
                <img src="/img/right.png" />
              </div>
            </Photo>
            <Button>
              <p>frown lines</p>
              <p>forehead lines</p>
            </Button>
          </Img>
              <Multiple>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
              </Multiple>
              <p>
                <span>Rihanna </span>
                has moderate to severe frown lines and forehead lines. Shown
                here is a photo before treatment and a photo 30 days after
                treatment with BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA).
              </p>
              <span>Actual patients • Results my vary</span>
            </Results1>


        </Column3>:
                <Column1>
                {matches ? (
                  <Results>
                    <h2>
                      See the <span>results</span>
                    </h2>
                    <Multiple>
                      <Circle />
                      <Circle />
                      <Circle />
                      <Circle />
                    </Multiple>
                    <p>
                      <span>Rihanna </span>
                      has moderate to severe frown lines and forehead lines. Shown
                      here is a photo before treatment and a photo 30 days after
                      treatment with BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA).
                    </p>
                    <span>Actual patients • Results my vary</span>
                  </Results>
                ) : (
                  <Results>
                    <h2>
                      See the <span>results</span>
                    </h2>
                    <p>
                      <span>Rihanna </span>
                      has moderate to severe frown lines and forehead lines. Shown
                      here is a photo before treatment and a photo 30 days after
                      treatment with BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA).
                    </p>
                    <Multiple>
                      <Circle />
                      <Circle />
                      <Circle />
                      <Circle />
                    </Multiple>
                    <span>Actual patients • Results my vary</span>
                  </Results>
                )}
      
                <Img>
                  <Msg>
                    <p>before</p>
                    <p>
                      AFTER <span>(DAY 30)</span>
                    </p>
                  </Msg>
                  <Photo>
                    <div />
                    <div />
                    <div>
                      {" "}
                      <img src="/img/left.png" />
                      <h2>Drag</h2>
                      <img src="/img/right.png" />
                    </div>
                  </Photo>
                  <Button>
                    <p>frown lines</p>
                    <p>forehead lines</p>
                  </Button>
                </Img>
              </Column1>
        }
        <Column2>
          {matches ? (
            <Cards>
              <Card>
                <img src="/img/logo_1.png" />
                <h2>Frown lines</h2>
                <p>
                  Real patient. Results may vary. Photos taken at maximum frown
                  before and 30 days after treatment with BOTOX<sup>®</sup>{" "}
                  Cosmetic (onabotulinumtoxinA). In clinical studies, physicians
                  assessed 74% of adults had improvement at day 30, subjects
                  assessed 82% had at least moderate improvement.¹
                </p>
              </Card>
              <Card>
                <img src="/img/logo_2.png" />
                <h2>Crow’s feet</h2>
                <p>
                  Real patient. Results may vary. Photos taken at full smile
                  before and 30 days after treatment with BOTOX<sup>®</sup>{" "}
                  Cosmetic (onabotulinumtoxinA). In 2 clinical studies, 26.1%
                  and 20.3% of adults had a ≥ 2-grade improvement at day 30. In
                  one of these studies, 67.9% had mild or no crow’s feet lines
                  at day 30 after treatment.¹
                </p>
              </Card>
              <Card>
                <img src="/img/logo_3.png" />
                <h2>Forehead lines</h2>
                <p>
                  Real patient. Results may vary. Photos taken at maximum
                  eyebrow elevation before and 30 days after treatment with
                  BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA). In 2 clinical
                  studies of healthy adults, 61% and 46% had a ≥ 2-grade
                  improvement in their forehead lines at day 30.¹
                </p>
              </Card>
            </Cards>
          ) : (
            <Cards>
              <Card>
                <img src="/img/logo_1.png" />
                <h2>Frown lines</h2>
                <p>
                  In clinical studies, physicians assessed 74% of adults had
                  improvement at day 30, subjects assessed 82% had at least
                  moderate improvement.¹ Real patient. Results may vary. Photos
                  taken at maximum frown before and 30 days after treatment with
                  BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA).
                </p>
              </Card>
              <Card>
                <img src="/img/logo_2.png" />
                <h2>Crow’s feet</h2>
                <p>
                  In 2 clinical studies, 26.1% and 20.3% of adults had a ≥
                  2-grade improvement at day 30. In one of these studies, 67.9%
                  had mild or no crow’s feet lines at day 30 after treatment.¹
                  Real patient. Results may vary. Photos taken at full smile
                  before and 30 days after treatment with BOTOX<sup>®</sup>{" "}
                  Cosmetic (onabotulinumtoxinA).
                </p>
              </Card>
              <Card>
                <img src="/img/logo_3.png" />
                <h2>Forehead lines</h2>
                <p>
                  In 2 clinical studies of healthy adults, 61% and 46% had a ≥
                  2-grade improvement in their forehead lines at day 30.¹ Real
                  patient. Results may vary. Photos taken at maximum eyebrow
                  elevation before and 30 days after treatment with BOTOX
                  <sup>®</sup> Cosmetic (onabotulinumtoxinA).
                </p>
              </Card>
            </Cards>
          )}
          <span>
            1. BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA) Prescribing
            Information, 2020.
          </span>
        </Column2>
      </Content>
    </Wrapper>
  );
}

export default Result;

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  font-family: "Graphik";
  font-style: normal;
  background: #020202;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
padding: 140px 0px;
gap: 100px;
width:75%;
margin 0 auto;
@media (max-width: 1070px){
  width:85%;
  gap:50px;
}
@media (max-width: 786px){
padding: 100px 0px;
  width:95%;
  margin:0;
  margin-left:auto;
  gap:20px;
}
@media (max-width: 580px){
    width:98%;
    margin:0;
    margin-left:auto;
    gap:20px;
  }
`;
const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  height: 100%;
  padding-bottom: 40px;
  @media (max-width: 786px){
    width:95%;
`;
const Results = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  h2 {
    width: 100%;
    font-family: Roboto;
    margin: 0;
    font-weight: 400;
    font-size: 48px;
    letter-spacing: -1px;
    span {
      color: #ffffff;

      font-size: 48px;
      font-family: Graphiks;
    }
  }
  p {
    width: 430px !important;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    span {
      font-size: 16px;
      color: #c08676;
    }
  }

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    font-family: "Roboto";
    color: rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 1070px) {
    width: 40%;
    gap: 20px;
    h2 {
      font-size: 42px;
      span {
        font-size: 42px;
      }
    }
    p {
      width: fit-content !important;
    }
  }
  @media (max-width: 786px) {
    width: 35%%;
    gap: 10px;
    h2 {
      font-size: 34px;
      line-height: 38px;
      span {
        font-size: 34px;
      }
    }
    p {
      width: fit-content !important;
    }
  }
`;
const Multiple = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 1070px) {
    gap: 10px;
  }
`;
const Circle = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  border: 1.33333px solid rgba(255, 255, 255, 0.25);
  &:nth-child(1) {
    border: 1.33333px solid #c08676;
  }
  @media (max-width: 1070px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 786px) {
    width: 70px;
    height: 70px;
  }
`;
const Img = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width:580px){
    width:100%;
  }
`;
const Msg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Roboto;
  text-align: center;
  p {
    width: 50%;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #d09284;
  }
  p {
    width: 50%;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #d09284;
    span {
      font-style: italic;
    }
  }
  @media (max-width: 1070px) {
    gap: 20px;
    p {
      width: 40%;
    }
    p {
      width: 40%;
    }
  }
  @media (max-width: 786px) {
    gap: 20px;
    p {
      width: 35%;
    }
    p {
      width: 35%;
    }
  }
  @media (max-width: 580px) {
    gap: 10px;
    p {
      width: 50%;
    }
    p {
      width:50%;
    }
  }
`;
const Photo = styled.div`
  position: relative;
  height: 448px;
  background-color: #fff;
  border-radius: 16px;
  div {
    height: 100%;
    position: absolute;
    width: 49.5%;
    background: #808080;
    z-index: 99;
    border-radius: 16px 0px 16px 16px;
  }
  div:nth-child(2) {
    height: 100%;
    position: absolute;
    width: 49.5%;
    background: #808080;
    z-index: 99;
    right: 0;
    border-radius: 0px 16px 16px 16px;
  }
  div:nth-child(3) {
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    position: absolute;
    width: 140px;
    height: 40px;
    background: #ffffff;
    border-radius: 4px;
    img {
      width: 15px;
      height: 10px;
    }
    h2 {
      font-weight: 400;
      font-size: 10px;
      padding: 0px 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      line-height: 14px;
      color: #020202;
    }
    
  }
  @media (max-width: 786px){
  height: 400px;
  div:nth-child(3) {
    padding: 10px 10px;
    width: 80px;
    height: 30px;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Roboto;
  text-align: center;
  p:nth-child(2) {
    width: 50%;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: rgba(209, 209, 209, 1);
  }
  p:nth-child(1) {
    width: 50%;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
  }
`;

const Column2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  color: #ffffff;
  height: 100%;
  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: row;
  gap: 10px;
  justify-content: space-between;
  ::-webkit-scrollbar{
    display:none;
  }
  @media (max-width: 786px) {
    overflow-x:auto;
    padding:0 10px;

  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px 24px;
  gap: 10px;
  width: 369px;
  background: linear-gradient(0deg, #252525, #252525), #d09284;
  border-radius: 16px;
  img {
    width: 32px;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -1px;
    color: #c08676;
  }
  p {
    margin: 0;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  @media (max-width: 1070px) {
    padding: 20px 10px 10px;
    gap: 10px;
    width: 369px;
    background: linear-gradient(0deg, #252525, #252525), #d09284;
    border-radius: 16px;
    img {
      width: 32px;
    }
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media (max-width: 786px) {
    min-width: 280px;
  }
  @media (max-width: 580px) {

    min-width: 240px;
  }
`;


const Column3 = styled.div`
  width: 92%;
  margin:0 auto;
  color: #ffffff;
  height: 100%;
  padding-bottom: 40px;
`;
const Results1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  h2 {
    text-align:center;
    width: 100%;
    font-family: Roboto;
    margin: 0;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: -1px;
    span {
      color: #ffffff;

      font-size: 32px;
      font-family: Graphiks;
    }
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    span {
      font-size: 16px;
      color: #c08676;
    }
  }

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    font-family: "Roboto";
    color: rgba(255, 255, 255, 0.7);
  } 
`;
