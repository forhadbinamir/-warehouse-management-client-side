import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-900 text-gray-300 p-5'>
            <div className='grid grid-cols-[1fr_200px_200px_200px] gap-4 '>
                <div><h5 className='text-white'>Electronic Warehouse WebSite</h5>
                    <p>Develop by Forhad bin  amir<br />Email: forhadbinamir@gmail.com <br />Address: Online remote Work from anywhere</p>

                </div>
                <div>
                    <ul>
                        <h5>Navigation</h5>
                        <li>Home</li>
                        <li>Add Supplier</li>
                        <li>M. Supplier</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <h5>Out Services</h5>
                        <li>Cargo</li>
                        <li>Door to Door</li>
                        <li>Storage</li>
                        <li>packaging</li>
                    </ul>
                </div>
                <div >
                    <ul>
                        <h5>Buy Now</h5>
                        <li>Master card</li>
                        <li>Visa Card</li>
                        <li>Us express</li>
                        <li>Online</li>
                    </ul>
                </div>
            </div>
            <div className='copyRight-area flex justify-between items-center text-gray-600 pt-3'>
                <p><span>Electronic warehouse </span> Made by react js & node js express framework</p>
                <p>CopyRight &copy; 2022 Electronic warehouse By <span>Forhad Bin Amir</span> </p>
            </div>
        </div>
    );
};

export default Footer;