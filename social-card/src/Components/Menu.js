import React, { useState } from 'react';
import "./Menu.css";

const Menu = () => {
    const [copied, setCopied] = useState(false);

    const sharePage = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).then(() => {
                console.log('Enlace compartido correctamente');
            }).catch((error) => {
                console.error('Error al compartir el enlace', error);
            });
        } else {
            console.warn('La API de Web Share no está soportada en este navegador.');
        }
    }

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopied(true); // Marca como copiado cuando la operación es exitosa
                setTimeout(() => setCopied(false), 2000); // Reinicia el estado después de 2 segundos
            })
            .catch((error) => {
                console.error('Error al copiar el enlace', error);
            });
    }

    const addToBookmarks = () => {
        // Proporcionar instrucciones al usuario para que agregue la página a los marcadores manualmente
        alert('Por favor, utiliza el atajo de teclado o la opción de menú de tu navegador para agregar esta página a los marcadores.');
    }

    return (
        <div className='menu'>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-list__link kanit-regular'><a href='#' onClick={sharePage}><i class="fa-solid fa-share-nodes"></i>Compartir</a></li>
                    <hr />
                    <li className='nav-list__link kanit-regular'>
                        <a href="#" onClick={copyLink}>
                            {copied ? <i className="fa-solid fa-check-circle"></i> : <i class="fa-solid fa-copy"></i>} {/* Mostrar el icono de verificación si se ha copiado, de lo contrario, el icono de copiar */}
                            Copiar Enlace
                        </a>
                    </li>
                    <hr />
                    <li className='nav-list__link kanit-regular'><a href="#" onClick={addToBookmarks}>Guardar</a></li>
                    <hr />
                    <li className='nav-list__link kanit-regular'><a href="#">Mas info</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;