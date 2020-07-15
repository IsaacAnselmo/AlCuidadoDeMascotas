import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Layout from './../../components/Layout';

const NewUser = () => {
    const history = useHistory();

    const [registro, setRegistro] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        password: '',
        dob: 0,
        ubicacion: '',
        esPropietario: false,
        esCuidador: false,

    });

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'nombre':
                setRegistro({
                    ...registro,
                    nombre: event.target.value,
                });
                break;
            case 'apellido':
                setRegistro({
                    ...registro,
                    apellido: event.target.value,
                });
                break;
            case 'usuario':
                setRegistro({
                    ...registro,
                    usuario: event.target.value,
                });
                break;
            case 'password':
                setRegistro({
                    ...registro,
                    password: event.target.value,
                });
                break;
            case 'dob':
                setRegistro({
                    ...registro,
                    dob: event.target.value,
                });
                break;
            case 'ubicacion':
                setRegistro({
                    ...registro,
                    ubicacion: event.target.value,
                });
                break;

        };
    };

    const crearUsuario = () => {
        if (registro.nombre.length > 0 &&
            registro.apellido.length > 0 &&
            registro.usuario.length > 0 &&
            registro.password.length > 5 &&
            registro.ubicacion.length > 0

        ) {
            axios.post('https://al-cuidado-de-mascotas.firebaseio.com/usuarios.json', registro)
                .then((data) => {
                    if (data === 200) {
                        alert("Gracias por registrarte! Bienvenido a Al Cuidado de Mascotas!")
                    } else {
                        alert('Algo salio mal');
                    }
                })
                .catch(() => {
                    // si sigues desarrollando el proyecto, si esta en tus manos repararlo
                    alert('Disculpa, hubo un error. Por favor vuelve a intentarlo.')
                });
        } else {
            alert('No has llenado todos los campos o has llenado de forma incorrecta un campo.')
        }

    }


    return (
        <Layout>
            <div >
                <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre"
                        value={registro.nombre} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido"
                        value={registro.apellido} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                        value={registro.email} onChange={handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="usuario">Nombre de usuario</label>
                    <input type="text" className="form-control" id="usuario"
                        value={registro.usuario} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" className="form-control" id="password"
                        value={registro.password} onChange={handleChange} />
                </div>
                {/* <div className="form-group">
                    <label for="exampleConfirmPassword">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="exampleConfirmPassword"
                        value={registro.title} onChange={handleChange} />
                </div> */}
                <div className="form-group">
                    <label for="ubicacion">Ubicación</label>
                    <input type="text" className="form-control" id="ubicacion"
                        value={registro.ubicacion} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="dob">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="dob"
                        value={registro.dob} onChange={handleChange} />
                </div>
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="examplePropietario" />
                    <label className="form-check-label" htmlfor="exampleCheck1">Es propietario</label>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCuidador" />
                    <label className="form-check-label" hmtlfor="exampleCheck1">¿Desea también ser cuidador?</label>
                </div> */}
                <Link>
                <button onClick={crearUsuario} type="submit" className="btn btn-primary">Registrarse</button>
                </Link>
            </div>
        </Layout>
    );
};

export default NewUser;