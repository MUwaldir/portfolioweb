import React from "react";
import slidesInfo from "./Slides.js"
import "./Slider.css";
import { useState } from "react";



const Slider = () => {
    const [project, setProject] = useState(null)
  const activar = (id) =>{
    const item = slidesInfo.find((obj) => obj.id === id);
        setProject(item)
  }


  return (
    <div className="containerProject">
      <div className="containerProject-left">
      {project ?
       <div className="project-container">
       <div className="project-header">
         <h2 className="project-title">{project.title}</h2>
         <p className="project-description">{project.desc}</p>
       </div>
       <div className="project-body">
         <img className="project-image" src={project.src} alt="Imagen del proyecto" />
         <ul className="project-technologies">
           { project.tech.split(',').map((technology) => (
             <li key={technology} className="project-technology">{technology}</li>
           ))}
         </ul>
       </div>
       <div className="project-footer">
         {/* <a className="project-link" href={project.url} target="_blanck">Ver en GitHub</a> */}
         <a className="project-link" href={project.url} target="_blanck">Ver demo</a>
       </div>
     </div>
      

      
      : <p className="tetxoPorject">Estoy emocionado de seguir aprendiendo y creciendo como desarrollador web, y estoy abierto a nuevas oportunidades y colaboraciones. ¡Explora mi portafolio y descubre mis proyectos para obtener una visión más detallada de mi trabajo!</p>
            }
            </div>
      <div className="containerProject-rigth">
        <h2 className="title_project" onClick={() => setProject(null)}>My Projects</h2>
        <div className="btn_list">
          {slidesInfo.map((pro) => {
            return <button className="btnProjects" onClick={() => activar(pro.id)}>{pro.title}</button>
          })}
        </div>
      </div>
     

    </div>
  );
};

export default Slider;