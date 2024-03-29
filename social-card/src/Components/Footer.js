import React, { useState } from 'react';
import "./Footer.css";
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import useLikes from '../hooks/useLikes';
import useComments from '../hooks/useComments';
import useSaveClick from '../hooks/useSaveClick';

const Footer = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const { likes, isLiked, handleLike } = useLikes();
    const {
        commentsCount,
        commentInput,
        comments,
        isOpenModal: isCommenting,
        setIsOpenModal: setIsCommenting,
        newCommentsAdded,
        handleAddComment,
        handleCommentInputChange,
    } = useComments();
    const { savedCount, isClicked, handleSaveClick } = useSaveClick();

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
                            {newCommentsAdded ? <i className="fa-solid fa-message" style={{ color: '#81b7fd' }}></i> : <i className="fa-regular fa-message"></i>}
                            {commentsCount}
                        </p>
                    </button>
                </div>
                <div className='container-interaction__single'>
                    <button className='container-button' onClick={handleLike}>
                        <p>
                            {isLiked ? <i className="fa-solid fa-heart" style={{ color: '#cf0202' }}></i> : <i className="fa-regular fa-heart"></i>}
                            {likes}
                        </p>
                    </button>
                </div>
                <div className='container-interaction__single'>
                    <button className='container-button' onClick={handleSaveClick}>
                        <p>
                            {isClicked ? <i className="fa-solid fa-bookmark" style={{ color: '#81b7fd' }}></i> : <i className="fa-regular fa-bookmark"></i>}
                            {savedCount}
                        </p>
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {isCommenting && ( 
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
                            <button onClick={handleAddComment}><i className="fa-regular fa-paper-plane"></i></button>
                        </div>
                    </div>
                )}
            </Modal>
        </footer>
    )
}

export default Footer;
