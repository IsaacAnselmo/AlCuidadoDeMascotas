import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const Profile=({perfil})=>{
    return(
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src="../../public/logo192.png" className="card-img" alt="imagen perfil"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{perfil.usuario}</h5>
                    <p className="card-text">{`${perfil.nombre} ${perfil.apellido}`}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>

    );
};


export default Profile;