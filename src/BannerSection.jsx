import React from "react";
import rugby from './images/banner-image.jpg'; 

function BannerSection(){
    return(
        <>
            <div className="bannerwrapper">
                <img className="images2" src={rugby}></img>
            </div>
        </>  
    )
};

export default BannerSection;