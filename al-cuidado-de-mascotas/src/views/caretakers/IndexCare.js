import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import CareTakers from '../../components/CareTakers';

const IndexCare=()=>{
    return(
        <CareTakers></CareTakers>
    );

};

export default IndexCare;