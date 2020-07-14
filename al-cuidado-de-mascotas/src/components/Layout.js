import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ title, children }) => {
    return (
        <div classNameName="container h-100">
            <Navbar title={title} />
            <div classNameName="container">
                {children}
            </div>
            <Footer />
        </div>

    );
}

export default Layout;