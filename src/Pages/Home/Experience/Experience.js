import React from 'react';
import image from '../../../images/experience/exprience.png'
const Experience = () => {
    return (
        <div className='bg-emerald-500'>
            <div className='container flex lg:flex-row md:flex-col sm:flex-col justify-center items-center p-[50px] '>
                <div className="left-side">
                    <img className='' src={image} alt="" />
                </div>
                <div className="right-side pl-20">
                    <h1 className='text-6xl text-purple-600'>Experience Assure in Action</h1>
                    <button className='read-more text-purple-600 font-bold py-2 px-3 rounded hover:bg-black'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Experience;