import { styled } from "frontity";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
    FacebookShareCount
} from "react-share";

const socialSharing = ({ url, size, round }) => (

    <SocialsContainer>
        <EmailShareButton url={url}><EmailIcon size={size} round={round} /></EmailShareButton>
        <FacebookShareButton url={url}><FacebookShareCount url={url} /><FacebookIcon size={size} round={round} /></FacebookShareButton>
        <LinkedinShareButton url={url}><LinkedinIcon size={size} round={round} /></LinkedinShareButton>
        <TwitterShareButton url={url}><TwitterIcon size={size} round={round} /></TwitterShareButton>
        <WhatsappShareButton url={url}><WhatsappIcon size={size} round={round} /></WhatsappShareButton>
    </SocialsContainer>
);

export { socialSharing as default };

const SocialsContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0;
  padding: 15px 0;
  
    button {
        padding: 0 5px !important;
    }
  
  `