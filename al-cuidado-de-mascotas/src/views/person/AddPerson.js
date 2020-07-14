import React, {useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const Add=()=>{
    return(
        <div>
            <div className="form-group">
                <label for="exampleInputEmail1">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Nombre de usuario</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Ubicación</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Fecha de nacimiento</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Es propietario</label>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">¿Desea también ser cuidador?</label>
            </div>
            <button type="submit" className="btn btn-primary">Inscribirse</button>
        </div>

    );
};

export default Add;