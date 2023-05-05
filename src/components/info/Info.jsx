import React from "react";
import "./Info.css";
import skillUrl from "./data"

const Info = () => {

const skill = skillUrl.map( (ski,indice) => {
  return (
    <div key={indice} class="col-4 col-sm-4 col-md-3 col-lg-2 p-5 skill" >
    <div className="card">
      <img src={ski}  class="card-img-top bg-dark" alt="Title" />
     
    
    </div>
  </div>
  )
})

  return (
    
      
    <div className="info-container">
        <div className="info">
          {/* <h1>"Lisp is not a language, it is a building material -ALAN KAY-</h1> */}
          <div>
              <h2 class=" my-4 text-center ele">Skills Set</h2>
            <div class="row boximg d-flex justify-content-center ">
            {skill}
            </div>

          </div>
        </div>
    </div>
  );
};

export default Info;