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
    const urlUsuario=`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`

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

    const getBreeds=()=>{
        //generando un número aleatorio entre 1 y 5 para obtener cuantos perros tendrá el dueño
        let maximoPerros=parseInt(Math.random()*(6-1)+1);
        let contador=0;
        const arrayMascotas=[];
        //se extraeran las mascotas como máximo lo indicado en maximoPerros
        for(contador=1;contador<=maximoPerros;contador++)
        {
            let id=parseInt(Math.random()*(266-1)+1);//se genera un id aleatorio, la api cataloga las razas con id
            axios.get(`http://api.thedogapi.com/v1/images/search?x-api-key=fd5a464f-91bd-475e-be1e-3bb7486e4272&breed_id=${id}`)
            .then(({data,status})=>{
                if(data.length>0)
                {
                    //solo aquellos id que devuelven datos serán procesados
                    //let mascotaObj={"edad":}
                    let {breeds,url}=data[0];
                    //console.log(url);
                    //console.log(breeds);
                    let mascotaObj={
                        "edad": breeds[0].life_span,
                        "imagen":url,
                        "nombre":breeds[0].bred_for,
                        "raza":breeds[0].name
                    }
                    
                    arrayMascotas.push(mascotaObj);
                    
                }
            })
            .catch(function(error){
                console.log(error);
            });
            
        }

        console.log(arrayMascotas);
    }

 

    const getDogs=()=>{
        console.log(perro);
        if(perro!==undefined)
            return <Dogs mascota={perro}></Dogs>
        else 
            return <button type="submit" className="btn btn-primary" onClick={getBreeds}>Agregar mascota</button>
    }

    return (
        <>
            <LayoutSesion>
                <div className="d-flex .flex-row justify-content-between">
                    <Profile perfil={usuario}></Profile>
                    <Link to={`/caretakers/view/${id}/edit`}>Editar Perfil</Link>
                </div>
                {getDogs()}
                
            </LayoutSesion>
        </>
    );

};

export default ViewCare;