import React from 'react';
import './Article.css'
import signature from '../../../images/article/signature.png'
const Article = () => {
    return (
        <div className='bg-article'>
            <div className="container text-center py-20">
                <h2 className='text-4xl text-purple-600'>OUR CORE VALUES</h2>
                <h5>WRITTEN BY CEO ELECTRONICS WAREHOUSE</h5>
                <p>Core values are the fundamental beliefs of a person or organization. The core values are the guiding principles that t dictate behavior and action. Core values can help people to know what is right from wrong, they can help companies to determine if they are on the right path and fulfilling their business goals; and they create an unwavering and unchanging guide. There are many different types of core values and many different examples of core values depending upon the context.</p>
                <img className=' mx-auto' src={signature} alt="" />
            </div>
        </div>
    );
};

export default Article;