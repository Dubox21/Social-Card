import React, { useState } from 'react'; 
import "./Header.css";
import Menu from "./Menu"; 

function Header({ toggleMenu }) {
    // const [menuVisible, setMenuVisible] = useState(false);

    // const toggleMenu = () => {
    //     setMenuVisible(!menuVisible);
    // };

    return (
        <div className='header'>
            <div className='container'>
                <div className='container-logo'>
                    <img className="img" src={require("../Assets/sunflower.png")} alt="logo" />
                </div>
                <p className='kanit-regular'><strong>Developer</strong> <br /><span className='fontGrey'>@holajuniors</span></p>
            </div>
            <button className='menu-open' onClick={toggleMenu}><i className="fa-solid fa-ellipsis-vertical"></i></button>
    </div>
    );
}

export default Header;
