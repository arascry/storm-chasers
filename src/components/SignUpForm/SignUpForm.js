import React from 'react';

const SignUpForm = () => {
    return (
        <div className='Sign-Up-Fields'>
            <p>STAY UPDATED</p>
            <form>
                <textarea value='username' placeholder='User Name'></textarea>
                <br />
                <textarea value='location' placeholder='City, State'></textarea>
                <br />
                <textarea value='email' placeholder='Email Address'></textarea>
            </form>
        </div>
    )
}

export default SignUpForm;