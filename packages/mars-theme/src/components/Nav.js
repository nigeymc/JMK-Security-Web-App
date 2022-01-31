import { connect, styled, decode } from "frontity";
import Link from "./Link";
import { Container, Row, Col } from 'reactstrap';
import { FaAngleDown } from 'react-icons/fa';
import menu from "./Menu";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;
  // console.log('ITEMS:', items);

  const data = state.source.get(state.router.link);
  const postTitle = state.source[data.type][data.id].title.rendered;
  const cleanTitle = decode(postTitle);

  const [home, services, parnters, projects, news, contact] = items;

  const newMenu = [services, parnters, projects, news, contact];

  return (
    <SiteNavigation>
      <Container>
        <Row>
          <Col lg="12">
            <NavBar className="navbar navbar-expand-lg navbar-dark p-0">

              <div id="navbar-collapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav mr-auto">
                  {<li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" link={home.url} aria-current={cleanTitle.includes("Homepage") ? "page" : null}>{home.title}</Link></li>
                  }
                  {newMenu.map((item) =>
                    <li key={item.ID} className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" link={item.url} aria-current={state.router.link.includes(item.slug) ? "page" : null}>{item.title}{item.child_items ? <FaAngleDown /> : null}</Link>
                      {
                        item.child_items ?
                          <ul className="dropdown-menu" role="menu">
                            {item.child_items ? item.child_items.map((childItem) => {
                              return (
                                <li key={childItem.ID}><Link link={childItem.url} aria-current={state.router.link.includes(childItem.slug) ? "page" : null}>{childItem.title}</Link></li>
                              )
                            }) : null}
                          </ul> : null
                      }
                    </li>
                  )}
                </ul>
              </div>
            </NavBar>
          </Col>
        </Row>
      </Container>
    </SiteNavigation>

  )
};

export default connect(Nav);

const SiteNavigation = styled.div`
  background: #334050;
`;

const NavBar = styled.nav`

.navbar-collapse {
  padding-left: 0;
}

ul.navbar-nav > li > a {
  padding: 15px 0 !important;
  color: #fff;
}

.navbar-toggler {
  margin: 10px 0;
  padding: 6px;
  border-radius: 0;
  font-size: 1rem;
  background: #ed532b;
}

.navbar-toggler:focus {
  outline: 0;
}

ul.navbar-nav > li {
  padding: 0 13px;
  position: relative;
}

ul.navbar-nav > li > a:after,
ul.navbar-nav > li > a:after {
  display: none;
}

ul.navbar-nav > li > a[aria-current="page"] {
  color: #ED532B !important;
  text-shadow: 1px 1px 1px #000;
}

.dropdown-menu li a[aria-current="page"] {
  color: #ED532B !important;
  text-shadow: 1px 1px 1px #EBEBEB;
}

ul.navbar-nav > li > a {
  font-family: "Montserrat", sans-serif;
  color: #fff !important;
  text-rendering: optimizeLegibility;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: -.2px;
  font-size: 14px;
  margin: 0;
  line-height: 40px;
  padding: 30px 0;
  transition: 350ms;
}

.dropdown-menu {
  text-align: left;
  background: #fff;
  z-index: 100;
  min-width: 200px;
  border-radius: 0;
  border: 0;
  border-top: 2px solid #ed532b;
  padding: 0 20px;
  margin: 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  position: absolute;
}

@media (max-width: 991px) {
  .dropdown-menu {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  }
}

.dropdown-menu li a {
  font-family: "Montserrat", sans-serif;
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  padding: 15px 0;
  letter-spacing: .3px;
  border-bottom: 1px solid #e5e5e5;
  color: #333333;
}

@media (max-width: 991px) {
  .dropdown-menu li a {
    padding: 12px 0;
  }
}

.dropdown-menu li:last-child > a {
  border-bottom: 0;
}

.dropdown-menu li a:hover,
.dropdown-menu li a:focus {
  color: #ed532b;
}

.navbar-nav li.dropdown:hover ul.dropdown-menu {
  display: block;
}

@media (min-width: 992px)
  .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
  }
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}
`
