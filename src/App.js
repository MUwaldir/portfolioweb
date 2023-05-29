
import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/modulos/About";
// import Slider from "./components/slider/Slider";
// import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import Cover from "./components/cover/Cover";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import { useRef } from "react";




function App() {
  const divRefs = useRef([]);
  const activeDivRef = useRef(null);
  useEffect(() => {
    const handleScroll1 = () => {
      const scrollPosition = window.scrollY + (window.innerHeight / 2);

      // Buscar el div activo
      let activeDiv = divRefs.current[0];
      divRefs.current.forEach((div) => {
        const divTop = div.offsetTop;
        const divBottom = divTop + div.offsetHeight;
        if (scrollPosition >= divTop && scrollPosition < divBottom) {
          activeDiv = div;
        }
      });

      // Si el div activo ha cambiado, desplazarse a él y centrarlo en la pantalla
      if (activeDiv !== activeDivRef.current) {
        activeDivRef.current = activeDiv;
        activeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);


  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
    
  useEffect(() => {
    handleScroll(); // Ejecutar una vez al montar el componente
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <div ref={(ref) => (divRefs.current[0] = ref)} style={{height:'100vh'}}> <Cover/></div>
     <div ref={(ref) => (divRefs.current[1] = ref)} style={{height:'100vh'}}><About/></div>
     <div  ref={(ref) => (divRefs.current[2] = ref)} style={{height:'100vh'}}><Slider/></div>
     <div ref={(ref) => (divRefs.current[3] = ref)} style={{height:'auto'}}><Info /></div>
     <div ref={(ref) => (divRefs.current[4] = ref)} style={{height:'100vh'}}><Footer /></div>
      
     
    </div>
  );
}

export default App;