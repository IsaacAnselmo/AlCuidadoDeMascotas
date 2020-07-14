import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios'

const Agendar=()=>{
    return(
        <>
            <label for="start">Start date:</label>

            <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31"></input>
        </>
    );
};

export default Agendar;