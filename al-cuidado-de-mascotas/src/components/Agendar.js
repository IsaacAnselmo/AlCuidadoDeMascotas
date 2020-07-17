import React, { useState, useEffect } from 'react';
import { Link,useHistory, useParams } from 'react-router-dom';
import axios from 'axios'

const Agendar=({perfil,id})=>{

    const[cita,setCita]=useState({
        inicioCita:'',
        finCita:''
    });
    const urlUsuario=`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`
    const verificar=()=>{
        let horas=(new Date(cita.finCita).valueOf()-new Date(cita.inicioCita).valueOf())/1000;

        if(cita.inicioCita==='')
        {
            alert(`Es necesario ingresar el inicio de la reservación`)
            return false;
        }
        else if(cita.finCita==='')
        {
           alert(`Es necesario ingresar el fin de la reservación`);
           return false
        }
        else if(horas >5)
        {
            alert(`No se pueden agendar más de cinco horas`);
            return false;
        }
        else
            return true;
        
    }

    const handleChange=(event)=>{
        switch(event.target.id){
            case 'inicioCita':
                setCita({
                    ...cita,
                    inicioCita:event.target.value,
                });
                
            break;
            case 'finCita':
                setCita({
                    ...cita,
                    finCita:event.target.vale,
                });
            break;
                
        }
    }

    const Reservar=()=>{
        axios.patch(urlUsuario,{citas:[cita]})
        .then(({data,status})=>{
            
            alert(`Su cita inicia fue agendada con exito`);
        })


    }

    return(
        <>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row">
                
                    <div>
                    <div className="card-body">
                    <h5 className="card-title">Agendar un horario de paseo</h5>
                        <p className="card-text">
                        <label htmlFor="meeting-time">Seleccione el día e inicio de su paseo:</label></p>
                        <p>
                            <input type="datetime-local" id="inicioCita"
                                name="meeting-time" 
                              onChange={handleChange}/>

                        </p>
                        <p className="card-text">
                        <label htmlFor="meeting-time">Seleccione el día y fin de su paseo:</label></p>
                        <p>
                            <input type="datetime-local" id="finCita"
                                name="meeting-time" 
                                onChange={handleChange}/>

                        </p>

                        
                            <button className="btn btn-success" onClick={Reservar}>Confirmar</button>
                        
                    </div>
                    
                    </div>

                </div>
                
            </div>
        </>
    );
};

export default Agendar;