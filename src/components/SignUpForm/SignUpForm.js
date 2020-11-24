import React from 'react';

import './SignUpForm.css';

const SignUpForm = () => {
    return (
        <div className='Sign-Up-Fields'>
            <form>
                <br />
                <br />
                <p>STAY UPDATED</p>
                <input type='text' id='account' placeholder='User Name' />
                <br />
                <br />
                <input type='text' id='account' placeholder='City, State' />
                <br />
                <br />
                <input type='text' id='account' placeholder='Email' />
                <br />
                <br />
                <p>ALERT ME ABOUT...</p>
                <input type='checkbox' />
                <label>&nbsp;&nbsp;Tornados within 25 miles</label>
                <br />
                <input type='checkbox' />
                <label>&nbsp;&nbsp;Tornados within 100 miles</label>
                <br />
                <input type='checkbox' />
                <label>&nbsp;&nbsp;Tornados within the U.S.</label>
                <br />
                <br />
                <input id='sign-up' type='submit' value='Sign Up' />
                <br />
                <br />
            </form>
        </div>
    )
}

export default SignUpForm;