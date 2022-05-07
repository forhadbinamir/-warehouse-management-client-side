import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Article from './Article/Article';
import Inventory from '../Inventory/Inventory';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Article></Article>
            <Experience></Experience>
        </div>
    );
};

export default Home;