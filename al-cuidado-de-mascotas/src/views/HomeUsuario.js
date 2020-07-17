import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout';
import axios from 'axios';
import CareTakersIndex from './caretakers/IndexCare';
import LayoutSesion from '../components/LayoutSesion';

const HomeUsuario = () => {

    return (
        <LayoutSesion title="Home">
            <div className="d-flex justify-content-center">
                <CareTakersIndex></CareTakersIndex> 
            </div>
        </LayoutSesion>
    );
};

export default HomeUsuario;