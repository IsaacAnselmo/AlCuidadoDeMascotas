import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import LayoutSesion from './../../components/LayoutSesion';

const EditProfile = () => {

    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`)
            .then(({ data, status }) => {
                if (data !== null) {
                    setUsuario(data);
                    console.log(data)
                }
                else {
                    setError('No existe ese usuario');
                }
            })
            .catch((response) => {
                setError(response);
            });
    }

    const [edit, SetEdit] = useState({
        defaultValues: {
            nombre: getUser.nombre,
            apellido: getUser.apellido,
            usuario: getUser.usuario,
            email: getUser.email,
            password: getUser.password,
            dob: getUser.dob,
            ubicacion: getUser.ubicacion,
            esCuidador: getUser.esCuidador,
            esPropietario: getUser.esPropietario,
            mascota: getUser.mascota,
            metodoPago: "Efectivo"
        }
    })

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'nombre':
                SetEdit({
                    ...edit,
                    nombre: event.target.value,
                });
                break;
            case 'apellido':
                SetEdit({
                    ...edit,
                    apellido: event.target.value,
                });
                break;
            case 'usuario':
                SetEdit({
                    ...edit,
                    usuario: event.target.value,
                });
                break;
            case 'email':
                SetEdit({
                    ...edit,
                    email: event.target.value,
                });
                break;
            case 'password':
                SetEdit({
                    ...edit,
                    password: event.target.value,
                });
                break;
            case 'dob':
                SetEdit({
                    ...edit,
                    dob: event.target.value,
                });
                break;
            case 'ubicacion':
                SetEdit({
                    ...edit,
                    ubicacion: event.target.value,
                });
                break;

        };
    };

    const editarPerfil = () => {
        if (edit.nombre.length > 0 ||
            edit.apellido.length > 0 ||
            edit.usuario.length > 0 ||
            edit.usuario.length > 0 ||
            edit.password.length > 5 ||
            edit.ubicacion.length > 0


        ) {
            axios.patch(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`, edit)
                .then((data) => {
                    alert('Se guardaron los cambios realizados.');

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const deleteUser = () => {
        if (!window.confirm('Estas seguro que deseas eliminar la cuenta?')) {
            return false
        } else {
            axios.delete(`https://al-cuidado-de-mascotas.firebaseio.com/usuarios/${id}.json`)
                .then(() => {
                    history.push('/');
                })
                .catch(({ response }) => {
                    alert(response);
                    history.push('/');
                });
        }
    }

    return (
        <LayoutSesion>
            <h4 className="mx-auto mt-3">Configurar Perfil</h4>
            <h5>{id}</h5>
            <div >
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre"
                        value={edit.nombre} onChange={handleChange} />
                </div>
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido"
                        value={edit.apellido} onChange={handleChange} />
                </div>
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="abc@example.com" aria-describedby="emailHelp"
                        value={edit.email} onChange={handleChange} />
                </div>
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="usuario">Nombre de usuario</label>
                    <input type="text" className="form-control" id="usuario"
                        value={edit.usuario} onChange={handleChange} />
                </div>
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" className="form-control" id="password"
                        value={edit.password} onChange={handleChange} />
                </div>
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="ubicacion">Ubicación</label>
                    <input type="text" className="form-control" id="ubicacion" placeholder="Ciudad de Mexico"
                        value={edit.ubicacion} onChange={handleChange} />
                </div>
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="dob">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="dob"
                        value={edit.dob} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-around mb-3">
                    <Link to={`/caretakers/view/${id}`}>
                        <button type="submit" className="btn btn-primary">Regresar</button>
                    </Link>
                    <button onClick={editarPerfil} type="button" className="btn btn-primary">Guardar Cambios</button>
                    <button onClick={deleteUser} type="button" className="btn btn-danger">Eliminar Cuenta</button>

                </div>
            </div>
        </LayoutSesion>
    );



}

export default EditProfile;