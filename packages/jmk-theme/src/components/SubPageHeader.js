import React from 'react';
import { css, styled } from 'frontity';
import { Container } from 'reactstrap';

const SubPageHeader = ({ image }) => {

  return (
    <Banner style={{ backgroundImage: `url(${image})` }}>
      <Container fluid>
      </Container>
    </Banner>
  )
};

const Banner = styled.div`
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

export { SubPageHeader as default };



