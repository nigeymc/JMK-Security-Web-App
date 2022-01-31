import React from 'react';
import { styled } from "frontity"
import { Col, Row } from 'reactstrap';

const MainHeaderComponent = ({ children }) => {
    return (
        <LogoArea>
            <Row className="align-items-center">
                <Col lg="3" className="logo text-lg-left mb-3 mb-md-5 mb-lg-0">
                    <a className="d-block" href="index.html">
                        <img loading="lazy" src="https://jmksecurity.s3.eu-west-2.amazonaws.com/JMK-Security-Logo-LB.svg" alt="JMK Security logo" />
                    </a>
                </Col>
                {children}
            </Row>
        </LogoArea>
    )
}

const LogoArea = styled.div`
    padding: 30px 0;  

    @media (max-width: 568px) {
        padding: 10px 0;
    }
    
    img {
        width: auto;
        max-height: 65px;

        @media (max-width: 767px) {
            max-height: 50px;
        }
        transition: max-height 300ms ease;
    }

    @media (max-width: 991px) {
        .logo {
            text-align: center;
        }
    }
`

export { MainHeaderComponent as default }