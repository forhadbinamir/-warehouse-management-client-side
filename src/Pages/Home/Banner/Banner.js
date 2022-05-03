import React from 'react';
import './Banner.css'
import Typical from 'react-typical'
import Carosel from './Carosel/Carosel';
const Banner = () => {

    return (
        <div>
            <div className='home-header-section md:flex justify-center items-center'>

                <div className='p-8'>
                    <Typical className='text-white text-3xl font-extrabold'
                        style={{ color: 'white' }}
                        steps={['Electronic', 1000, 'Warehouse!', 1500, 'Dealership', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    ></Typical>
                    <h1 className='bg-yellow-300 lg:w-[350px] md:w-[300px]'>All Over The World</h1>
                    <p className='text-gray-300'>Our WMS (Warehouse Management System) solutions aim to manage and optimise all the logistics processes of a distribution platform, whether simple or complex, automated or manual. These solutions offer intricate functional coverage, the result of more than 30 years of warehouse management and support for our customers in various sectors of distribution, logistics service providers and manufacturing?</p>
                    <button className='read-more text-purple-600 font-bold py-2 px-3 rounded hover:bg-black'>Read More</button>
                </div>
                <div className='p-8 shrink-0'>
                    {/* <img className='w-[500px] rounded' src={banner} alt="" /> */}
                    <Carosel></Carosel>
                </div>
            </div>
        </div>
    );
};

export default Banner;