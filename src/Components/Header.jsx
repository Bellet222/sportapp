import React from 'react';
import Peach from '../img/pngwing1.png'
import Theme from '../img/theme.png'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={Peach} alt="" />
                <div>PEACH</div>
            </div>
            <img className='theme' src={Theme} alt="" />
        </div>
    );
};

export default Header;