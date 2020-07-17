import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link className="navbar-brand" to="/">Al Cuidado de Mascotas</Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><span className="sr-only">(current)</span></Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#"></Link >
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Usuario" />
                    <input className="form-control mr-sm-2" type="search" placeholder="Contraseña" />
                    <Link to={`/user`}>
                        <button className="btn btn-secondary mr-sm-2" type="submit">Login</button>
                    </Link>
                    <Link to={`/persons/signup`}>
                        <button className="btn btn-secondary mr-sm-2" type="submit">Registrarse</button>
                    </Link>
                </form>
            </div>
        </nav>

    );
};

export default Navbar;