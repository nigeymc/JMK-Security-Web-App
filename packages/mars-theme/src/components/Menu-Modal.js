import { styled, connect, useConnect, decode } from "frontity";
import Link from "./Link";

/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;

  const isThereLinks = items.length > 0;

  const data = state.source.get(state.router.link);
  const postTitle = state.source[data.type][data.id].title.rendered;
  const cleanTitle = decode(postTitle);

  const [home, services, parnters, projects, news, contact] = items;

  const newMenu = [services, parnters, projects, news, contact];

  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        <ul>
          {<li className="nav-item dropdown">
            <MenuLink link={home.url} aria-current={cleanTitle.includes("Homepage") ? "page" : null}>{home.title}</MenuLink></li>
          }
          {isThereLinks && newMenu.map((item) =>
            <li key={item.ID}>
              <MenuLink link={item.url} aria-current={state.router.link.includes(item.slug) ? "page" : null}>{item.title}</MenuLink>
              {item.child_items ?
                <ul>
                  {item.child_items ? item.child_items.map((childItem) => {
                    return (
                      <li><MenuLink key={childItem.ID} link={childItem.url} aria-current={state.router.link.includes(childItem.slug) ? "page" : null}>{childItem.title}</MenuLink></li>
                    )
                  }) : null}
                </ul> : null}
            </li>
          )}
        </ul>
      </MenuContent>
    </div>
  );
};

const MenuOverlay = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: absolute;
  top: -40px;
  width: 65vw;
  justify-content: center;

  ul {
    list-style: none;

    /* styles for active link */
    [aria-current="page"] {
      color: #ED532B !important;
      background-color: rgba(0, 0, 0, 0.05);
      text-shadow: 1px 1px 1px #b5b5b5;
    }
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  padding: 0.7rem 0.7em;
  font-family: "Montserrat", sans-serif;
  display: block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  letter-spacing: .3px;
  border-bottom: 1px solid #e5e5e5;
  color: #333333;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const MenuSubLink = styled(Link)`
  width: 100%;
  padding: 0.5rem 2em;
  font-family: "Montserrat", sans-serif;
  display: block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  letter-spacing: .3px;
  color: #333333;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    
  }
`;

export default connect(MenuModal, { injectProps: false });
