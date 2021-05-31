import "./Network.css"
import { FaInstagram, FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa"
 
const Network = () => {
    return (
        <div className="containerNetwork" >

           <div className="netRed">

                <div className="net">
                    <a href="https://www.instagram.com/saantirosales/" className="iconInstagram" target="_blank">
                        <FaInstagram />
                    </a>
                </div>

                <div className="net">
                    <a href="https://www.linkedin.com/in/santiago-julian-rosales-peiretti-814728196/ "target="_blank" className="iconLinkedin">
                        <FaLinkedin/>
                    </a>
                </div>

                <div className="net">
                    <a href="https://github.com/Santiago1934" target="_blank" className="iconGithub">
                        <FaGithub/>
                    </a>
                </div>
            </div>

           
                 <span className="copy">
                     <FaCopyright style={{marginRight:"10px"}}/>
                     Santiago Rosales 
                </span> 
          
            
        </div>
      );
}
 
export default Network;