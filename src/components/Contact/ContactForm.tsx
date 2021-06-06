import "./ContactForm.css"
import { FaPaperPlane } from "react-icons/fa"
import { useTranslation } from "react-i18next";
 
const Contact = () => {

    const [t, i18n] = useTranslation("global")

    
    return ( 
        <div className="containerForm" id="contact">

            <div className="iconContainer" >
                <FaPaperPlane style={{fontSize:"4rem", color:"#dddddd"}}/>
            </div>
            <h1 className="titleAbout" id="contact">{t("contact.title")}</h1>

            <p className="contactInfo">{t("contact.about")}</p>

           

            <a className="buttonCv" href="mailto:santiagorosales1@outlook.com"> <p style={{color:"white"}} > {t("contact.button")} </p></a> 

           

        </div>
     );
}
 
export default Contact;