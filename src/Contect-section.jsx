import React from "react";

function Contect(){
    return(
        <>
            <div className="contect-section">
                <div className="contectwrapper">
                    <h2 className="text-uppercase d-flex mx-auto flex-column align-items-center"><span>subscribe to</span> 
                        our news letter
                    </h2>
                    <div className="contect-form d-flex justify-content-center mx-auto flex-column">
                        <input type="your name" className="inner-input mb-4" placeholder="Your Name"></input>
                        <input type="your name" className="inner-input mb-4" placeholder="Your Name"></input>
                        <textarea rows="10" cols="30" className="text-taital mb-5" placeholder="Message"></textarea>
                        <a href="#" className="contect-btn text-center text-decoration-none d-flex mx-auto">SEND MESSAGE</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contect;