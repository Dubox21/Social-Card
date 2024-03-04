import React from 'react'; 
import "./Header.css";
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import Menu from "./Menu"; 

function Header() {
    const[isOpenModal, openModal, closeModal] = useModal (false);

    return (
        <header className='header'>
            <div className='container'>
                <div className='container-logo'>
                    <img className="img" src={require("../Assets/sunflower.png")} alt="logo" />
                </div>
                <p className='kanit-regular'><strong>Developer</strong> <br /><span className='fontGrey'>@holajuniors</span></p>
            </div>
            <button onClick={openModal}><i className="fa-solid fa-ellipsis-vertical"></i></button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <Menu/>
      </Modal>
    </header>
    );
}

export default Header;
