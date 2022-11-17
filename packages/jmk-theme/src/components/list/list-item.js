import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../featured-media";
import Categories from "../Categories";
import { Row } from "reactstrap";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item, categories }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const [company, industry] = categories;
  const postCategories = item.categories;

  return (
    <Article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        {Object.values(postCategories).map((item) => {
          if (JSON.stringify(item).includes(company[0])) {
            return (
              company !== undefined && (
                <Categories key={company[0]} category={company[1]} />
              )
            );
          } else if (JSON.stringify(item).includes(industry[0])) {
            return (
              company !== undefined && (
                <Categories key={industry[0]} category={industry[1]} />
              )
            );
          }
        })}

        <div>
          {/* If the post has an author, we render a clickable author text. */}
          {author && (
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          )}
          <PublishDate>
            {" "}
            on <b>{date.toDateString()}</b>
          </PublishDate>
        </div>
      </div>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {/* state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      ) }

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  color: #ed532b;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  line-height: normal;

  &:hover {
    color: #334050;
  }
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);

  p {
    line-height: 1.6em;
    font-size: 1.2em;
    padding: 0;
    font-weight: 500;
  }
`;
