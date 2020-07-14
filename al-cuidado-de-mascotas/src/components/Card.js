import React from 'react';

const Card=()=>{
    return(
        <div className="card" style={{width: "10rem"}}>
          <img className="card-img-top" src="" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Título de la tarjeta</h5>
            <p className="card-text">Descripción </p>
            {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
            <button className="btn btn-primary">Buscar reservación</button>
            
          </div>
        </div>

    );

}

export default Card;