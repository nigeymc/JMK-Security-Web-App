import React from 'react';
import { styled, css, connect } from "frontity";
import { Container } from 'reactstrap';

const HeroBanner = ({ state, libraries, image }) => {
  const description = state.source.get(state.frontity.description);

  const banner = css`
    background: url(${image}); 
    background-repeat: no-repeat;
    position: relative;
    height: 400px;
    background-position: center 85%;
    background-size: cover;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
    
    &:after {
      content: "";
      background: rgba(51, 64, 80, 0.7);
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      height: 100%;
    }
    `
  return (
    <div css={banner}></div>
  )
};

export default connect(HeroBanner);



