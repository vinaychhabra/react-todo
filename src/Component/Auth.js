import React, { useState } from 'react';
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Auth() {
    const [formShow, setFormShow] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    const handleLogin = () => {
        setFormShow(prevState => !prevState);
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (password && email){
            authSignup(email,password)
        }
    };



    const authSignup = async () => {
        try {
        var result = await createUserWithEmailAndPassword(auth,email,password);
        console.log(result);
        }
        catch(err){
            console.error(err.code);
            setErrorMessage(err.code)
            const timer = setTimeout(() => {
                setErrorMessage('')
            }, 5000);
        }
    }
    return (
        <>
            <button className='btn btn-login' onClick={()=>handleLogin()}>
                Login/Sign Up
            </button>
            <div className='login-container' style={{ display: formShow ? 'block' : 'none' }}>
                <label className='error-message' style={{display : errorMessage ?'block':'none' }}>{errorMessage}</label>
                <form className='login-form' onSubmit={handleForm}>
                    <label>Email</label>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} />
                    <button className='btn login-btn' type="submit">
                        Login/Signup
                    </button>
                </form>
            </div>
        </>
    );
}

export default Auth;
