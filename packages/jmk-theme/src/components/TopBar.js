import React from 'react';
import { styled } from "frontity"
import { Container, Row, Col } from 'reactstrap';
import TopBarAddress from './TopBarAddress';
import SocialIconsContainer from './SocialIconsContainer';

const TopBarEl = () => {
    return (
        <TopBar>
            <Container>
                <Row>
                    <Col lg="8" md="8">
                        <TopBarAddress />
                    </Col>
                    <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                        <SocialIconsContainer />
                    </div>
                </Row>

            </Container>

        </TopBar>
    )
}

const TopBar = styled.div`
    padding: 8px 0;
    background: #ebebeb;
    position: relative;

    .top-social {
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-right: -12px;
    
            li {
                display: inline-block;
                padding: 0;
    
                a {
                    color: #2c2c2c;
                    font-size: 14px;
                    transition: 400ms;
                    padding: 9px 12px;
                  }
    
                  a:hover {
                    color: #333;
                  }
              }
          }
    
          @media (max-width: 767px) {
            ul {
              margin-right: 0;
            }
          }
      }
      &.social-icon {
        display: inline-block !important;
        }
    }

    
`

export { TopBarEl as default };