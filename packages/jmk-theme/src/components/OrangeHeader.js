import { styled } from "frontity"
import { Row } from 'reactstrap';

const OrangeHeader = ({ title, subTitle }) => (
    <Row>
        <OrangeHeaderWrapper>
            <h2 className="intro-sub-title" id="commercial-residential-1">
                <strong>{subTitle}</strong></h2>
            <h2 className="intro-title" id="security-systems">
                <strong>{title}</strong>
            </h2>
        </OrangeHeaderWrapper>
    </Row>
)

export { OrangeHeader as default };

const OrangeHeaderWrapper = styled.div`
    background-color: rgb(237, 83, 43, 1);
    padding: 1em;
    margin: 25px 0;

        .intro-sub-title {
            font-weight: 300;
            text-transform: uppercase;
            font-size: 18px;
            line-height: normal;
            margin: 0;
            color: #fff;
        }

        .intro-title {
            font-weight: 900;
            text-transform: uppercase;
            font-size: 32px;
            line-height: normal;
            color: #fff;
            margin: 0;
        }
`;