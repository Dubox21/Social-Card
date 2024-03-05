import { useState } from 'react';

const useSaveClick = () => {
    const [savedCount, setSavedCount] = useState(0);
    const [hasClicked, setHasClicked] = useState(false); // Nuevo estado para verificar si se ha dado clic

    const handleSaveClick = () => {
        if (!hasClicked) {
            setSavedCount(savedCount + 1);
            setHasClicked(true); // Actualiza el estado para indicar que se ha dado clic
        } else {
            setSavedCount(savedCount - 1);
            setHasClicked(false);
        }
    };

    return { savedCount, handleSaveClick };
}

export default useSaveClick;
