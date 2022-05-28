import React from "react";
import styled from "styled-components";

function Result() {
  return (
    <Wrapper>
      <Content>
        <Column1>
          <Results>
            <h2>
              See the <span>results</span>
            </h2>
            <p>
              <span>Rihanna </span>
              has moderate to severe frown lines and forehead lines. Shown here
              is a photo before treatment and a photo 30 days after treatment
              with BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA).
            </p>
            <Multiple>
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Multiple>
            <span>Actual patients • Results my vary</span>
          </Results>
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
        <Column2>
          <Cards>
            <Card>
              <img src="/img/logo.png" />
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
              <img src="/img/logo.png" />
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
              <img src="/img/logo.png" />
              <h2>Frown lines</h2>
              <p>
                In clinical studies, physicians assessed 74% of adults had
                improvement at day 30, subjects assessed 82% had at least
                moderate improvement.¹ Real patient. Results may vary. Photos
                taken at maximum frown before and 30 days after treatment with
                BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA).
              </p>
            </Card>
          </Cards>
          <span>1. BOTOX<sup>®</sup> Cosmetic (onabotulinumtoxinA) Prescribing Information, 2020.</span>
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
`;
const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  height: 100%;
  padding-bottom:40px;
`;
const Results = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self:center;
  gap: 20px;
  h2 {
    width: 100%;
    font-family: Roboto;
    margin: 0;
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
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
`;
const Multiple = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
`;
const Img = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  gap:10px;
  justify-content: space-between;
  color: #ffffff;
  height: 100%;
  span{
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
  justify-content:space-between;
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
    color: #FFF;
  }
`;
