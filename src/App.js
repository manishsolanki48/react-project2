import React from 'react';
import './App.css';
import BannerSection from './BannerSection';
import Menu from './Menu';
import Contenar from './Contenar';
import Aboutsection from './About-section';
import Service from './Service-section';
import Holder from './Holder-section';
import Gallery from './Gallery-section';
import Videosection from './Vidoe-gallery-section';
import Production from './Production-section';
import Contect from './Contect-section';
import Footer from './Footer-section';

function App() {
    return(
        <>
            <Menu></Menu>
            <BannerSection></BannerSection>
            <Contenar></Contenar>
            <Aboutsection></Aboutsection>
            <Service></Service>
            <Holder></Holder>
            <Gallery></Gallery>
            <Videosection></Videosection>
            <Production></Production>
            <Contect></Contect>
            <Footer></Footer>
        </>
    )
}

export default App;
