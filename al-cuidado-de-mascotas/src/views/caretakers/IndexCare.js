import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card';
import CareTakers from '../../components/CareTakers';


const IndexCare = () => {

    const [care, setCare] = useState({});
    const [error, setError] = useState(null);
    useEffect(() => {
        getPersons();
    }, []);

    const getPersons = () => {
        axios.get(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios.json`)
            .then(({ data, status }) => {
                if (data !== null) {
                    //console.log(data);
                    setCare(data);

                }
                else {
                    setError('No existen usuarios');
                }

            })
            .catch((response) => {
                setError(response);
            });
    }

    const showTakers = () => {

        if (!error) {
            const arreglo = Object.entries(care);

            //console.log(arreglo);
            return arreglo.map((item) =>
                <CareTakers id={item[0]} apellido={item[1].apellido} nombre={item[1].nombre}
                    ubicacion={item[1].ubicacion} usuario={item[1].usuario}>

                </CareTakers>)

        }
        else {
            return <h1>No hay datos</h1>;
        }


    }

    return (
        <>
            <div>
                {showTakers()}
            </div>
        </>
    );

};

export default IndexCare;