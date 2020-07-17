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
    const urlUsuario = `https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`

    useEffect(() => {
        getUser();

    }, []);

    const getUser = () => {
        axios.get(urlUsuario)
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

    const getBreeds = () => {
        //generando un número aleatorio entre 1 y 5 para obtener cuantos perros tendrá el dueño
        console.log(`getBreeds`);
        let maximoPerros = parseInt(Math.random() * (6 - 1) + 1);
        let contador = 0;
        const arrayMascotas = [];
        let continuar = false;
        //se extraeran las mascotas como máximo lo indicado en maximoPerros
        /*axios.patch(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`,{mascota:[]})
        .then(()=>{
            continuar=true;

        });*/


        for (contador = 1; contador <= maximoPerros; contador++) {

            let idMascota = parseInt(Math.random() * (266 - 1) + 1);//se genera un id aleatorio, la api cataloga las razas con id
            axios.get(`http://api.thedogapi.com/v1/images/search?x-api-key=fd5a464f-91bd-475e-be1e-3bb7486e4272&breed_id=${idMascota}`)
                .then(({ data, status }) => {

                    if (data.length > 0) {

                        //solo aquellos id que devuelven datos serán procesados
                        //let mascotaObj={"edad":}
                        let { breeds, url } = data[0];
                        //console.log(url);
                        //console.log(breeds);
                        const mascotaObj = {
                            "edad": breeds[0].life_span,
                            "imagen": url,
                            "nombre": breeds[0].bred_for,
                            "raza": breeds[0].name
                        }
                        /*console.log(`contador ${contador}`) ;
                        axios.patch(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}/mascota/${contador}.json`,{  "edad": breeds[0].life_span,
                        "imagen":url,
                        "nombre":breeds[0].bred_for,
                        "raza":breeds[0].name}) 
                        .then(()=>{console.log(`se ejecuto`)});*/
                        arrayMascotas.push(mascotaObj);

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        console.log(arrayMascotas);
        axios.patch(urlUsuario, { mascotas: [arrayMascotas] })
            .then(({ data, status }) => {
                console.log(data);
            })


    }



    const getDogs = () => {
        //console.log(perro);
        if (perro !== undefined)
            return <Dogs mascota={perro}></Dogs>
        else
            return <button className="btn btn-primary" onClick={getBreeds}>Agregar mascota</button>
    }

    return (
        <>
            <LayoutSesion>
            <div className="d-flex justify-content-between mt-4">
                <Profile perfil={usuario}></Profile>
                <Link to={`/caretakers/view/${id}/edit`} className="mr-3">Editar Perfil</Link>
            </div>
            <div className="mt-3 mb-4">
                {getDogs()}
                </div>
            </LayoutSesion>
        </>
    );

};

export default ViewCare;