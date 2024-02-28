import React from 'react';
import "./Content.css";

const Content = () => {
  return (
    <div className='container-content'>
        <div className='container-img'>
            <img src={require("../Assets/web-design.jpg")} alt="imagen pc"/>
        </div>
        <p className='kanit-regular'>Estos desafíos han sido creados especialmente para mejorar tus habilidades y prepararte para el mundo real.</p>
    </div>
  )
}

export default Content