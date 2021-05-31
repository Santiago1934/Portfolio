import "./ContactForm.css"
import { FaPaperPlane } from "react-icons/fa"
 
const Contact = () => {

    
    return ( 
        <div className="containerForm" id="contact">

            <div className="iconContainer" >
                <FaPaperPlane style={{fontSize:"4rem", color:"#dddddd"}}/>
            </div>
            <h1 className="titleAbout" id="contact">GET IN TOUCH</h1>

            <p className="contactInfo"> 
                Feel free to shoot me an email!</p>

           

            <a className="buttonContact" href="mailto:santiagorosales1@outlook.com"> Say Hello</a> 

           

        </div>
     );
}
 
export default Contact;