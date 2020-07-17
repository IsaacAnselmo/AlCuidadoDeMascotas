import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios'

const Agendar=({perfil})=>{
    return(
        <>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row">
                
                    <div>
                    <div className="card-body">
                    <h5 className="card-title">Agendar un horario de paseo</h5>
                        <p className="card-text">
                        <label for="meeting-time">Seleccione el día e inicio de su paseo:</label></p>
                        <p>
                            <input type="datetime-local" id="inicioCita"
                                name="meeting-time" 
                                min={Date.now} max="2021-06-14T00:00"/>

                        </p>
                        <p className="card-text">
                        <label for="meeting-time">Seleccione el día y fin de su paseo:</label></p>
                        <p>
                            <input type="datetime-local" id="finCita"
                                name="meeting-time" 
                                min={Date.now} max="2021-06-14T00:00"/>

                        </p>
                        
                        
                            <button className="btn btn-success" >Confirmar</button>
                        
                    </div>
                    
                    </div>

                </div>
                
            </div>
        </>
    );
};

export default Agendar;