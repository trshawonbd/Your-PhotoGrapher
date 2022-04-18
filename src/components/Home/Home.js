import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;