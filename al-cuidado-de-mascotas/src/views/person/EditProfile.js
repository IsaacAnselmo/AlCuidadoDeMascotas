import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import LayoutSesion from './../../components/LayoutSesion';

const EditProfile = () => {

    const [edit, SetEdit] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        password: '',
        dob: 0,
        ubicacion: '',

    });

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
        if (edit.nombre.length > 0 &&
            edit.apellido.length > 0 &&
            edit.usuario.length > 0 &&
            edit.usuario.length > 0 &&
            edit.password.length > 5 &&
            edit.ubicacion.length > 0
            // registro.dob. > 0

        ) {
            axios.patch('https://al-cuidado-de-mascotas.firebaseio.com/usuarios.json', edit)
                .then((data) => {
                    alert("Gracias por registrarte! Bienvenido a Al Cuidado de Mascotas!");
                    window.location.href = "/perfil";

                })
                .catch(() => {
                    alert('Disculpa, hubo un error. Por favor vuelve a intentarlo.')
                });
        } else {
            alert('No has llenado todos los campos o has llenado de forma incorrecta un campo.')
        }

    }


    return (
        <LayoutSesion>
            <h4 className="mx-auto">Edita tu Perfil</h4>
            <div >
                <div className="form-group w-50 mx-auto">
                    <label htmlFor="nombre">Imagen</label>
                    <input type="image" className="form-control" id="nombre"
                        value={edit.nombre} onChange={handleChange} />
                </div>
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
                <Link to="/caretakers/view">
                <button type="submit" className="btn btn-primary">Regresar</button>
                </Link>
                <button onClick={editarPerfil} type="submit" className="btn btn-primary">Guardar Cambios</button>
                
            </div>
        </LayoutSesion>
    );



}

export default EditProfile;