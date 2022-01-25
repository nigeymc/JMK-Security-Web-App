import React from 'react';
import { connect, styled } from "frontity";
import Link from "./Link";
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIconsContainer = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.socialMenuUrl}`).items;

    return (
        <SocialIcons className="list-unstyled">
            <li>
                {items.map((item) =>
                    item.url.includes('facebook') && <Link key={item.ID} title={item.title} target="_blank" link={item.url}>
                        <span className="social-icon"><FaFacebookF /></span>
                    </Link>)}
            </li>
            <li>
                {items.map((item) =>
                    item.url.includes('instagram') && <Link key={item.ID} title={item.title} target="_blank" link={item.url}>
                        <span className="social-icon"><FaInstagram /></span>
                    </Link>)}
            </li>
            <li>
                {items.map((item) =>
                    item.url.includes('linkedin') && <Link key={item.ID} title={item.title} target="_blank" link={item.url}>
                        <span className="social-icon"><FaLinkedin /></span>
                    </Link>)}
            </li>
        </SocialIcons>
    )
}

export default connect(SocialIconsContainer);

const SocialIcons = styled.ul`
    text-align: right!important;

    @media (max-width: 767px) {
        text-align: center!important;
    }

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
`
