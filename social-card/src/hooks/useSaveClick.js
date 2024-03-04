import {useState} from 'react';

const useSaveClick = () => {
    const [savedCount, setSavedCount] = useState(0);

    const handleSaveClick = () => {
        setSavedCount(savedCount + 1);
    };
    return {savedCount, handleSaveClick}
}

export default useSaveClick;