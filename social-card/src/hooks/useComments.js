import { useState } from 'react';

const useComments = () => {
    const [commentsCount, setCommentsCount] = useState(0);
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleCommentInputChange = (event) => {
        setCommentInput(event.target.value);
    };

    const handleAddComment = () => {
        if (commentInput.trim() !== '') {
            setComments([...comments, commentInput]);
            setCommentInput('');
            setCommentsCount(commentsCount + 1);
        }
    };

    return {
        commentsCount,
        commentInput,
        comments,
        isOpenModal,
        setIsOpenModal,
        handleAddComment,
        handleCommentInputChange,
    };
};

export default useComments;
