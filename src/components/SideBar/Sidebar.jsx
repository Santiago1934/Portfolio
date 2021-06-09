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
import { useTranslation } from "react-i18next";

const Sidebar = ({ toggle, isOpen }) => {

  const [t, i18n] = useTranslation("global")

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
            <p style={{color:"white"}}> {t("links.about")} </p>
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
            {t("links.technologies")}
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
           <p style={{color:"white"}}>   {t("links.work")}</p> 
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
            <p style={{color:"white"}}> {t("links.contact")}</p>
          </Link>

        </SideBarMenu>
       
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
