import { useState } from 'react'

const useLikes = () => {
    const [likes, setLikes] = useState(210);
    const [hasClicked, setHasClicked] = useState(false);

    const handleLike = () => {
        if (!hasClicked) {
            setLikes(likes + 1);
            setHasClicked(true);
        } else {
            setLikes(likes - 1);
            setHasClicked(false);
        }
    };

    return { likes, handleLike };
}

export default useLikes