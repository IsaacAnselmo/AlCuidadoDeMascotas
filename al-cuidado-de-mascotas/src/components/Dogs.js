import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import CareTakers from './CareTakers';

const Dogs=()=>{
    return(
        <>
            <h2>Mascotas</h2>
            <Card></Card>
        </>
    );


};


export default Dogs;