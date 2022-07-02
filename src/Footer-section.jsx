import React from "react";

function Footer(){
    return(
        <>
           <div className="footer-section">
               <div className="row footerwrapper">
                   <div className="col-lg-4 col-md-12 col-xs-12 footer-folder1">
                       <h2>About</h2>
                       <p>History</p>
                       <p>Our Team</p>
                       <p>Mission Statement</p>
                       <p>Terms & Condition</p>
                       <p>Privacy Policy</p>
                   </div>
                   <div className="col-lg-4 col-md-12 col-xs-12 footer-folder1">
                       <h2>What we do</h2>
                       <p>News and stories</p>
                       <p>Publications</p>
                       <p>Take action</p>
                       <p>Recomendations</p>
                       <p>Help</p>
                   </div>
                   <div className="col-lg-4 col-md-12 col-xs-12 footer-folder1">
                       <h2>Your Copany</h2>
                       <p>Halimun Street 25</p>
                       <p>Jakarta, City 1234</p>
                       <p>www.yourflowersite.com</p>
                    <div className="footer-icon d-flex flex-row">
                        <h2>Follow us!</h2>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                   </div>
               </div>
           </div> 
        </>
    )
};

export default Footer;