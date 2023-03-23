import React from 'react';
import arrow from '../img/arrow.png'

const Tabs = (props) => {
    return (
        <div className='tabs'>
            <div className='tab'>
                <p>{props.title}</p>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
};

export default Tabs;