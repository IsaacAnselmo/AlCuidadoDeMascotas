import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Layout from './../../components/Layout';

const NewUser = () => {

    const [registro, setRegistro] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        password: '',
        dob: 0,
        ubicacion: '',
        esPropietario: false,
        esCuidador: false,
        mascota: [{
            imagen: '',
            nombre: '',
            raza: '',
            edad: '',
            peso: ''
        }],
        metodoPago: "Efectivo"

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
            case 'email':
                setRegistro({
                    ...registro,
                    email: event.target.value,
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
            case 'esPropietario':
                setRegistro({
                    ...registro,
                    esPropietario: event.target.value,
                });
                break;
            case 'esCuidador':
                setRegistro({
                    ...registro,
                    esCuidador: event.target.value,
                });
                break;
            case 'mascota':
                setRegistro({
                    ...registro,
                    mascota: event.target.value,
                });
                break;
            case 'metodoPago':
                setRegistro({
                    ...registro,
                    metodoPago: event.target.value,
                });
                break;
        };
    };

    const crearUsuario = () => {
        if (registro.nombre.length > 0 &&
            registro.apellido.length > 0 &&
            registro.usuario.length > 0 &&
            registro.usuario.length > 0 &&
            registro.password.length > 5 &&
            registro.ubicacion.length > 0 
            // registro.dob. > 0

        ) {
            axios.post('https://al-cuidado-de-mascotas.firebaseio.com/usuarios.json', registro)
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
        <Layout>
            <h3>Registrate</h3>
            <div >
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre"
                        value={registro.nombre} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" id="apellido"
                        value={registro.apellido} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="abc@example.com" aria-describedby="emailHelp"
                        value={registro.email} onChange={handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="usuario">Nombre de usuario</label>
                    <input type="text" className="form-control" id="usuario"
                        value={registro.usuario} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" className="form-control" id="password"
                        value={registro.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicación</label>
                    <input type="text" className="form-control" id="ubicacion" placeholder="Ciudad de Mexico"
                        value={registro.ubicacion} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="dob" 
                        value={registro.dob} onChange={handleChange} />
                </div>
                
                <button onClick={crearUsuario} type="submit" className="btn btn-primary">Registrarse</button>
            </div>
        </Layout>
    );
};

export default NewUser;