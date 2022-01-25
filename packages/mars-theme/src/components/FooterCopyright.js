import React from 'react';
import { connect, styled } from "frontity";
import { Container, Row, Col } from 'reactstrap';
import Link from "./Link";
import { FaAngleDoubleUp } from 'react-icons/fa';

const FooterCopyright = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;
    console.log(items);
    return (
        <Copyright>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="copyright-info">
                            <span>JMK Security Ltd. Copyright &copy; {new Date().getFullYear()} All Rights Reserved. | <a href="http://www.nmk.dev" title="Designed &amp; Engineered by Niall McKenna">Website by Niall McKenna</a></span>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="footer-menu">
                            <ul className="list-unstyled">
                                {items.map((item) =>
                                    <li key={item.ID}><Link title={item.title} link={item.url}>{item.title}</Link></li>
                                )}
                            </ul>
                        </div>
                    </Col>
                </Row>


            </Container>
        </Copyright>
    )
}

export default connect(FooterCopyright);

const Copyright = styled.div`
  background: #ed532b;
  color: #fff;
  padding: 15px 0 15px;
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-size: 12px;

  .copyright-info {
    text-align: left;

    @media (max-width: 767px) {
      text-align: center;
    }

    a {
        color: #fff;

        &:hover {
            color: #334050;
        }
    }
  }

  .footer-menu {
    text-align: right;

    @media (max-width: 767px) {
      text-align: center;
    }
      ul {
        margin: 0;

          li {
            display: inline-block;
            line-height: 12px;
            padding-left: 15px;

            a {
                background: none;
                color: #fff;
                padding: 0;

                &:hover {
                    color: #334050;
                  }
              }
          }
      }
  }
}


`
