import React from 'react';
import "./Footer.css";
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import useLikes from '../hooks/useLikes';
import useComments from '../hooks/useComments';
import useSaveClick from '../hooks/useSaveClick';

const Footer = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const {likes, handleLike} = useLikes();
    const {
        commentsCount,
        commentInput,
        comments,
        isOpenModal: isCommenting,
        setIsOpenModal: setIsCommenting,
        handleAddComment,
        handleCommentInputChange,
    } = useComments();
    const {savedCount, handleSaveClick} = useSaveClick();

    const handleCommentButtonClick = () => {
        setIsCommenting(true);
        openModal();
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
                    <button className='container-button' onClick={handleSaveClick}>
                        <p>
                           {savedCount ? <i class="fa-solid fa-bookmark" style={{ color: '#81b7fd' }}></i> : <i class="fa-regular fa-bookmark"></i>}
                            {savedCount}
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
