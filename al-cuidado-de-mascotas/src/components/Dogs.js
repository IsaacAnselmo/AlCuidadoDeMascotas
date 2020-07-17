import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import CareTakers from './CareTakers';

const Dogs=({mascota})=>{

 

    const showDogs=()=>{

            return mascota.map((item,index)=>
                <Card key={index} edad={item.edad} imagen={item.imagen} nombre={item.nombre} 
                peso={item.peso} raza={item.raza}>
                </Card>)    

    }

    return(
        <>
        
        
            <h2>Mascotas</h2>
            <div className="card-deck">
                {showDogs()}
            </div>
        </>
    );


};


export default Dogs;