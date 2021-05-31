import "./Experience.css";
import img from "../../images/proyectos/prueba1.png";
import pi1 from "../../imgProyects/pi1.png"
import pi from "../../imgProyects/pi.png"
import ecommerce from "../../imgProyects/e-commerce.png"
import weather from "../../imgProyects/weather.png"
import { FaSearchPlus } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";
import {useTranslation } from "react-i18next"


const Experience = () => {

const [open, setOpen] = useState(false)

const [ info, setInfo ] = useState({title:"", description:"", images:""})

const [t, i18n] = useTranslation("global")




const handleDes = (e) => {
  
   setInfo({title:e.title, description:e.description, images:e.image}) 
  
}

  return (
    <div className="containerExperience" id="work">
      <h1 className="titleExperience">WHAT I'VE DONE</h1>

      <div className="containerProjects" >
          

        <div className="marcoExperience"
         onClick={() => {setOpen(!open); 
         handleDes({title:"WeatherApp", 
         description:t("work.proyect1"),
         image:weather})
         
         }}>
          <img className="imageExp" src={weather} width="100%" height="100%"  />
          <div className="middle" >
            <div className="text">
              <FaSearchPlus />
            </div>
            <div className="nameProyect" >WeatherApp</div>
          </div>
        </div>



        <div className="marcoExperience"
         onClick={() => {setOpen(!open);
          handleDes({title:"XGames",
           description:t("work.proyect2"),
           image:pi})}}>
          <img className="imageExp" src={pi1} width="100%" height="100%" />
          <div className="middle">
            <div className="text">
              <FaSearchPlus />
            </div>
            <div className="nameProyect">XGames</div>
          </div>
        </div>

    
        <div className='marcoExperience3' 
         onClick={() => {setOpen(!open); 
         handleDes({title:"CompuStore",
           description:t("work.proyect3"),
           image:ecommerce})}}>
          <img className="imageExp" src={ecommerce} width="100%" height="100%" />
          <div className="middle">
            <div className="text">
              <FaSearchPlus />
            </div>
            <div className="nameProyect">CompuStore</div>
          </div>
        </div>
      </div>

      <Modal isOpen={open} >
          
          <div className="buttonClose">
              <button className="close" onClick={()=> setOpen(!open)} >x</button>
          </div>

           <h4 className="titleModal">{info.title}</h4>
          
        <ModalHeader >
     
        </ModalHeader>
        <ModalBody >
          
    <FormGroup>
    <img src={info.images} width="100%" height="100%"></img>

      <Label className="label"form="usuario">{info.description}</Label>

      <div className="buttonsDesc">
           <button className="buttonPro">View Source</button>
           
           <button className="buttonPro">Visit Site</button>
      </div>
    </FormGroup>
    <button className="closeTwo" onClick={() => setOpen(!open)}>close</button>
        </ModalBody>
        <Modal></Modal>
      </Modal>
    </div>
  );
};

export default Experience;
