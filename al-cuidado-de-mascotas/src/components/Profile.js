import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Agenda from './Agendar';


const Profile=({perfil,id})=>{
    const [visibilidad,setVisibilidad]=useState(false);

    const estableVisibilidad=()=>
    {
        setVisibilidad(!visibilidad);
    }

    return(
        <>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={perfil.imagen} className="card-img" alt="imagen perfil"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{perfil.usuario}</h5>
                        <p className="card-text">{`${perfil.nombre} ${perfil.apellido}`}</p>
                        
                        
                        
                        {visibilidad? <button type="button" onClick={estableVisibilidad} className="btn btn-danger" >Cancelar</button>:<button type="button"onClick={estableVisibilidad} className="btn btn-primary" >Agendar</button>}
                    </div>
                    
                    </div>
                </div>
                
            </div>
            {visibilidad?<Agenda perfil={perfil} id={id}></Agenda>:null}

            </>

    );
};


export default Profile;