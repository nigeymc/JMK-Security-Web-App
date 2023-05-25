import { useState } from "react";
import { styled, connect, Global, Head } from "frontity";
import SidePanel from "./SidePanel";

/**
 * The menu that should be displayed on mobile devices displaying links to
 * various categories and pages. This component contains mostly logic and
 * renders the {@link MenuModal} component.
 *
 * @param props - The state and actions injected by Frontity.
 * @returns A React component.
 */
function MobileMenu({ state, actions }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  let toggleMedium = sidebar ? `showMenu` : `hideMenu`;

  const openPanel = (e) => {
    showSidebar();
  };

  return (
    <>
      <MenuToggle onClick={openPanel}>
        <input
          type="checkbox"
          className="hamburgerMenu"
          onChange={showSidebar}
          checked={sidebar && `unchecked`}
          aria-hidden="true"
        />
        <div className="bars" role="button" aria-controls="mobileMenu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </MenuToggle>
      <SidePanel toggleMedium={toggleMedium} event={showSidebar} />
    </>
  );
}

const MenuToggle = styled.button`
  position: fixed;
  right: 24px;
  top: 90px;
  background: #fff;
  border: 0;
  z-index: 9999;
  height: 40px;
  width: 40px;
  display: none;
  padding-top: 5px;

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);
