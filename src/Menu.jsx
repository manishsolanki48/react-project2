import React, {useState} from "react";
import logo from './images/logo-image.png';

function Menu(){

    const [modal, setModal] =useState(false);
     
    const toggleModal =() => {
        setModal(!modal)
    }

    return(
        <>
        <a href="#" onClick={toggleModal} class="show-btn"><i class="fa-solid fa-bars"></i></a>
        {modal && (
            <div className="top-header-menu d-flex justify-content-center">
                <img className="logo" src={logo} alt="logo"/>
                <nav onClick={toggleModal} className="d-flex flex-direction-row menu">
                    <a href="#" className="text-decoration-none">HOME</a>
                    <a href="#" class="text-decoration-none">ABOUT</a>
                    <a href="#" className="text-decoration-none">SERVICES</a>
                    <a href="#" className="text-decoration-none">CONTECT</a>
                    <a href="#" className="text-decoration-none">SIGN IN</a>
                </nav>
                <a href="#" className="menu-btn" onClick={toggleModal}>close</a>
            </div>
        )}
            <div className="top-section d-flex justify-content-center">
                <img className="menu-logo" src={logo} alt="logo"/>
                <nav className="d-flex flex-direction-row menu-section">
                    <a href="#" className="text-decoration-none">HOME</a>
                    <a href="#" class="text-decoration-none">ABOUT</a>
                    <a href="#" className="text-decoration-none">SERVICES</a>
                    <a href="#" className="text-decoration-none">CONTECT</a>
                    <a href="#" className="text-decoration-none">SIGN IN</a>
                </nav>
            </div>
        </>
    )
};

export default Menu;