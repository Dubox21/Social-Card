import { useState } from 'react';

const useSharePage = () => {
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
    };

    return sharePage;
};

export default useSharePage;