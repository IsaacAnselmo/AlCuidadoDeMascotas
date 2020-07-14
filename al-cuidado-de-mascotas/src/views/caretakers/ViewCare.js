import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import Profile from '../../components/Profile';
import Dogs from '../../components/Dogs';

const ViewCare=()=>{
    return(
        <>
            <Profile></Profile>
            <Dogs></Dogs>

        </>
    );

};

export default ViewCare;