import { useState } from "react";
import { styled, connect, useConnect, decode } from "frontity";
import Link from "./Link";

const SidePanel = ({ children, toggleMedium, event, ...props }) => {
  const { state } = useConnect();
  const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;

  const isThereLinks = items.length > 0;

  const data = state.source.get(state.router.link);

  const [home, services, partners, projects, news, brochures, contact] = items;

  const newMenu = [services, partners, projects, news, brochures, contact];

  return (
    <div {...props}>
      <SidePanelOverlay
        className={`sidePanel medium ${toggleMedium}`}
        onClick={event}
      >
        <MenuContent as="nav">
          <ul>
            {
              <li className="nav-item dropdown">
                <MenuLink
                  link={home.url}
                  aria-current={data.isHome ? "page" : null}
                >
                  {home.title}
                </MenuLink>
              </li>
            }
            {isThereLinks &&
              newMenu.map((item) => (
                <li key={item.ID}>
                  <MenuLink
                    key={item.ID}
                    link={item.url}
                    aria-current={
                      state.router.link.includes(item.slug) ? "page" : null
                    }
                  >
                    {item.title}
                  </MenuLink>
                  {item.child_items ? (
                    <ul className="sub">
                      {item.child_items
                        ? item.child_items.map((childItem) => {
                            return (
                              <li key={childItem.ID}>
                                <MenuLink
                                  key={childItem.ID}
                                  link={childItem.url}
                                  aria-current={
                                    state.router.link.includes(childItem.slug)
                                      ? "page"
                                      : null
                                  }
                                >
                                  {childItem.title}
                                </MenuLink>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  ) : null}
                </li>
              ))}
          </ul>
        </MenuContent>
      </SidePanelOverlay>
    </div>
  );
};

const SidePanelOverlay = styled.section`
  padding: 28px 25px;
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  background-color: #334050;
  visibility: visibility;
  -moz-transition: right 500ms ease !important;
  -ms-transition: right 500ms ease !important;
  -webkit-transition: right 500ms ease !important;
  -o-transition: right 500ms ease !important;
  transition: right 500ms ease !important;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const MenuContent = styled.div`
  z-index: 999;
  position: absolute;
  width: 95vw;
  justify-content: center;

  ul {
    list-style: none;
    padding-left: 0;

    /* styles for active link */
    [aria-current="page"] {
      color: #fff !important;
      background-color: rgba(237, 83, 43, 1);
      text-shadow: 1px 1px 1px rgba(237, 83, 43, 1);
    }

    .sub {
      padding-left: 15px;
    }

    a:hover {
      color: #fff !important;
    }
  }
`;

const MenuLink = styled(Link)`
  width: auto;
  padding: 0.7rem 0.7em;
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  letter-spacing: 0.3px;
  color: #fff;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
    color: #fff !important;
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
  letter-spacing: 0.3px;
  color: #fff;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
    color: #fff;
  }
  /* styles for active link */
  &[aria-current="page"] {
  }
`;

export default connect(SidePanel, { injectProps: false });
