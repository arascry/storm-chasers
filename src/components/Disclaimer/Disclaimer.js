import React from 'react';

import Bolt from '../Bolt/mapBolt.svg';

import './Disclaimer.css';
import disclaimerText from './disclaimer.png';

const Disclaimer = ({ handleEnterClick }) => {
    return (
        <div className='Disclaimer-Container'>
            <div>
                <img id='title' src={disclaimerText} alt="disclaimer" />
                <p id='subtext'>TWI<img src={Bolt} />TER MAY CAUSE TOO MUCH FUN.</p>
            </div>
            <button onClick={() => handleEnterClick()}>
                ENTER
            </button>
        </div>
    );
}

export default Disclaimer;