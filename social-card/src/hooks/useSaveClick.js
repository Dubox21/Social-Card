import { useState } from 'react';

const useSaveClick = () => {
    const [savedCount, setSavedCount] = useState(50);
    const [isClicked, setIsClicked] = useState(false); // Nuevo estado para verificar si se ha dado click

    const handleSaveClick = () => {
        if (!isClicked) {
            setSavedCount(savedCount + 1);
            setIsClicked(true); // Actualiza el estado para indicar que se ha dado click
        } else {
            setSavedCount(savedCount - 1);
            setIsClicked(false);
        }
    };

    return { savedCount, isClicked, handleSaveClick };
}

export default useSaveClick;
