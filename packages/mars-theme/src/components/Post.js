import { useEffect } from "react";
import { connect, styled, css, decode } from "frontity";
import Link from "./Link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import { GiCctvCamera } from "react-icons/gi";

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

  const postTitle = state.source[data.type][data.id].title.rendered;
  const cleanTitle = decode(postTitle);

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
          </div>
        )}
      </>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

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
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
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

    p {
      line-height: 1.6em;
      font-size: 1.2em;
      padding: 0 25px;
        @media (max-width: 991px) {
          padding: 0;
        }
      font-weight: 500;
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
        font-size: 0.7em;
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
              background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-check-shield.svg');
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

            h3#cctv-commercial, h3#cctv-domestic, h3#cctv-site-rental, h3#intruder-alarm-systems, h3#access-control, h3#security-lighting, h3#electrical-services {
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
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-cctv.svg');
              }
            }

            h3#intruder-alarm-systems {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-intruder-alarms.svg');
              }
            }

            h3#access-control {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-access-control.svg');
              }
            }

            h3#security-lighting {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-security-lighting.svg');
              }
            }

            h3#electrical-services {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-electrial-services.svg');
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
            top: -0.2em;
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

    .main-content {
      padding: 25px;
      margin-top: -5rem;
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

    .h2-wrapper {
      background-color: rgb(237, 83, 43, 1);
      padding: 1em 1em 0.2em;
      margin: 25px 0;

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

            h3#cctv-systems, h3#intruder-alarms, h3#access-control-systems, h3#security-lighting, h3#maintenance {
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

            h3#cctv-systems {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-cctv.svg');
              }
            }

            h3#intruder-alarms {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-intruder-alarms.svg');
              }
            }

            h3#access-control-systems {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-access-control.svg');
              }
            }

            h3#security-lighting {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-security-lighting.svg');
              }
            }

            h3#maintenance {
              &:before {
                background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/icon-maintenance.svg');
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
                          background-image: url('https://jmksecurity.s3.eu-west-2.amazonaws.com/button-right-orange.svg');
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
