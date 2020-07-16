import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Profile from '../../components/Profile';
import Dogs from '../../components/Dogs';
import LayoutSesion from './../../components/LayoutSesion';

const ViewCare = () => {

    const { id } = useParams();
    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState({});
    const [perro, setPerro] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`)
            .then(({ data, status }) => {
                if (data !== null) {
                    setUsuario(data);
                    setPerro(data.mascota);

                }
                else {
                    setError('No existe ese usuario');
                }
            })
            .catch((response) => {
                setError(response);
            });
    }


    return (
        <>
            <LayoutSesion>
                <div className="d-flex .flex-row justify-content-between">
                    <Profile perfil={usuario}></Profile>
                    <Link to={`/caretakers/view/${id}/edit`}>Editar Perfil</Link>
                </div>

                <Dogs mascota={perro}></Dogs>
            </LayoutSesion>
        </>
    );

};

export default ViewCare;