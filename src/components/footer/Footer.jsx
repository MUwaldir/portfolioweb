import React from "react";
import "./Footer.css";

// Recordendo que el font-awesome sirve para un formato de logo y mas. les deje el link en el README.md

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Waldir</h1>
        {/* <p style="color:#FF0000";>Red paragraph text</p> */}
        <p>Peruvian, Lima</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>+51 930 351 118</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Copyright © 2023 waldir merjildo</div>
        <div className="sns-links">
          {/* aqui yo agregue varias de mis redes sociales ques mas utilizo actualmente */}
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