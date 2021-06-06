import { FaBars } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarElements";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const NavBar = (props: any) => {
  const [scrollNav, setScrollNav] = useState(false);

  const [t, i18n] = useTranslation("global")

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>

        <div className="lang">
          <MdLanguage className="iconLan" />

           <button className="buttonLan" onClick={() => i18n.changeLanguage("es")}>ES</button>
           <button className="buttonLan" onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>  

        <NavbarContainer>
          {/*  <NavLogo to="/"> dolla </NavLogo>  */}
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
            
        
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
