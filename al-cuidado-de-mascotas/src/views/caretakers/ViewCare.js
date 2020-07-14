import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Profile from '../../components/Profile';
import Dogs from '../../components/Dogs';
import Layout from './../../components/Layout';

const ViewCare=()=>{
    return(
        <>
            <Layout>
                <Profile></Profile>
                <Dogs></Dogs>
            </Layout>
        </>
    );

};

export default ViewCare;