import React from 'react';
import NavbarSesion from './NavbarSesion';
import Footer from './Footer';

const Layout = ({ title, children }) => {
    return (
        <div classNameName="container h-100">
            <NavbarSesion title={title} />
            <div classNameName="container">
                {children}
            </div>
            <Footer />
        </div>

    );
}

export default Layout;