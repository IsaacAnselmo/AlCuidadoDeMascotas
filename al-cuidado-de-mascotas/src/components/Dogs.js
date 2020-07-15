import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import CareTakers from './CareTakers';

const Dogs=()=>{

    const getBreeds=()=>{
        //generando un número aleatorio entre 1 y 5 para obtener cuantos perros tendrá el dueño
        let maximoPerros=parseInt(Math.random()*(6-1)+1);
        let contador=0;
        for(contador=1;contador<=maximoPerros;contador++)
        {
            let id=parseInt(Math.random()*(266-1)+1);
            axios.get(`http://api.thedogapi.com/v1/images/search?x-api-key=fd5a464f-91bd-475e-be1e-3bb7486e4272&breed_id=${id}`)
            .then((data,status)=>{
                if(data.data.length>0)
                {
                    console.log(data.data);
                }
            })
            .catch(function(error){
                console.log(error);
            });
            
        }


    }


    return(
        <>
        
        <button type="submit" className="btn btn-primary" onClick={getBreeds}>Agregar tarea</button>
            <h2>Mascotas</h2>
            <Card></Card>
        </>
    );


};


export default Dogs;