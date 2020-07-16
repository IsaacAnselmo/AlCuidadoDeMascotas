import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Profile from '../../components/Profile';
import Dogs from '../../components/Dogs';
import LayoutSesion from './../../components/LayoutSesion';

const ViewCare=()=>{
    return(
        <>
            <LayoutSesion>
                <Profile></Profile>
                <Dogs></Dogs>
            </LayoutSesion>
        </>
    );

};

export default ViewCare;