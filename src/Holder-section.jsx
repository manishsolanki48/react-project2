import React from "react";
import holderarrow from './images/holderarrow.png';
import hollderimage2 from './images/hollderimage-2.png';

function Holder(){
    return(
        <>
            <div className="container-fluid holder-section">
                <div className="holderwrapper">
                    <div className="holder-text d-flex justify-content-between p-5">
                        <div className="holderarrow">
                            <img src={holderarrow}/>
                        </div>
                        <div className="text text-center">
                            <h2 className="pb-2 text-uppercase">Lorem ipsum</h2>
                            <p className="text-light">Lorem ipsum dolor sit amet,  teme consectetur 
                               adipisicing elit, sed do eiusmod tempor incididunt
                               ut veniam lorem ipsum dolor .
                            </p>
                        </div>
                        <div className="holderarrow4">
                            <img src={holderarrow}/>
                        </div>
                    </div>
                    <div className="row holder-image-section">
                        <div className="blog col-lg-6 col-md-12 col-12">
                            <div className="holder-image-1 d-flex justify-content-center">
                                <img src={hollderimage2}/>
                            </div>
                        </div>
                        <div className="blog col-lg-6 col-md-12 col-12">
                            <div className="holder-image-2">
                                <img src={hollderimage2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Holder;