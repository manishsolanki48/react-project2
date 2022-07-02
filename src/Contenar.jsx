import React from "react";
import image3 from './images/image3.png';

function Contenar(){
    return(
        <>
        <div className="time-section">
            <div className="timewrapper">
                <div className="dont-miss-the-game text-center">
                    <h2 className="pt-3 pb-3 text-uppercase fs-29">don't miss the game</h2>
                </div>
                <div className="row date-time d-flex justify-content-between">
                    <div className="col-lg-4 col-md-3 col-xs-1">
                        <img className="time-imager" src={image3} />
                    </div>
                    <div className="time col-lg-4 col-md-6 col-xs-10 d-flex justify-content-center">
                        <span className="text-uppercase">saturday</span>
                        <h2>0 9</h2>
                        <span className="text-uppercase">07:00 PM</span>
                    </div>
                    <div className="col-lg-4 col-md-3 col-xs-1 d-flex justify-content-end">
                        <img className="time-imager " src={image3} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

export default Contenar;