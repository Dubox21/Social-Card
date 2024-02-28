import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='container-logo'>
                    <img class="img" src={require("../Assets/sunflower.png")} alt="logo" />
                </div>
                <p className='kanit-regular'><strong>Developer</strong> <br/><span className='fontGrey'>@holajuniors</span></p>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    )
}

export default Header