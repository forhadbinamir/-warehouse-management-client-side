import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-900 p-5'>
            <div className='border grid grid-cols-4 gap-4 '>
                <div className="footer-items border grid grid-cols-4"><h1>Electronic warehouse Site</h1>
                    <p>But i must explain to you how all this mistaken idea pleasure and praising pain was born and i will give you.</p>
                </div>
                <div className="footer-items border grid grid-cols-2">Navigation</div>
                <div className="footer-items border grid grid-cols-2">Our Service</div>
                <div className="footer-items border  grid-cols-4" >Buy Now</div>
            </div>
            <div className='copyRight-area flex justify-between items-center'>
                <p><span>Electronic warehouse</span>Made by react js & node js</p>
                <p>CopyRight &copy; 2022 Electronic warehouse By <span>Forhad Bin Amir</span> </p>
            </div>
        </div>
    );
};

export default Footer;