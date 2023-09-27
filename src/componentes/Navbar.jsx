import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../media/logo-horizontal.png';
import '../hojas-de-estilo/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    //setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 36) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu onClick
    const closeMenu = () => setClick(false)

    return (
 
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                      <Link to={'/card'} onClick={closeMenu}>Carta</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/instalaciones'} onClick={closeMenu}>Instalaciones</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/reseñas'} onClick={closeMenu}>Reseñas</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/ubicacion'} onClick={closeMenu}>Ubicación</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/reserva'} onClick={closeMenu}>Reserva</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;