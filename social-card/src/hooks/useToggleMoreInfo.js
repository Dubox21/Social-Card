import { useState } from 'react';

export const useToggleMoreInfo = () => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    return { showMoreInfo, toggleMoreInfo };
};
