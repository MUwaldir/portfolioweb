import React, { useEffect, useState } from "react";
import "./Footer.css";



const Footer = () => {
//     const [abrir, setAbrir] = useState(false)
//   useEffect(()=>{
//     setTimeout(()=>{
//         setAbrir(true)
//     },4000)
//   },[])

  return (
   
    <footer className="footer">
      <div className="footer-info">
        <h1>Waldir - Desarrolador full-stack</h1>

        <p>Peruvian, Lima</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>+51 930 351 118</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Copyright © 2023 waldir merjildo</div>
        <div className="sns-links">

          <a
            href="https://www.linkedin.com/in/waldir-ruben-merjildo-ubaldo-819170215/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/MUwaldir"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github github"></i>
          </a>
         
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;