import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className={`navbar-logo ${isScrolling > 20 ? "float" : null}`} onClick={toTheTop}>
        Waldir Merjildo 
      </div>
      <a className="cv" href="./cv/waldir merjildo.pdf" download target="_blanck">
        <button>Download CV</button>
      </a>
    </nav>
  );
};

export default Navbar;