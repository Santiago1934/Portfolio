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
            duration={500}
          >
            <p style={{color:"white"}}>About</p>
          </Link>
          <Link  className="linkSideBar"
            onClick={toggle} 
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p style={{color:"white"}}>Experience</p>
          </Link>

          <Link className="linkSideBar"
           onClick={toggle}
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           <p style={{color:"white"}}>Work</p> 
          </Link>

          <Link className="linkSideBar" 
          onClick={toggle}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p style={{color:"white"}}>Contact</p>
          </Link>

        </SideBarMenu>
       
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
