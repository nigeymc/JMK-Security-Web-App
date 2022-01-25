import React from 'react';
import { styled } from "frontity"
import { Container } from 'reactstrap';

const HeaderComponent = ({ children }) => {
    return (
        <Header>
            <div className="bg-white">
                <Container>
                    {children}
                </Container>
            </div>


        </Header>


    )
}

const Header = styled.div`
    background: #fff;
    position: relative;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

    .logo-area {
        padding: 30px 0;
    }
`

export { HeaderComponent as default }

