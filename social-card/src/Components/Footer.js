import React, { useState } from 'react';
import "./Footer.css";
import Modal from './Modal';
import { useModal } from '../hooks/useModal';

const Footer = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const [likes, setLikes] = useState(0);
    const [commentsCount, setCommentsCount] = useState(0);
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);
    const [isCommenting, setIsCommenting] = useState(false); // Estado para controlar la visibilidad del textarea

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentButtonClick = () => {
        setIsCommenting(true);
        openModal();
    };

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

    return (
        <footer className='container-footer'>
            <hr />
            <div className='container-interaction'>
                <div className='container-interaction__single'>
                    <button className='container-button' onClick={handleCommentButtonClick}>
                        <p>
                            {commentsCount ? <i class="fa-solid fa-message" style={{ color: '#81b7fd' }}></i> : <i class="fa-regular fa-message"></i>}
                            {commentsCount}
                        </p>
                    </button>
                </div>
                <div className='container-interaction__single'>
                    <button className='container-button' onClick={handleLike}>
                        <p>
                            {likes ? <i class="fa-solid fa-heart" style={{ color: '#cf0202' }}></i> : <i class="fa-regular fa-heart"></i>}
                            {likes}
                        </p>
                    </button>
                </div>
                <div className='container-interaction__single'>
                    <button className='container-button'>
                        <p>
                            <i class="fa-regular fa-bookmark"></i>
                            2
                        </p>
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {isCommenting && ( // Mostrar el textarea solo cuando isCommenting es verdadero
                    <div className='container-comments'>
                        <p className='container-comments__title'>Comentarios</p>
                        {comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <p className='comments-container'>{comment}</p>
                            </div>
                        ))}
                        <div className='textarea-container'>
                            <textarea
                                value={commentInput}
                                onChange={handleCommentInputChange}
                                placeholder="Escribe tu comentario aquí."
                            />
                            <button onClick={handleAddComment}><i class="fa-regular fa-paper-plane"></i></button>
                        </div>
                    </div>
                )}
            </Modal>
        </footer>
    )
}

export default Footer;
