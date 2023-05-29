
import "./Slider.css";

// Debo Arreglar los slider con boton de siguiente o ciclo infinito ya que estos no lo presentan

const slidesInfo = [
  {
    id:1,
    src: "./images/passwordgenerator.png",
    title:"Password Generator",
    alt: "Project 1",
    desc: "Web application developed with Django to generate secure passwords for your respective needs.",
    tech:"Python,Django,HTML,CSS,BOOTSTRAP 5",
    url:"https://djangopassword.onrender.com/"
  },

  

  {
    id:2,
    src: "./images/juego-nintendo.png",
    title:"Design - Game - NINTENDO",
    alt: "Project 1",
    desc: "Design project of a Nintendo game website with Bootstrap 5.",
    tech:"HTML,BOOTSTRAP 5",
    url:"https://muwaldir.github.io/proyectoboostrap/"
  },
  {
    id:3,
    src: "./images/movie-details.png",
    title:"Movie Details",
    alt: "Project 1",
    desc: "Project developed with api consumption of movies showing their details.",
    tech:"REACT, JS, HTML, CSS, BOOTSTRAP 5, GITHUB, NETLIFY",
    url:"https://pelisdetails.netlify.app/"
  },
  

  
  {
    id:4,
    src: "./images/libro-ventas.png",
    title:"Web Development Book Addresses",
    alt: "Project 1",
    desc: "Project developed to sell selected web development books, which are sent to the address of the book so that you can buy it on the indicated platform.",
    tech:"Python,Django,HTML,CSS,BOOTSTRAP 5",
    url:"https://cms2022w.000webhostapp.com/sitiowebphp/"
  },
 
  {
    id:5,
    src: "./images/cat-game.png",
    title:"Cat Game",
    alt: "Project 1",
    desc: "Project cat game , which consists of selecting a box from 9 and clicking on it will insert the letter X or the number 0 . The winner is the one who gets 3 boxes with the same graphic in a continuous way.",
    tech:"JS, CSS, HTML, GITHUB",
    url:"https://muwaldir.github.io/juegoxo/"
  },
  {
    id:6,
    src: "./images/calculadorajs.png",
    title:"Calculadora",
    alt: "Project 1",
    desc: "Proyecto de calculadora con las operaciones básicas, desarrollados con tecnologías como : HTML, CSS , JS y SASS.",
    tech:"HTML, JS, CSS , SASS",
    url:"https://calculadorabasicw.netlify.app/"
  },
  
  
  {
    id:7,
    src: "./images/pexels-photo-4050290.jpeg",
    title:"tasks",
    alt: "Project 1",
    desc: "Proyecto para organizar tus tareas diarias , como poder marcarlos como ya terminados y pendientes.",
    tech:"Python,Django,HTML,CSS,JS,PostgreSQL",
    url:"https://django-task-crud.onrender.com/"
  },
  {
    id:8,
    src: "./images/inters-simpleycompuesto.png",
    title:"Simple and Compound Interest Calculator",
    alt: "Project 1",
    desc: "Simple and compound interest calculator project developed for managing investment or expenses that is generated through interest.",
    tech:"JS, HTML, CSS, GITHUB",
    url:"https://waldirmerjildo.github.io/curso_practico_javascrip/"
  },
  {
    id:9,
    src: "./images/ozzy-drix.png",
    title:"Ozzy Drix",
    alt: "Project 1",
    desc: "Video project of the series Ozzy Drix season 1 and 2.",
    tech:"JS, HTML, CSS, GITHUB",
    url:"https://waldirmerjildo.github.io/patyozzydrix/"
  },
  {
    id:10,
    src: "./images/pinguino.png",
    title:"Pingüino",
    alt: "Project 1",
    desc: "Proyecto de una imagen de un Pingüino desarrollado con css y sass. Proyecto de una imagen de un Pingüino desarrollado con css y sass. Proyecto de una imagen de un Pingüino desarrollado con css y sass.",
    tech:"CSS, SASS",
    url:"https://muwaldir.github.io/pinguino/"
  },
];




// const slides = slidesInfo.map((slide) => (
//   <div className="slide-container">
//     <img src={slide.src} alt={slide.alt} />
//       <div className="box_desc">
//           <p className="desc"><strong>Description: </strong> <br></br>{slide.desc}</p>
//           <p className="tech"><strong>Technologies Used:</strong> {slide.tech}</p>
//           <a type="button"  className="btn" href={slide.url}>web</a>

//     </div>
//     <div className="slide-desc">
//       <span>{slide.title}</span>
      
//     </div>
//   </div>
// ));

export default slidesInfo;