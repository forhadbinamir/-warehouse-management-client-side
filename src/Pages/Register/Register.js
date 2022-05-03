import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../images/login-form/switches_.png'
import google from '../../images/login-form/google-logo.png'
import github from '../../images/login-form/github-mark.png'
const Register = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const addressRef = useRef()



    const handleRegisterForm = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const address = event.target.address.value;

        console.log(name, email, password, address)
    }
    return (
        <div className=''>
            <dir>
                <h2 className='text-center'>Electronic Warehouse</h2>
            </dir>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-5'>
                <div className=''>
                    <img src={signup} alt="" />
                </div>
                <form onSubmit={handleRegisterForm} className='bg-purple-600 login-form border rounded-lg p-5'>
                    <div><h3 className='text-center text-white'>Please Sign-Up</h3></div>
                    <label htmlFor="name">Your Name</label>
                    <input className='border rounded p-2 mb-2' ref={nameRef} required type="text" placeholder='Name' name="name" id="" />
                    <label htmlFor="">Email Address</label>
                    <input className='border rounded p-2 mb-2' ref={emailRef} required type="email" placeholder='Email Address' name="email" id="" />
                    <label htmlFor="">Password</label>
                    <input className='border rounded p-2 mb-2' ref={passwordRef} required type="password" placeholder='Password' name="password" id="" />
                    <label htmlFor="">Address</label>
                    <input className='border rounded p-2 mb-2' ref={addressRef} required type="text" placeholder='Address' name="address" id="" />
                    <input type="checkbox" name="checkbox" id="" />
                    <label className='m-2 ' htmlFor="">Accept our privacy policy</label>
                    <input className='w-100 bg-slate-300 p-2 rounded font-bold' type="submit" value="SignUp" />
                    <div className='flex justify-center items-center mt-2'>
                        <div className='w-100 h-[1px] m-2 bg-slate-300'></div>
                        <span className='text-white'>Or</span>
                        <div className='w-100 h-[1px] m-2 bg-slate-300'></div>
                    </div>
                    <div className='text-center mt-2'>
                        <button><img className='w-8 h-8 mr-2' src={google} alt="Google" /></button>
                        <button><img className='w-10 h-10' src={github} alt="Github" /></button>
                    </div>
                    <p className='text-center text-white'>Already have an account <Link to='/login' className='text-yellow-400 font-bold no-underline'>Please Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Register;