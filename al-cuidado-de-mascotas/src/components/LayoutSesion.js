import React from 'react';
import NavbarSesion from './NavbarSesion';
import Footer from './Footer';

const LayoutSesion = ({ title, children }) => {
    return (
        <div className="container h-100">
            <NavbarSesion title={title} />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>

    );
}

export default LayoutSesion;