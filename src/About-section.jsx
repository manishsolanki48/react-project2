import React from "react";
import aboutimage1 from './images/about-image1.png';
import aboutbigimage from './images/abou-big-image.png';
import arrow1 from './images/arrow1.png';


function Aboutsection(){
    return(
        <>
        <div className="container-fluid aboutUSwrapper">
                <div className="row aboutUS-section">
                    <div className="aboutUS-left col-lg-6 col-md-6 col-12">
                        <img className="aboutUSimage1" src={aboutimage1} />
                        <img className="aboutUS-imagefolder1" src={aboutbigimage} />
                    </div>
                    <div className="aboutUS-right col-lg-6 col-md-6 col-12">
                        <div className="d-flex justify-content-end align-items-end">
                            <img className=" pb-5" src={arrow1} />
                        </div>
                        <h2 pb-5>Lorem ipsum</h2>
                        <p className="pb-5">Lorem ipsum dolor sit amet,  teme consec
                           tetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut veniam lorem ipsum 
                           dolor sit amet,  teme consectetur adipisic
                           ing elit, sed do eiusmod tempor incididunt 
                           ut veniam.
                        </p>
                        <a href="#" className="submit-btn text-decoration-none">SIGN IN</a>
                        <div className="right-aerrow-section  d-flex  justify-content-between">
                            <div className="d-flex align-items-end">
                                <img src={arrow1} />
                            </div>
                            <div>
                            <img src={aboutimage1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Aboutsection;