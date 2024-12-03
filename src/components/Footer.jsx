// components/Footer.jsx
import React from 'react';
import './../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Dhanraj Bhalala</p>
        </footer>
    );
}

export default Footer;
