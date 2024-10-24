import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./Link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import socialSharingComponent from "./socialSharingComponent";
import SocialSharingComponent from "./socialSharingComponent";
import { BsFillArrowLeftCircleFill } from "react-icons/fa";

/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const urlArr = data.link.split("/");
  const breadcrumbsArr = urlArr.filter((e) => e);
  const [level1, level2] = breadcrumbsArr;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <>
        {/* Hide author and date on pages */}
        {!data.isPage && (
          <div>
            <StyledLink link={`/${level1}`}>
              <span></span>
              <strong>{` Go Back to News`}</strong>
            </StyledLink>
            <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            <DateWrapper>
              {" "}
              on <b>{date.toDateString()}</b>
            </DateWrapper>
            <SocialSharingComponent
              url={`https://jmksecurity.net${data.link}`}
              size={32}
              round={true}
            />
          </div>
        )}
        {/* Look at the settings to see if we should include the featured image */}
        {!data.isPage && state.theme.featured.showOnPost && (
          <div className="featured-image">
            <FeaturedMedia id={post.featured_media} />
          </div>
        )}
      </>

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.

        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        // Render the content using the Html2React component so the HTML is
        // processed by the processors we included in the
        // libraries.html2react.processors array.
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0;
  padding: 24px 0;

  @media (max-width: 992px) {
    padding: 24px 25px;
  }

  .featured-image {
    max-width: 600px;
    width: 100%;
    margin: 16px auto;

    div {
      margin-top: unset;
      height: unset;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
  color: rgba(12, 17, 43, 0.9);
  border-bottom: solid 1px gba(12, 17, 43);

  &:hover {
    color: rgba(12, 17, 43, 0.9);
  }
  display: flex;
  justify-content: space-between;
  width: 170px;

  span {
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='rgba(12, 17, 43, 0.9)' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'%3E%3C/path%3E%3C/svg%3E");
    width: 30px;
    height: 30px;
    display: inline-block;
    background-size: contain;
  }
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */

const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
  position: relative;
  display: flex;
  flex-flow: column;

  div&:first-of-type {
    margin-top: -100px;
  }

  .contact-wrapper {
    margin-top: 100px !important;
  }

  .wp-container-34 {
    padding-right: 15px;
  }

  ol {
    padding-left: 25px;

      li {
        line-height: 1.6em;
        font-size: 1.2em;
        font-weight: 500;
        margin-bottom: 15px;
        position: relative;
      }
  }

  a:not(.wp-block-button__link) {
    color: inherit;
    text-decoration: underline;
    font-weight: bold;
  }

  ul {
    padding-left: 25px;

      li {
        line-height: 1.6em;
        font-size: 1.2em;
        padding: 0 25px 0 0;
        list-style: none;
        font-weight: 500;
        margin-bottom: 15px;
        padding-left: 50px;
        position: relative;

          &:before {
            content: "";
            width: 40px;
            height: 40px;
            background-image: url(http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-check-shield.svg);
            background-repeat: no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
            -webkit-background-position: center;
            background-position: center;
            position: absolute;
            top: 0;
            left: 0;
          }
      }
  }

  .center-images {
    align-items: center;
  }

  .wp-block-file {
    a {
      display: none;
    }
  }

  iframe {
    min-height: 345px;
    width: 100%;
  }

  .wpcf7-form {
    padding-top: 25px;

    label {
      display: flex;
      flex-flow: column;
      font-size: 0.8em;
      color: #fff;
      text-transform: uppercase;
      font-weight: 900;
      font-family: 'Montserrat',sans-serif;
      position: relative;
    }

    input, textarea {
      width: 100% 
    }

    input:not([type="submit"]), textarea {
      position: relative;
      top: -32px;
      left: -10px;
      z-index: -3;
      padding-left: 120px;
      border: solid 1px rgba(51, 64, 80, 0.7);
    }

    .wpcf7-submit {
      top: 0;
      left: -10px;
      max-width: 150px;
      width: 100%;
      height: 40px;
      position: relative;
      border: 0;
      border-radius: 3px;
      padding: 15px 30px 15px 20px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      font-family: "Montserrat",sans-serif;
      -webkit-transition: 350ms;
      transition: 350ms;
      font-size: 14px;
      background: #ED532B;
      line-height: 0.9;
    }

    .wpcf7-submit:hover {
      background-color: #334050;
    }

    input[name="tel-467"] {
      padding-left: 200px;
    }

    input[name="your-subject"] {
      padding-left: 142px;
    }

    input:focus-visible, textarea:focus-visible {
      outline: solid 1px #ED532B;
      border: solid 1px #ED532B;
    }

    textarea[name="your-message"] {
      padding-left: 10px;
      padding-top: 40px;
    }

    p {
      margin-top: -25px;
    }

    .wpcf7-form-control-wrap {
      position: relative;

      span {
        color: #f00;
        font-size: 1em;
        font-weight: normal;
        display: block;
        top: -32px;
        position: relative;
      }
    }

    .your-name:before, .your-email:before, .tel-467:before, .your-subject:before, .your-message:before {
      content: "";
      background-color: #334050;
      top: -2px;
      z-index: -1;
      position: absolute;
      height: 31.5px;
      left: -9px;
    }

    .your-name:before {
      width: 114px;
    }

    .your-email:before {
      width: 114px;
    }

    .tel-467:before {
      width: 193px;
    }

    .your-subject:before {
      width: 134px;
      top: -3px;
    }

    .your-message:before {
      width: 140px;
      top: -3px;
    }

  }

  .logos {
    flex-flow: column;
    justify-content: center;
    display: flex;
  }

  .wp-container-1.h2-wrapper, .wp-container-2  .h2-wrapper, .wp-container-3  .h2-wrapper {
    margin-top: -80px!important;
    z-index: 9;
  }

    h3 {
      color: rgb(51, 64, 80, 1);
      position: relative;
      text-align: center;
      height: 130px;
      padding-top: 75px;

        @media (max-width: 893px) and (min-width: 768px) {
          margin-bottom: 40px;
        }
    }

    h3#intruder-alarm-systems, h3#security-lighting, h3#electrical-services, #cctv-systems, h3#access-control-systems, h3#maintenance {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 100%;
        height: 50px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    h3#cctv-commercial, h3#cctv-domestic, h3#cctv-site-rental {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 100%;
        height: 50px;
        background-size: contain;
        background-position: 30% center;
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    h3#cctv-commercial, h3#cctv-domestic, h3#cctv-site-rental {
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 10px;
        width: 100%;
        height: 50px;
        background-size: contain;
        background-position: 70% center;
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    h3#cctv-commercial, h3#cctv-domestic, h3#cctv-site-rental {
      &:before {
        background-image: url('https://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-cctv.svg');
      }
    }

    h3#cctv-commercial {
      &:after {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-commercial.svg');
      }
    }

    h3#cctv-domestic {
      &:after {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-domestic.svg');
      }
    }

    h3#cctv-site-rental {
      &:after {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-site-rental.svg');
      }
    }

    h3#intruder-alarm-systems {
      &:before {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-intruder-alarms.svg');
      }
    }

    h3#security-lighting {
      &:before {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-security-lighting.svg');
      }
    }

    h3#electrical-services {
      &:before {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-electrial-services.svg');
      }
    }

    h3#cctv-systems {
      &:before {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-cctv.svg');
      }
    }

    h3#access-control-systems {
      &:before {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-access-control.svg');
      }
    }

    h3#maintenance {
      &:before {
        background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-maintenance.svg');
      }
    }

    .partners-content {
      margin-left: 0;
      margin-right: 0;
    }

    .partners-row {
      background-color: transparent;
      border-left: solid 10px rgb(237, 83, 43, 1);
      border-top: solid 1px rgb(237, 83, 43, 1);
      border-right: solid 1px rgb(237, 83, 43, 1);
      border-bottom: solid 1px rgb(237, 83, 43, 1);
      margin-bottom: 25px;
      margin-left: 0;
      margin-right: 0;
      align-items: center;

        .partners-card {
          display: flex;
          flex-flow: column;
    
            @media (max-width: 992px) {
              margin-top: 12px;
              margin-bottom: 12px;
            }
    
            .wp-block-column {
              flex: 1;
              padding: 10px;
              display: flex;
              flex-flow: column; 
    
                h3 {
                  color: rgb(51, 64, 80, 1);
                  position: relative;
                  text-align: center;
                  padding-top: 15px;
                  height: unset;
            
                    @media (max-width: 893px) and (min-width: 768px) {
                      margin-bottom: 40px;
                    }
                }
    
                .wp-block-buttons {
                  text-align: center;
                  display: flex;
                  justify-content: center;
                  padding: 25px;
    
                    @media (max-width: 1200px) {
                      padding: 25px 0;
                    }
                    
                    .btn-primary {
                      padding: 15px 30px 15px 20px;
                    }
                }
            }
        }
    }

    .services-sub-page {
      display: flex;

      .domestic-list {
        padding-left: 25px;
        padding-top: 25px;
      }

        @media (max-width: 992px) {
          flex-flow: column;
        }

        .image-wrapper {
          display: flex;
          flex-flow: column;
        }

        .no-border {
          img {
            border: none;
          }

          padding: 0 15px;
        }

        img {
          border-left: 10px solid #ED532B;
        }

        ul {
          padding-left: 0;

            li {
              line-height: 1.6em;
              font-size: 1.2em;
              padding: 0 25px 0 0;
              list-style: none;
              font-weight: 500;
              margin-bottom: 15px;
              padding-left: 50px;
              position: relative;

                &:before {
                  content: "";
                  width: 40px;
                  height: 40px;
                  background-image: url(http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-check-shield.svg);
                  background-repeat: no-repeat;
                  -webkit-background-size: contain;
                  background-size: contain;
                  -webkit-background-position: center;
                  background-position: center;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
            }
        }

    }

    .intruder-alarms {
      .photo-summary {
        text-align: center;
        margin-top: -20px;
      }
      
      ul {
        li {
          line-height: 2.2em;
        }
      }
    }

  .h2-wrapper {
    background-color: rgb(237, 83, 43, 1);
    padding: 1em;
    margin: 25px 0;
    @media (max-width: 768px) {
      margin: 25px -15px;
    }

      h2.intro-title {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 32px;
        line-height: normal;
        color: #fff;
        margin: 0;
      }
    
      h2.intro-sub-title {
        font-weight: 300;
        text-transform: uppercase;
        font-size: 18px;
        line-height: normal;
        margin: 0;
        color: #fff;
      }
  }

    .banner-container {
      display: flex;
      flex-flow: row;

        p {
          padding: 45px 15px 25px;
        }

        figure {
          margin: 24px auto 15px;
        }

        .hp-video {
          padding-right: 25px;
        }

        .banner {
          min-height: 350px;
        }
      
      @media (max-width: 992px) {
        flex-flow: column;

          .banner {
            order: 2;
            background-position: center;
          }

          div:not(.banner) {
            order: 1;
          }

          .hp-video {
            padding-right: 0;
          }
      }

    }

    p {
      line-height: 1.6em;
      font-size: 1.2em;
      padding: 0;
        @media (max-width: 991px) {
          padding: 0;
        }
      font-weight: 500;
    }

    .services-sub-page .image-wrapper {
      margin-right: 25px
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    figure {
      margin: 24px auto;
      width: 100%;

      figcaption {
        font-size: 1.1em;
        line-height: 1.5;
      }
    }

    iframe {
      display: block;
      margin: auto;
    }

    .customer-guarantees {
      padding: 25px 0;
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;

        p {
          padding-left: 50px;
          position: relative;

            &:before {
              content: "";
              width: 40px;
              height: 40px;
              background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/icon-check-shield.svg');
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              position: absolute;
              top: 10px;
              left: 0;
            }
        }
    }

    .our-services-block {
      display: flex;
      flex-flow: column;
      color: #fff;

        @media (max-width: 992px) {
          margin-top: 12px;
          margin-bottom: 12px;
        }

        .wp-block-column {
          background-color: transparent;
          border-left: solid 10px rgb(237, 83, 43, 1);
          border-top: solid 1px rgb(237, 83, 43, 1);
          border-right: solid 1px rgb(237, 83, 43, 1);
          border-bottom: solid 1px rgb(237, 83, 43, 1);
          flex: 1;
          padding: 10px;
          display: flex;
          flex-flow: column; 

            .wp-block-buttons {
              text-align: center;
              display: flex;
              justify-content: center;
              padding: 25px;

                @media (max-width: 1200px) {
                  padding: 25px 0;
                }
                
                .btn-primary {
                  padding: 15px 30px 15px 20px;
                }
            }
        }
    }

    .jmk-block-quote {
      background-color: #fff;
      padding: 1rem;
      margin-bottom: 25px;
      border-left: solid 10px rgb(237, 83, 43, 0.7);
      position: relative;
      text-transform: initial;
      color: rgb(237, 83, 43, 0.7);
      font-style: italic;
      text-align: center;
      text-transform: initial;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -1px;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;

      p {
        text-transform: initial;
        color: rgb(237, 83, 43, 0.7);
        font-style: italic;
        text-align: center;
        text-transform: initial;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: -1px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased !important;
      }

      cite {
        font-weight: 300;
        text-transform: uppercase;
        font-size: 18px;
        line-height: normal;
      }
      
      &:before {
        content: "“";
        position: absolute;
        left: 0;
        top: 0.4em;
        font-size: 6em;
        color: rgb(237, 83, 43, 0.1);
          @media (max-width: 768px) {
            top: 0.2em;
          }
      }
    }

    #hp-h2 {
      text-transform: initial;
      background-color: #fff;
      color: rgb(237, 83, 43, 0.7);
      width: 100%;
      max-width: 1200px;
      position: relative;
      top: -110px;
      z-index: 9;
      padding: 1rem;
      font-style: italic;
      text-align: center;
      border-left: solid 10px rgb(237, 83, 43, 0.7);
      margin-top: 100px!important;
      
      &:before {
        content: "“";
        position: absolute;
        left: 0;
        top: 0.4em;
        font-size: 6em;
        color: rgb(237, 83, 43, 0.1);
          @media (max-width: 768px) {
            top: -0.2em;
          }
      }
      
      @media (max-width: 768px) {
        font-size: 1.4rem;
        line-height: 1.4;
      }
    }

    .accreditation {
      margin: -120px 0 25px 0;
      padding: 15px 0;
      display: flex;
      flex-flow: column;

      h5 {
        text-align: center;
        font-size: 1em;
      }

      .accreditation-icons {
        text-align: center;
        align-items: center;
        justify-content: center;

          @media (max-width: 768px) {
            flex-wrap: wrap;
          }

          @media (max-width: 570px) {
            flex-flow: column;
          }

          figure {
            figcaption {
              font-size: 1em;
              line-height: 1.5;
              padding-top: 10px;
            }

            span {
              padding: 0 25px;
              display: flex;
  
              @media (max-width: 768px) {
                justify-content: center;
              }
  
               img {
                position: relative;
  
                @media (max-width: 768px) {
                  width: 60%;
                }
               }
            }
          }
      }
    }

    .main-content {
      padding: 25px 0;
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;

        p {
          padding: 0 25px;
            @media (max-width: 991px) {
              padding: 0;
            }
          font-weight: 600;

            strong {
              font-weight: 700;
            }
        }
    }

    .main-content.services {
      margin-top: 0;
    }

    .services-group {
      margin-top: 12px;
      margin-bottom: 12px;

        @media (max-width: 768px) {
          margin-top: 0;
          margin-bottom: 0;
        }
    }

    .hp-services-block {
      display: flex;
      flex-flow: column;
      color: #fff;

        @media (max-width: 768px) {
          margin-top: 12px;
          margin-bottom: 12px;
        }

        .wp-block-column {
          background-color: rgb(51, 64, 80, 0.9);
          border-left: solid 10px rgb(237, 83, 43, 1);
          flex: 1;
          padding: 10px;
          display: flex;
          flex-flow: column;

            h3 {
              color: #fff;
              position: relative;
              text-align: center;
              height: 130px;
              padding-top: 75px;

                @media (max-width: 893px) and (min-width: 768px) {
                  margin-bottom: 40px;
                }
            }

            p {
              font-weight: 500;
              padding: 0;
              flex: 1;
              text-align: center;
            }

            .wp-block-buttons {
              text-align: center;
              display: flex;
              justify-content: center;
              padding: 25px 25px 20px;

                @media (max-width: 996px) {
                  padding: 25px 5px 20px 5px;
                }

                .btn-primary {
                  background: #fff;
                  border-bottom: solid 5px #fff;
                  
                    a {
                      color: #ED532B;
                      text-decoration: none;
                      position: relative;

                        &:after {
                          content: "";
                          width: 16px;
                          height: 20px;
                          background-image: url('http://wp.jmksecurity.net/wp-content/uploads/2022/04/button-right-orange.svg');
                          background-size: contain;
                          background-position: center;
                          position: absolute;
                          top: -1px;
                          right: -17px;
                        }
                    }

                    &:hover {
                      border-bottom: solid 5px rgb(237, 83, 43, 0.7);
                    }
                }
            }

    }

`;
