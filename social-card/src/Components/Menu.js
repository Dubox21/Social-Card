import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-list__link'><a href='#'>Compartir</a></li>
                    <li className='nav-list__link'><a href="#">Copiar Enlace</a></li>
                    <li className='nav-list__link'><a href="#">Guardar</a></li>
                    <li className='nav-list__link'><a href="#">Mas info</a></li>
                </ul>
            </nav>
            {/* <button className='close-button' onClick={toggleMenu}>Cerrar menú</button> */}
        </div>
    )
}

export default Menu