import React from "react";
import { styled, css, connect } from "frontity";
import { Container } from "reactstrap";

const HeroBanner = ({ state, image }) => {
  const description = state.source.get(state.frontity.description);

  const banner = css`
    background: url(${image});
    background-repeat: no-repeat;
    position: relative;
    height: 700px;
    background-position: 100% 30%;
    background-size: cover;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      background-position: 25% 60%;
    }

    &:after {
      content: "";
      background: rgba(51, 64, 80, 0.2);
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      height: 100%;
    }
  `;
  return (
    <div css={banner}>
      <Container fluid>
        <H1>
          <span className="subHeader">
            We design and install cost-effective premium bespoke security
            solutions
          </span>
          <span className="mainHeader">
            Security & CCTV systems that protect Ireland's homes, businesses and
            assets.
          </span>
        </H1>
      </Container>
    </div>
  );
};

const H1 = styled.h1`
  position: absolute;
  right: 100px;
  bottom: 100px;
  width: 500px;
  z-index: 99;
  margin: 20px 0;
  display: flex;
  flex-flow: column;

  @media (max-width: 768px) {
    position: relative;
    bottom: unset;
    right: unset;
    font-size: 42px;
    line-height: 45px;
    width: 300px;
  }

  .subHeader {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #000;
    width: 400px;

    @media (max-width: 768px) {
      font-size: 15px;
      width: 300px;
    }
  }

  .mainHeader {
    color: #fff;
    font-style: normal;
    font-size: 60px;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    text-shadow: 1px 1px 1px #000;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
`;

export default connect(HeroBanner);
