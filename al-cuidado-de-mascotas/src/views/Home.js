import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout';
import axios from 'axios';
import CareTakersIndex from './caretakers/IndexCare';

const Home = () => {

    return (
        <Layout title="Home">
            <div className="d-flex justify-content-center">
                <CareTakersIndex></CareTakersIndex> 
            </div>
        </Layout>
    );
};

export default Home;