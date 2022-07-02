import React from "react";
import videoimage from './images/video-image-1.jpg';
import servicebackground1 from './images/service-backgroun.jpg';
import videobtn from './images/video-btn.jpg';

function Videosection(){
    return(
        <>
            <div className="video-section">
                <div className="videowrapper">
                    <div className="video-gallery">
                        <div className="video-text">
                            <h2 className="text-uppercase">the Stream is
                            <span> starting</span>
                            </h2>
                            <div className="video-gallery-image d-flex mx-auto justify-content-center">
                                <img src={videoimage}/>
                                <div className="video-background1">
                                    <img src={servicebackground1}/>
                                </div>
                                <div className="video-background2">
                                    <img src={servicebackground1}/>
                                </div>
                                <div>
                                    <img className="video-btn" src={videobtn}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Videosection;