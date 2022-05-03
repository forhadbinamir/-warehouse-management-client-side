import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import OurServices from './OurServices/OurServices';
import Experience from './Experience/Experience';
import Article from './Article/Article';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Article></Article>
            <Experience></Experience>
        </div>
    );
};

export default Home;