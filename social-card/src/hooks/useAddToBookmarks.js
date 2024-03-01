import { useState } from 'react';

const useAddToBookmarks = () => {
    const [addedToBookmarks, setAddedToBookmarks] = useState(false);

    const addToBookmarks = () => {
        if (addedToBookmarks) {
            // Si ya está en marcadores, quitarlo
            // Aquí puedes implementar la lógica para quitarlo de los marcadores
            // Por ejemplo, puedes usar localStorage para almacenar los marcadores y eliminar el elemento correspondiente
            // localStorage.removeItem('bookmark_key');
            setAddedToBookmarks(false);
        } else {
            // Si no está en marcadores, agregarlo
            if (window.sidebar && window.sidebar.addPanel) {
                window.sidebar.addPanel(document.title, window.location.href, ''); // Firefox
            } else if (window.external && ('AddFavorite' in window.external)) {
                window.external.AddFavorite(window.location.href, document.title); // Internet Explorer
            } else {
                alert('Por favor, utiliza el atajo de teclado (ctrl+d) o la opción de menú de tu navegador para agregar esta página a los marcadores.');
            }
            setAddedToBookmarks(true);
        }
    };

    return { addedToBookmarks, addToBookmarks };
};

export default useAddToBookmarks;

