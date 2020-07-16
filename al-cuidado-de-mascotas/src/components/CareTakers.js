import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const CareTakers = ({id,apellido,nombre,ubicacion,usuario,imagen}) => {
  
  return (
    <>
      <div key={id} className="card" style={{ width: "10rem" }}>
        <img className="card-img-top" src={imagen} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{`${nombre} ${apellido}`}</h5>
          <p className="card-text">{`${ubicacion}`} </p>
          {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
          {<Link to={`/caretakers/view/${id}`}>
            <button className="btn btn-primary" >Ver perfil</button>
          </Link>}
        </div>
      </div>
    </>

  );


};

export default CareTakers;