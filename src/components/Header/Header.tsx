import React from 'react'
import "./Header.css"
import perfil from "../../images/edit1.jpg"
import {useTranslation } from "react-i18next"
<style>
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&family=Lato:wght@300&display=swap');
</style>

const Header = () => {

    const [t, i18n] = useTranslation("global")

    return ( 
        <div className="containerHeader" id="about">
         
    
            <div className="containerImg">
                    <img src= {perfil}
                     width="100%" height="auto" >
                    </img>
            </div>

             <div className="textContent">

                <h4 className="dedicHeader">Full-Stack Web Developer</h4>

                <h1 className="nameHeader">{t("header.header-greeting")}</h1>

                <p className="meHeader">{t("header.header-about")}</p>
            
            {/* <div className="containerButtonsHeader">
                <button className="buttonHeader"> Dowload CV</button>

                <button className="buttonHeader">Contact</button>
            </div> */}
            </div> 
   
            <div className="buttonsHeader">
               <button className="buttonCv">View Cv</button>
            </div>
        </div>
     );
}
 
export default Header;