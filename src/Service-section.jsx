import React from "react";
import serviceimagefolder from './images/serviceimagefolder.png';
import serviceimage1 from './images/about-image1.png';
import arrow1 from './images/arrow1.png';

function Service(){
    return(
        <>
            <div className="container-fluid service-section">
                <div className="row servicewrapper pt-5">
                    <div className="service-left col-lg-6 col-md-6 col-12 pt-5">
                        <div>
                            <img className="pb-5" src={arrow1} />
                        </div>
                        <h2 className="pb-2 text-uppercase">Lorem ipsum</h2>
                        <p className="pb-5">Lorem ipsum dolor sit amet,  teme consec
                           tetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut veniam lorem ipsum 
                           dolor sit amet,  teme consectetur adipisic
                           ing elit, sed do eiusmod tempor incididunt 
                           ut veniam.
                        </p>
                        <a href="#" className="submit-btn text-decoration-none">SIGN IN</a>
                        <div className="arrow d-flex justify-content-center">
                            <img src={arrow1} />
                        </div>
                    </div>
                    <div className="service-right col-lg-6 col-md-6 col-12 d-flex flex-row">
                        <div className="serviceimage1">
                            <img src={serviceimage1} />
                        </div>
                        <div className="serviceimagefolder">
                            <img src={serviceimagefolder} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;