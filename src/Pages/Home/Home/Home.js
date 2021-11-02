import React from 'react';
import Header from '../../Share/Header/Header';
import AppoinmentBg from '../AppoinmentBg/AppoinmentBg';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <AppoinmentBg></AppoinmentBg>
        </div>
    );
};

export default Home;