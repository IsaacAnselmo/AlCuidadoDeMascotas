import React from 'react';

const Card=(mascota)=>{
    return(
        <div className="card" style={{width: "10rem"}}>
          <img className="card-img-top" src={mascota.imagen} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{mascota.nombre}</h5>
            <p className="card-text">{`Raza: ${mascota.raza} Peso:${mascota.peso}`}</p>
            {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
            <button className="btn btn-primary">Buscar reservación</button>
            
          </div>
        </div>

    );

}

export default Card;