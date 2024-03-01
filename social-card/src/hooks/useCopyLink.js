import { useState } from 'react';

const useCopyLink = () => {
    const [copied, setCopied] = useState(false);

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
    };

    return { copied, copyLink };
};

export default useCopyLink;
