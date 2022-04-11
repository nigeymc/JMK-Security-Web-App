import React from 'react';
import { styled, css, connect } from "frontity";
import { Container } from 'reactstrap';

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
    `
  return (
    <div css={banner}>
      <Container fluid>
        <H1 dangerouslySetInnerHTML={{ __html: description.link.replace("/", "") }} />
      </Container>
    </div>
  )
};

const H1 = styled.h1`
    color: #fff;
    position: absolute;
    z-index: 99;
    width: 500px; 
    font-style: normal;
    font-size: 60px;
    line-height: 58px;
    margin: 20px 0;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    right: 100px;
    bottom: 200px;
    text-shadow: 1px 1px 1px #000;

    @media (max-width: 768px) {
      position: relative;
      bottom: unset;
      right: unset;
      font-size: 42px;
      line-height: 45px;
      width: 300px;
    }

    &:first-letter{
      text-transform: capitalize
    }
    `

export default connect(HeroBanner);



