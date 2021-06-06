import styled from "styled-components"
 import { Link as LinkR} from "react-router-dom"
 import { Link as LinkS} from "react-scroll"


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 60px;
     margin-top: -80px; 
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;


    @media screen and (max-width: 960px){
        transition: 0.8s all ease
    }
`

export const NavbarContainer = styled.div`
display:flex;
justify-content: flex-end;
height:80px;
z-index:1;
width:100%;
max-width:1100px;
margin-left: 15rem;
`
export const NavLogo = styled(LinkR)`
color:#fff;
justify-self: flex.start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items:center;
margin-left:24px;
font-weight: bold;
text-decoration:none

`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:-1rem;
        right:0;
        transform:translate(-100%, 60%);
        font-size:1.8rem;
        cursor:pointer;
        color:#fff;
        

    }
`

export const NavMenu = styled.ul`
display:flex;
list-style:none;


@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height:30px;
list-style: none;

`

export const NavLinks = styled(LinkS)`
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100%;
cursor:pointer;
font-size: 1rem;
list-style: none;
margin:1rem;
margin-top:1.6rem;
background-color:transparent;
&.active {
    border-bottom: 3px solid #9c1b4f;
}
&:hover{
    color:#83828B;
    transition:500ms;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items:center;


@media screen and (max-width: 768px) {
    display:none
}
`

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background: #01bf71;
white-space:nowrap;
padding:10px 22px;
color: #010606;
outline:none;
cursor: pointer;
border:none;
transition: all 0.2s ease-in-out;
text-decoration:none;


&:hover {
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
   

}
`