import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3> Something about me</h3>
        <p className="parrafo">
        I am a systems engineer specialized in front-end and back-end web development, working with programming languages such as JavaScript, Python and PHP. In addition, I have experience using version control technologies such as GitHub and Git to manage repositories. In design, I use tools like Figma and Adobe XD to create attractive and functional interfaces. In terms of databases, I work with MySQL and PostgreSQL, and I use frameworks like Django and React to develop robust and scalable applications. My studies in different institutions such as Universidad Nacional Del Centro Del Perú, Platzi, Henry, Universidad Continental and CETAM PUCP have allowed me to acquire a set of skills and knowledge that allow me to successfully tackle any web development project.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e479la8knkliq1yxncwwy1gaj7oapdqeonjgzjiybd2&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="400" height="360"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;