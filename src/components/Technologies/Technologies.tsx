
import "./Technologies.css"
import htmlImg from "../../nuevasimg/html.webp"
import postgresImg from "../../nuevasimg/postgresql.png"
import sassImg from "../../images/sass.png"
import sequelizeImg from "../../nuevasimg/sequelize.png"
import apolloImg from "../../images/apollo.png"
import cssImg from "../../nuevasimg/css.webp"
import reduxImg from "../../nuevasimg/redux.png"
import githubImg from "../../images/github.png"
import jsImg from "../../nuevasimg/js.png"
import nodeImg from "../../nuevasimg/nodejs.png"
import express2Img from "../../images/express2.png"
import reactImg from "../../nuevasimg/react.png"
import typescriptImg from "../../nuevasimg/typescript.png"
import graphqlImg from "../../nuevasimg/graphQl.png"
import bootstrapImg from "../../nuevasimg/bootstrap.png"
import { useTranslation } from "react-i18next"






 
const Technologies = () => {

    const [t, i18n] = useTranslation("global")

    return ( 
        <div className="containerTech" id="experience">
            <h1 className="titleTechnologies">{t("work.title-tech")}</h1>
            
            <div className="containerImgGroup">

                
                <div className="containerImgTech">
                    <img style={{marginTop:"0.5rem"}}  className="imgTechnologies" src={jsImg} ></img>
                    <p className="titleTech">Javascript</p>
                </div>

                <div className="containerImgTech">
                    <img  style={{marginTop:"0.5rem"}}  className="imgTechnologies" src={typescriptImg} ></img>
                    <p className="titleTech">Typescript</p>
                </div>
                
                <div style={{marginTop:"0.5rem"}} className="containerImgTech">
                    <img className="imgTechnologies"  src={htmlImg} ></img>
                    <p className="titleTech">Html</p>
                </div>

                <div style={{marginTop:"0.5rem"}} className="containerImgTech">
                    <img className="imgTechnologies"  src={cssImg} ></img>
                    <p className="titleTech">Css</p>
                </div>

                
                 <div style={{marginTop:"0.5rem"}} className="containerImgTech">
                    <img className="imgTechnologies"  src={sassImg} ></img>
                    <p className="titleTech">Sass</p>
                </div>

                <div style={{marginTop:"0.7rem"}} className="containerImgTech">
                    <img className="imgTechnologies" src={bootstrapImg} ></img>
                    <p className="titleTech">Bootstrap</p>
                </div>

                <div className="containerImgTech">
                    <img className="imgTechnologies" src={reactImg} ></img>
                    <p className="titleTech">React</p>
                </div>

                <div className="containerImgTech">
                    <img className="imgTechnologies" src={reduxImg} ></img>
                    <p className="titleTech">Redux</p>
                </div>

                

                <div className="containerImgTech">
                    <img className="imgTechnologies" src={apolloImg} ></img>
                    <p className="titleTech">Apollo</p>
                </div>

                

                <div className="containerImgTech">
                    <img className="imgTechnologies" src={sequelizeImg} ></img>
                    <p className="titleTech">Sequelize</p>
                </div>

                <div style={{marginTop:"-0.2rem"}} className="containerImgTech">
                    <img className="imgTechnologies" src={postgresImg} ></img>
                    <p className="titleTech">PostgreSql</p>
                 </div>

                <div style={{marginTop:"-0.5rem"}} className="containerImgTech">
                    <img className="imgTechnologies" src={nodeImg} ></img>
                    <p className="titleTech">NodeJs</p>
                </div>
                
                <div  className="containerImgTech">
                    <img className="imgTechnologies"  src={githubImg} ></img>
                    <p className="titleTech">Git</p>
                </div>

                <div className="containerImgTech">
                    <img className="imgTechnologies"  src={express2Img} ></img>
                    <p className="titleTech">ExpressJs</p>
                </div>

                <div className="containerImgTech">
                    <img className="imgTechnologies"  src={graphqlImg} ></img>
                    <p className="titleTech">GraphQl</p>
                </div>


                </div>
        </div>
     );
}
 
export default Technologies;