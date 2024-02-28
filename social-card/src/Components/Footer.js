import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='container-footer'>
            <hr />
            <div className='container-interaction'>
                <div className='container-interaction__single'>
                    <p>
                    <i class="fa-regular fa-message"></i> 29
                    </p>
                </div>
                <div className='container-interaction__single'>
                    <p>
                        <i class="fa-regular fa-heart"></i> 3459
                    </p>
                </div>
                <div className='container-interaction__single'>
                    <p><i class="fa-regular fa-bookmark"></i> 2
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer