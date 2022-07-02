import React from "react";
import galleryimage from './images/gallery-image.png';
import galleryarrowimage from './images/arrow1.png';

function Gallery(){
    return(
        <>
            <div className="gallery-section">
                    <div className="gallerybackground"></div>
                <div className="gallerywrapper">
                    <div className="row galleryfolder">
                        <div className="gallery-left-section col-lg-6 col-md-12 col-xs-12">
                            <img src={galleryimage} />
                        </div>
                        <div className="gallery-right-section col-lg-6 col-md-12 col-xs-12">
                            <h2 className="text-uppercase">Lorem ipsum amet</h2>
                            <p className="pb-4">Lorem ipsum dolor sit amet,  teme consec
                               tetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut veniam lorem ipsum
                               dolor sit amet,  teme consectetur adipisic
                               ing elit, sed do eiusmod tempor incididunt
                               ut veniam.
                            </p>
                            <a href="#" className="gallery-btn text-decoration-none">SIGN IN</a>
                            <div className="gallery-arrow mt-4 d-flex justify-content-end">
                                <img src={galleryarrowimage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Gallery;