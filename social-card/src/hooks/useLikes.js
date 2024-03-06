import { useState } from 'react';

const useLikes = () => {
    const [likes, setLikes] = useState(999);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    return { likes, isLiked, handleLike };
}

export default useLikes;
