import React, { useRef, useState } from 'react';
import './Login.css'
import login from '../../images/login-form/Forms_.png'
import google from '../../images/login-form/google-logo.png'
import github from '../../images/login-form/github-mark.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLoginForm = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }
    let errorText;
    if (error) {
        errorText = <p className='text-red-400'>Error: {error.message}</p>
    }
    return (
        <div className=''>
            <dir>
                <h2 className='text-center'>Electronic Warehouse</h2>
            </dir>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-5'>
                <div className=''>
                    <img src={login} alt="" />
                </div>
                <form onSubmit={handleLoginForm} className='bg-purple-600 login-form border rounded-lg p-5'>
                    <div><h3 className='text-center text-white'>Please Login</h3></div>
                    <label htmlFor="">Your Name</label>
                    <input className='border rounded p-2 mb-2' ref={emailRef} required type="text" placeholder='Name' name="" id="" />
                    <label htmlFor="">Email Address</label>
                    <input className='border rounded p-2 mb-2' ref={emailRef} required type="email" placeholder='Email Address' name="email" id="" />
                    <label htmlFor="">Password</label>
                    <input className='border rounded p-2 mb-2' ref={passwordRef} required type="password" placeholder='Password' name="password" id="" />
                    <input checked type="checkbox" name="" id="" />
                    <label className='m-2 ' htmlFor="">Accept our privacy policy</label>
                    <input className='w-100 bg-slate-300 p-2 rounded font-bold' type="submit" value="Login" />
                    {errorText}
                    <p className='text-end text-white'>Reset Password</p>
                    <div className='flex justify-center items-center'>
                        <div className='w-100 h-[1px] m-2 bg-slate-300'></div>
                        <span className='text-white'>Or</span>
                        <div className='w-100 h-[1px] m-2 bg-slate-300'></div>
                    </div>
                    <div className='text-center mt-2'>
                        <button><img className='w-8 h-8 mr-2' src={google} alt="Google" /></button>
                        <button><img className='w-10 h-10' src={github} alt="Github" /></button>
                    </div>
                    <p className='text-center text-white'>New to Electronic Warehouse <Link to='/register' className='text-yellow-400 font-bold no-underline'>Please Sign-Up</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Login;