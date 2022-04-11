import React from 'react';
import { connect, styled } from "frontity";
import { Container, Row } from 'reactstrap';
import FooterCopyright from './FooterCopyright';

const FooterContainer = ({ children }) => {

  return (
    <Footer id="footer" classNameName="footer bg-overlay">
      <div className="footer-main">
        <Container>
          <Row>
            {children}
          </Row>
        </Container>
      </div>
      <FooterCopyright />
    </Footer>
  )
}

export default connect(FooterContainer);

const Footer = styled.footer`
  background-color: #334050;
  color: #cecece;

  .footer-main {
    padding: 80px 0 60px;
    display: flex;
  }

}

`
