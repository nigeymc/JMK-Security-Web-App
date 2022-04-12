import React from 'react';
import { connect, styled } from "frontity"
import Link from "./Link";
import { Col, Row } from 'reactstrap';

const MainHeaderComponent = ({ children, state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;
    const [home, , , , ,] = items;

    return (
        <LogoArea>
            <Row className="align-items-center">
                <Col lg="3" className="logo text-lg-left mb-3 mb-md-5 mb-lg-0">
                    <Link className="d-block" data-toggle="dropdown" link={home.url}>
                        <img src="http://wp.jmksecurity.net/wp-content/uploads/2022/04/JMK-Security-Logo-LB.svg" alt="JMK Security logo" />
                    </Link>
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

export default connect(MainHeaderComponent);