import React from 'react';
import "./Menu.css";
import useSharePage from '../hooks/useSharePage';
import useCopyLink from '../hooks/useCopyLink';
import useAddToBookmarks from '../hooks/useAddToBookmarks';
import { useToggleMoreInfo } from '../hooks/useToggleMoreInfo'; // Importa el hook como una función

const Menu = () => {
    const sharePage = useSharePage();
    const { copied, copyLink } = useCopyLink(); // Utiliza el hook directamente como una función
    const { showMoreInfo, toggleMoreInfo } = useToggleMoreInfo(); // Desestructura el objeto retornado por el hook
    const { addedToBookmarks, addToBookmarks } = useAddToBookmarks();

    const handleAddToBookmarks = () => {
        addToBookmarks();
    };

    return (
        <div className='menu'>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <li className='nav-list__link kanit-regular'><a href='#' onClick={sharePage}><i className="fa-solid fa-share-nodes"></i>Compartir</a></li>
                    <hr />
                    <li className='nav-list__link kanit-regular'>
                        <a href="#" onClick={copyLink}>
                            {copied ? <i className="fa-solid fa-check-circle"></i> : <i className="fa-solid fa-copy"></i>}
                            Copiar Enlace
                        </a>
                    </li>
                    <hr />
                    <li className='nav-list__link kanit-regular'><a href="#" onClick={handleAddToBookmarks}>
                        {addedToBookmarks ? <i class="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                        Guardar</a></li>
                    <hr />
                    <li className='nav-list__link kanit-regular'>
                        <a href="#" onClick={toggleMoreInfo}>
                            <i className="fa-solid fa-circle-info"></i>
                            {showMoreInfo ? "Ocultar info" : "Mas info..."}
                        </a>
                        {showMoreInfo && (
                            <div className="more-info">
                                <div className="scrollable-content">
                                    <p> COMPONENTE "SOCIAL CARD" implementado en React.<br /><br />
                                        <strong>Desarrollado por:</strong> <br /> Ambar Dubox </p>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
