import React from 'react';
import { connect, styled } from "frontity";
import Link from "./Link";
import SocialIconsContainer from './SocialIconsContainer';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterAboutUs = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.socialMenuUrl}`).items;

  return (
    <FooterWidget className="col-lg-4 col-md-6 footer-widget">
      <h3 className="widget-title">About Us</h3>
      <img loading="lazy" className="footer-logo" src="https://jmksecurity.s3.eu-west-2.amazonaws.com/jmk-security-logo-social.png" alt="JMK Security Logo" />
      <p>Bespoke security systems that <br />protect your people, processes, and assets.</p>
      <div className="footer-social">
        <SocialIconsContainer />
      </div>
    </FooterWidget>
  )
}

export default connect(FooterAboutUs);

const FooterWidget = styled.div`

.widget-title {
    font-size: 16px;
    font-weight: 700;
    position: relative;
    margin: 0 0 30px;
    padding-left: 15px;
    text-transform: uppercase;
    color: #fff;
    border-left: 3px solid #ED532B;
  }
  
  /* Footer about us */
  .footer-logo {
    margin-bottom: 25px;
    width: 132.5px;
  }
  
  /* Footer social */
  .footer-social {
    margin-top: 15px;
    
    ul {
        text-align: left!important;
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left: -13px;
        display: inline-flex;

        li {
            padding: 0 20px 0 10px;

            a {
                &:hover {
                    color: #ED532B;
                  }
            }
          }
    }
  }
  
`
