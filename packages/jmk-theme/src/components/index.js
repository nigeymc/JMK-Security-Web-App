import bootstrapGlobalStyles from "bootstrap/dist/css/bootstrap.min.css";
import { css, connect, styled, Head, Global, decode } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./Post";
import Sticky from "react-stickky";
import CookieConsent from "react-cookie-consent";

// Components
import Loading from "./Loading";
import Title from "./Title";
import PageError from "./Page-Error";
import TopBarEl from "./TopBar";
import HeaderComponent from "./HeaderComponent";
import MainHeaderComponent from "./MainHeader";
import HeaderRightComponent from "./HeaderRightComponent";
import Nav from "./Nav";
import MobileMenu from "./Menu";
import FooterContainer from "./FooterContainer";
import FooterAboutUs from "./FooterAboutUs";
import FooterAddress from "./FooterAddress";
import FooterServices from "./FooterServices";
import DisplayBanner from "./DisplayBanner";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta
          name="google-site-verification"
          content="7y_BdurSOYhC1SPHsg68bsHfGp15-B97Ov5wHCpm7Io"
        />
        <meta charset="UTF-8"></meta>
        <meta name="description" content={state.frontity.description} />
        <meta
          name="keywords"
          content="premium, cost-effective, security CCTV specialists Northern Ireland, security CCTV specialists Ireland, security CCTV specialists Tyrone, CCTV installers Northern Ireland, CCTV installers Ireland, security, ANPR, systems installations, CCTV installers, electrical services, construction site CCTV, CCTV hire, solar powered CCTV, construction site security, Ireland CCTV, Northern Ireland CCTV, Tyrone CCTV, domestic CCTV, commercial CCTV, home CCTV, CCTV site rental, intruder alarm systems Northern Ireland, access control systems"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property={state.frontity.description} />
        <meta
          property="og:url"
          content={`https://jmksecurity.net${data.route}`}
        />
        <meta
          property="og:image"
          content="https://wp.jmksecurity.net/wp-content/uploads/2022/05/Screenshot-2022-05-10-at-5.44.28-pm.png"
        />
        <html lang="en" />
        <meta name="robots" />
        <meta name="googlebot" />
        <script>
          {`
            // Define dataLayer and the gtag function.
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Default analytics_storage to 'denied' as a placeholder
            // Determine actual values based on your own requirements
            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
            `}
        </script>

        <script>
          {`
          function consentGranted() {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
          }
          `}
        </script>

        <script defer>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '514310700611515');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=514310700611515&ev=PageView&noscript=1"
          />`}
        </noscript>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={bootstrapGlobalStyles} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <div className="body-inner">
        <TopBarEl />
        <Sticky className="stickyStyle">
          <HeaderComponent>
            <MainHeaderComponent>
              <HeaderRightComponent />
            </MainHeaderComponent>
            <MobileMenu />
          </HeaderComponent>
          <Nav />
        </Sticky>
        <DisplayBanner />

        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
        <FooterContainer>
          <FooterAboutUs />
          <FooterAddress />
          <FooterServices />
        </FooterContainer>
        <CookieConsent
          style={{ background: "#ED532B" }}
          buttonStyle={{
            background: "#334050",
            color: "#fff",
            fontSize: "13px",
          }}
          buttonText="Accept & continue"
          onAccept={() => {
            consentGranted();
          }}
        >
          We use essential cookies to enhance your online experience. By
          clicking "Accept & continue", you agree to our use of cookies
          categorised by 'Analytics'.
        </CookieConsent>
      </div>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  max-width: 1250px;
  padding: 1em;
  margin: auto;

  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.9em;
    margin-bottom: 1em;
  }
`;
const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,600,600i,700,700i,800|Open+Sans:400,400i,600,600i,700,700i,800&display=swap);

  body {
    background: #fff;
    color: #334050;
  }

  body,
  p {
    font-family: "Open Sans", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    line-height: 26px;
    font-size: 15px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #334050;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }

  header.stickyStyle + main,
  header.stickyStyle + div {
    margin-top: 160px;
  }

  h1 {
    font-size: 36px;
    line-height: 48px;
  }

  h2 {
    font-size: 28px;
    line-height: 36px;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  h4 {
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    letter-spacing: -0.2px;
  }

  h5 {
    font-size: 14px;
    line-height: 24px;
  }

  .alert .icon {
    margin-right: 15px;
  }

  // Global styles

  html {
    overflow-x: hidden !important;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .body-inner {
    position: relative;
    overflow: hidden;
  }

  .preload {
    position: fixed;
    background: #fff url(../images/preload.gif) center center no-repeat;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 99999;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a {
    color: inherit;
    transition: 0.2s ease;
  }

  section,
  .section-padding {
    padding: 70px 0;
    position: relative;
  }

  .no-padding {
    padding: 0;
  }

  .gap-60 {
    clear: both;
    height: 60px;
  }

  .gap-40 {
    clear: both;
    height: 40px;
  }

  .gap-30 {
    clear: both;
    height: 30px;
  }

  .gap-20 {
    clear: both;
    height: 20px;
  }

  .mrb-30 {
    margin-bottom: 30px;
  }

  .mrb-80 {
    margin-bottom: -80px;
  }

  .mrt-0 {
    margin-top: 0 !important;
    margin-bottom: 20px !important;
  }

  .pab {
    padding-bottom: 0;
  }

  a:focus {
    outline: 0;
  }

  .ts-padding {
    padding: 60px;
  }

  .solid-bg {
    background: #f9f9f9;
  }

  .dark-bg {
    background: #252525;
    color: #fff;
  }

  .dark-bg h2,
  .dark-bg h3 {
    color: #fff;
  }

  .solid-row {
    background: #f0f0f0;
  }

  .bg-overlay {
    position: relative;
  }

  .bg-overlay .container {
    position: relative;
    z-index: 1;
  }

  .bg-overlay:after {
    background-color: rgba(0, 46, 91, 0.8);
    z-index: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .bg-overlay:after {
    position: relative;
  }

  .bg-overlay:after {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .content-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    overflow: hidden;
  }

  // Bootstrap
  .nav-tabs > li.active > a,
  .nav-tabs > li.active > a:focus,
  .nav-tabs > li.active > a:hover,
  .nav-tabs > li > a:hover,
  .nav-tabs > li > a {
    border: 0;
  }

  .nav > li > a:focus,
  .nav > li > a:hover {
    background: none;
  }

  .pattern-bg {
    background: #f5f5f5 url(../images/crossword.png);
  }

  a[href^="tel"] {
    color: inherit;
    text-decoration: none;
  }

  .btn:active,
  .btn:focus {
    box-shadow: none !important;
  }

  .btn-primary {
    border: 0;
    border-radius: 3px;
    padding: 15px 30px 15px 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    transition: 350ms;
    font-size: 14px;
  }

  .btn-white {
    padding: 15px 30px 10px 20px;
  }

  @media (max-width: 767px) {
    .btn-primary,
    .btn-dark {
      font-size: 13px;
    }
  }

  .btn-primary {
    background: #ed532b;

    a {
      color: #fff;
      text-decoration: none;
      position: relative;

      &:after {
        content: "";
        width: 16px;
        height: 20px;
        background-image: url("https://jmksecurity.s3.eu-west-2.amazonaws.com/button-right-white.svg");
        background-size: contain;
        background-position: center;
        position: absolute;
        top: -1px;
        right: -17px;
      }
    }
  }

  .btn-dark {
    background: #23282d;
  }

  .btn-primary:hover,
  .btn-dark:hover {
    background: #334050;
    color: #fff;
  }

  .general-btn {
    margin-top: 50px;
  }

  // Bootstrap
  .nav-tabs > li.active > a,
  .nav-tabs > li.active > a:focus,
  .nav-tabs > li.active > a:hover,
  .nav-tabs > li > a:hover,
  .nav-tabs > li > a {
    border: 0;
  }

  .nav > li > a:focus,
  .nav > li > a:hover {
    background: none;
  }

  a[href^="tel"] {
    color: inherit;
    text-decoration: none;
  }

  .stickyStyle {
    top: 0 !important;

    .container > div:not(.row) {
      padding: 10px 0 !important;
      transition: padding 300ms ease;
    }

    img {
      max-height: 45px !important;
    }
  }

  .medium {
    width: 100vw;
  }

  .hideMenu {
    right: -100vw;
    z-index: 9999999999;
    overflow: hidden;
  }

  .showMenu {
    right: 0;
    z-index: 9999999999;
    overflow: hidden;
  }

  input.hamburgerMenu {
    opacity: 0;
    z-index: 1;
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    top: 0;
    right: 5px;
  }

  .bars {
    right: 5px;
    position: absolute;
    width: 30px;
    height: 35.3333333333333333px;
    padding-top: 4.7368px;
    border-radius: 10px;
    -webkit-transition: background-color 0.2s,
      -webkit-transform 0.3s ease-in-out;
    transition: background-color 0.2s, -webkit-transform 0.3s ease-in-out;
    -o-transition: background-color 0.2s, transform 0.3s ease-in-out;
    transition: background-color 0.2s, transform 0.3s ease-in-out;
    transition: background-color 0.2s, transform 0.3s ease-in-out,
      -webkit-transform 0.3s ease-in-out;

    .bar {
      width: 30px;
      height: 5px;
      margin-bottom: 4.3333333333333333px;
      background: #334050;
      -webkit-transition: color 0.5s linear, -webkit-transform 0.2s ease-in-out;
      transition: color 0.5s linear, -webkit-transform 0.2s ease-in-out;
      -o-transition: color 0.5s linear, -webkit-transform 0.2s ease-in-out;
      -o-transition: transform 0.2s ease-in-out, color 0.5s linear;
      transition: transform 0.2s ease-in-out, color 0.5s linear;
      transition: transform 0.2s ease-in-out, color 0.5s linear,
        -webkit-transform 0.2s ease-in-out;
      border-radius: 20px;
      -moz-transition: color 0.5s linear, -webkit-transform 0.2s ease-in-out;
      -ms-transition: color 0.5s linear, -webkit-transform 0.2s ease-in-out;
    }
  }

  input:checked + .bars {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  input:checked + .bars {
    .bar:first-child {
      -webkit-transform: rotate(45deg) translate(7px, 6.33333333333333333px);
      -ms-transform: rotate(45deg) translate(7px, 6.33333333333333333px);
      transform: rotate(45deg) translate(7px, 6.33333333333333333px);
      -moz-transform: rotate(45deg) translate(7px, 6.33333333333333333px);
      -o-transform: rotate(45deg) translate(7px, 6.33333333333333333px);
    }
  }

  input:checked + .bars {
    .bar:nth-child(2) {
      -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }

  input:checked + .bars {
    .bar:last-child {
      -webkit-transform: rotate(45deg) translate(-7px, -6.33333333333333333px);
      -ms-transform: rotate(45deg) translate(-7px, -6.33333333333333333px);
      transform: rotate(45deg) translate(-7px, -6.33333333333333333px);
      -moz-transform: rotate(45deg) translate(-7px, -6.33333333333333333px);
      -o-transform: rotate(45deg) translate(-7px, -6.33333333333333333px);
    }
  }
`;
