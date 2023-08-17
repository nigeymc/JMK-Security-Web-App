import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";
import { Col, Row } from "reactstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";

const HeaderRightComponent = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;

  return (
    <HeaderRight className="col-lg-10">
      <ul className="top-info-box">
        <li>
          <div className="info-box">
            <div className="info-box-content">
              <p className="info-box-title">
                <FaPhoneAlt /> <span>Call Us</span>
              </p>
              <p className="info-box-subtitle">
                <a href="tel:+442882243977">(+44) 028 8224 3977</a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="info-box">
            <div className="info-box-content">
              <p className="info-box-title">
                <GoMailRead /> <span>Email Us</span>
              </p>
              <p className="info-box-subtitle">
                <a href="mailto:hello@jmksecurity.net">hello@jmksecurity.net</a>
              </p>
            </div>
          </div>
        </li>
        <li className="last">
          <div className="info-box">
            <div className="info-box-content">
              <img
                src="http://wp.jmksecurity.net/wp-content/uploads/2022/04/NICEIC-approvedcontractor.svg"
                alt="NIC EIC Approved Contractor logo"
              />
            </div>
          </div>
        </li>
        <li className="header-get-a-quote">
          {items.map(
            (item) =>
              item.url.includes("our-brochures") && (
                <Link
                  key={item.ID}
                  link={item.url}
                  title="Download Our Latest Brochure"
                  className="btn btn-primary no-arrow"
                >
                  Download Our <br />
                  Latest Brochure
                </Link>
              )
          )}
        </li>
        <li className="header-get-a-quote">
          {items.map(
            (item) =>
              item.url.includes("contact-us") && (
                <Link
                  key={item.ID}
                  link={item.url}
                  title="Request a free survey"
                  className="btn btn-primary no-arrow"
                >
                  Request A <br />
                  Free Survey
                </Link>
              )
          )}
        </li>
      </ul>
    </HeaderRight>
  );
};

const HeaderRight = styled.div`
  float: right;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 740px) and (orientation: landscape) {
    display: none;
  }

  ul.top-info-box {
    list-style: none;
    margin: 0;
    padding: 0;
    float: right;

    li {
      position: relative;
      float: left;
      margin-left: 0;
      border-right: 1px solid #dedede;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      padding-right: 25px;
      margin-right: 25px;

      .info-box {
        span.info-icon {
          font-size: 20px;
          display: inline-block;
          text-align: center;
          margin: 2px 5px 0 0;
          position: relative;
        }

        .info-box-content {
          display: inline-block;
          font-family: $font-secondary;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;

          @media (max-width: 400px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }

        .info-box-title {
          font-size: 14px;
          margin-bottom: 8px;
          line-height: normal;

          @media (max-width: 400px) {
            span {
              display: none;
            }

            width: 10%;
            text-align: left;
          }
        }

        .info-box-subtitle {
          margin: 0;
          line-height: normal;
          font-size: 15px;
          font-weight: 700;

          a {
            color: #334050;

            &:hover {
              color: #334050;
            }
          }
        }
      }
    }

    @media (max-width: 767px) {
      li {
        border: 0;
        text-align: center;
        margin: 0;
        padding: 0 20px;
      }
    }

    @media (max-width: 400px) {
      li {
        border: 0;
        text-align: center;
        margin: 0;
        flex: 0 0 100%;
      }
    }

    li:last-child {
      margin-right: 0;
      padding-right: 0;
      border-right: 0;
    }

    li.last {
      @media (max-width: 1200px) {
        display: none;
      }

      border-right: 0;
      @media (max-width: 400px) {
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    ul.top-info-box {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  ul.top-info-box {
    li.header-get-a-quote {
      border-right: none;
    }
  }

  .header-get-a-quote .btn-primary.no-arrow {
    padding: 12px 25px !important;
    font-size: 13px;
    border-radius: 3px;
    line-height: normal;
    text-transform: capitalize;
    color: #fff;
    margin-top: 5px;

    @media (max-width: 1200px) {
      padding: 12px !important;
    }

    @media (max-width: 991px) {
      padding: 12px 30px !important;
    }

    @media (max-width: 400px) {
      display: none;
    }

    &:hover,
    &:active,
    &:focus {
      background: #334050;
      color: #fff !important;
    }
  }

  ul.navbar-nav > li.header-get-a-quote:hover > a:after {
    position: relative;
    content: no-close-quote;
  }
`;

export default connect(HeaderRightComponent);
