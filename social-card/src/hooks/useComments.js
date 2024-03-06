import { useState } from 'react';

const useComments = () => {
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [fixedComments] = useState(['¡Gracias por compartir esto!', '¡Felicidades por completar el desafío de Holajuniors!']); // Comentarios fijados
    const [newCommentsAdded, setNewCommentsAdded] = useState(false); // Nuevo estado para rastrear nuevos comentarios

    const handleCommentInputChange = (event) => {
        setCommentInput(event.target.value);
    };

    const handleAddComment = () => {
        if (commentInput.trim() !== '') {
            setComments([...comments, commentInput]);
            setCommentInput('');
            setNewCommentsAdded(true); // Marcar que se han agregado nuevos comentarios
        }
    };

    const openModal = () => {
        setIsOpenModal(true);
        setNewCommentsAdded(false); // Al abrir el modal, se establece que no hay nuevos comentarios
    };

    const closeAndResetModal = () => {
        setIsOpenModal(false);
        setCommentInput('');
    };

    const totalCommentsCount = comments.length + fixedComments.length;

    return {
        commentsCount: totalCommentsCount,
        commentInput,
        comments: [...fixedComments, ...comments],
        isOpenModal,
        newCommentsAdded,
        setIsOpenModal,
        handleAddComment,
        handleCommentInputChange,
        openModal,
        closeAndResetModal,
    };
};

export default useComments;
