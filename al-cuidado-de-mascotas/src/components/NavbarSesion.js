import React from 'react';
import { Link } from 'react-router-dom';
const NavbarSesion = ({ title }) => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link className="navbar-brand" to="/">Mi super app de tareas</Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <Link className="nav-link" to="/">Inicio <span classNameName="sr-only">(current)</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/tasks/Link dd">Agregar tarea</Link>
        //             </li>
        //         </ul>
        //     </div>
        //     <h2>{title}</h2>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Al Cuidado de Mascotas</Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Mi Perfil<span className="sr-only">(current)</span></Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Cuidadores</Link >
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cerrar Sesión</button>
                </form>
            </div>
        </nav>

    );
};

export default NavbarSesion;