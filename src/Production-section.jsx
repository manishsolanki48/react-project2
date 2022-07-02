import React from "react";
import productionimage1 from './images/image3.png';
import blogimage1 from './images/production-image1.png';
import arrow1 from './images/arrow1.png';

function Production(){
    return(
        <>
            <div className="production-section">
                <div className="row productionwrapper">
                    <div className="production-tital-text d-flex justify-content-between mb-5">
                        <div>
                            <img src={productionimage1}/>
                        </div>
                        <h2 className="text-uppercase">recent posts</h2>
                        <div>
                            <img src={productionimage1}/>
                        </div>
                    </div>
                    <div className="row blogwrapper d-flex justify-content-center">
                        <div className="blog-box d-flex justify-content-center align-items-center flex-column col-lg-4 col-md-12 col-xs-12">
                            <div className="blog-background">
                                <img className="mt-5 mb-2" src={blogimage1}/>
                            </div>
                            <h2 className="text-center text-uppercase mb-3">Lorem ipsum sit</h2>
                            <p className="text-center mb-4">Lorem ipsum dolor sit amet,
                               teme sit consectetur adipisicing 
                               elit, sed do eiusmod tempor inci
                               didunt ut .
                            </p>
                            <a href="#" className="production-btn text-decoration-none mb-3">READ MORE</a>
                        </div>
                        <div className="blog-box d-flex justify-content-center align-items-center flex-column col-lg-4 col-md-12 col-xs-12">
                            <div className="blog-background">
                                <img className="mt-5 mb-2" src={blogimage1}/>
                            </div>
                            <h2 className="text-center text-uppercase mb-3">Lorem ipsum sit</h2>
                            <p className="text-center mb-4">Lorem ipsum dolor sit amet,
                               teme sit consectetur adipisicing 
                               elit, sed do eiusmod tempor inci
                               didunt ut .
                            </p>
                            <a href="#" className="production-btn text-decoration-none mb-3">READ MORE</a>
                        </div>
                        <div className="blog-box d-flex justify-content-center align-items-center flex-column col-lg-4 col-md-12 col-xs-12">
                            <div className="blog-background">
                                <img className="mt-5 mb-2" src={blogimage1}/>
                            </div>
                            <h2 className="text-center text-uppercase mb-3">Lorem ipsum sit</h2>
                            <p className="text-center mb-4">Lorem ipsum dolor sit amet,
                               teme sit consectetur adipisicing 
                               elit, sed do eiusmod tempor inci
                               didunt ut .
                            </p>
                            <a href="#" className="production-btn text-decoration-none mb-3">READ MORE</a>
                        </div>
                        <div className="production-arrow d-flex justify-content-center">
                            <img src={arrow1} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Production;