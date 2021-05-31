import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
  SideBarLink,
  SidebarRoute,
} from "./SidebarElements";
import { Link } from "react-scroll";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <Link className="linkSideBar"
            onClick={toggle}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            About
          </Link>
          <Link  className="linkSideBar"
            onClick={toggle} 
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            Experience
          </Link>

          <Link className="linkSideBar"
           onClick={toggle}
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            Work
          </Link>

          <Link className="linkSideBar" 
          onClick={toggle}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            Contact
          </Link>

        </SideBarMenu>
       
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
