import "./Experience.css";
import pi1 from "../../imgProyects/pi1.png"
import pi from "../../imgProyects/pi.png"
import ecommerce from "../../imgProyects/ecommerce.png"
import ecommerce1 from "../../imgProyects/ecommerce1.png"

import weather1 from "../../imgProyects/wheather1.png"
import weather2 from "../../imgProyects/weather2.png"
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
  
   setInfo({title: e.title, description: e.description, images: e.image, site: e.site, code: e.code}) 
  
}

  return (
    <div className="containerExperience" id="work">
      <h1 className="titleExperience">{t("work.title")}</h1>

      <div className="containerProjects" >
          

        <div className="marcoExperience"
         onClick={() => {setOpen(!open); 
         handleDes({title:"WeatherApp", 
         description:t("work.proyect1"),
         image:weather2,
         site: "https://weather-app-emrxzuepj-santiago1934.vercel.app",
         code:"https://github.com/Santiago1934/weatherApp"})
         }}>
          <img className="imageExp" src={weather1} width="100%" height="100%"  />
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
           image:pi,
           site: "https://proyecto-videogames-aq9mfwnst-santiago1934.vercel.app/",
           code:"https://github.com/Santiago1934/proyectoVideogames"})}}>
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
           image:ecommerce1,
           site: "https://compu-store-e-commerce.vercel.app/Home",
           code:"https://github.com/Santiago1934/compuStore-e-commerce"})}}>
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

          <a  className="buttonPro" href={info.code} target="_blank"> {t("links.view-code")}</a>
           
          <a className="buttonPro" href={info.site}  target="_blank"> {t("links.visit-site")}</a>

      </div>
    </FormGroup>
    <button className="closeTwo" onClick={() => setOpen(!open)}>{t("links.close")}</button>
        </ModalBody>
        <Modal></Modal>
      </Modal>
    </div>
  );
};

export default Experience;
