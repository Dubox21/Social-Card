import {useState} from 'react'

const useLikes = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return {likes, handleLike};
}

export default useLikes