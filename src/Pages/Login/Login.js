import React, { useRef, useState } from 'react';
import './Login.css'
import login from '../../images/login-form/Forms_.png'
import google from '../../images/login-form/google-logo.png'
import github from '../../images/login-form/github-mark.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
import Loading from '../../Hooks/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLoginForm = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const from = location.state?.from?.pathname || "/";
    if (user || googleUser) {
        navigate(from, { replace: true });
    } else if (gitUser) {
        navigate(from, { replace: true });
    }
    let errorText;
    if (error || googleError) {
        errorText = <p className='text-red-400'>Error: {error.message}</p>
    } else if (gitError) {
        errorText = <p className='text-red-400'>Error: {error.message}</p>
    }
    if (loading || googleLoading) {
        return <Loading></Loading>
    } else if (gitLoading) {
        return <Loading></Loading>
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            toast('enter your email.')
        } else {
            await sendPasswordResetEmail(email)
            toast('send email')
        }

    }
    return (
        <div>
            <ToastContainer />

            <dir>
                <h2 className='text-center'>Electronic Warehouse</h2>
            </dir>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-5'>
                <div className=''>
                    <img src={login} alt="" />
                </div>
                <form onSubmit={handleLoginForm} className='bg-purple-600 login-form border rounded-lg p-5'>
                    <div><h3 className='text-center text-white'>Please Login</h3></div>
                    <label htmlFor="">Email Address</label>
                    <input className='border rounded p-2 mb-2' ref={emailRef} required type="email" placeholder='Email Address' name="email" />
                    <label htmlFor="">Password</label>
                    <input className='border rounded p-2 mb-2' ref={passwordRef} required type="password" placeholder='Password' name="password" />
                    <input className='w-100 bg-slate-300 mt-3 p-2 rounded font-bold' type="submit" value="Login" />
                    {errorText}
                    <p onClick={handleResetPassword} className='text-end cursor-pointer hover:text-yellow-400'>Reset Password</p>
                    <div className='flex justify-center items-center'>
                        <div className='w-100 h-[1px] m-2 bg-slate-300'></div>
                        <span className='text-white'>Or</span>
                        <div className='w-100 h-[1px] m-2 bg-slate-300'></div>
                    </div>
                    <div className='text-center mt-2'>
                        <button className='flex w-5/12 mb-2 justify-center items-center mx-auto bg-white p-2 rounded ' onClick={() => signInWithGoogle()}><img className='w-8 h-8 mr-2' src={google} alt="Google" />Login With Google</button>
                        <button className='flex w-5/12 mb-2 justify-center items-center mx-auto bg-white p-2 rounded ' onClick={() => signInWithGithub()}><img className='w-8 h-8' src={github} alt="Github" />Login With Github </button>
                    </div>
                    <p className='text-center text-white'>New to Electronic Warehouse <Link to='/register' className='text-yellow-400 font-bold no-underline'>Please Sign-Up</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;