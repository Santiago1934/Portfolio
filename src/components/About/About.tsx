import "./About.css"
import { FaLaptop, FaCode } from "react-icons/fa"
import { useTranslation } from "react-i18next";
 
const About = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className="container">

        <div className="containTitleAbout">
            <h1 className="titleAbout">{t("about.title")}</h1>
        </div>
      
            <div className="containerAbout">

                <div className="containerInfo">


                <div className="textInfo">
               
               <div className="iconContainer">
                    <i><FaLaptop className="icon" /></i>
                </div>

                
                    <h4 className="info">{t("about.title-design")}</h4>

                    <p className="aboutInfo">
                    {t("about.design")}
                    </p>

                </div>
        </div>
        <div className="containerInfo">


                <div className="textInfo">

                <div className="iconContainer">
                    <i><FaCode  className="icon" /></i>
                </div>
                    <h4 className="info">{t("about.title-development")}</h4>

                    <p className="aboutInfo">
                    {t("about.development")}
                    </p>

                </div>
        </div>

        

            </div>
        </div>
      );
}
 
export default About ;