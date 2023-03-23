import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

const Button = (props) => {
    return (
        <>
            <Link to="./Training">
                <button className='all_btn'>
                {props.body}
                </button></Link>
        </>
    );
};



export default Button;