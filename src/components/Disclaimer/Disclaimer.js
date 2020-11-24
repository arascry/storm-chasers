import React from 'react';

import './Disclaimer.css';

const Disclaimer = ({ handleEnterClick }) => {
    return (
        <div className='Disclaimer-Container'>
            <div>
                <h1>DISCLAIMER</h1>
            </div>
            <div>
                TWI⚡TER MAY CAUSE TOO MUCH FUN.
            </div>
            <button onClick={() => handleEnterClick()}>
                ENTER
            </button>
        </div>
    );
}

export default Disclaimer;