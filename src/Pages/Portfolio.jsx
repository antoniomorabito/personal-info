import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div>
            
<main>

 
<div className="slider-area ">
    <div className="slider-height2 d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="hero-cap">
                        <h2>My Portfolio</h2>
                        <nav aria-label="breadcrumb ">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">My Portfolio</a></li> 
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
<section className="services-area  services-padding">
    <div className="container">
       <div className="project-heading mb-35">
            <div className="row align-items-end">
                <div className="col-lg-6">
                   
                    <div className="section-tittle">
                        <h2>What Services you will Get from me!</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="properties__button">
                                                                  
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> All</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Branding</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Logo</a>
                                <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">UI/UX </a>
                                <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Web Design</a>
                            </div>
                        </nav>
                     
                    </div>
                </div>
            </div>
       </div>
        <div className="row">
            <div className="col-12">
                
                <div className="tab-content active" id="nav-tabContent">
                   
                    <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                        <div className="services-caption">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                 
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                       
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                      
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                   
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services6.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="services-caption">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services6.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                           
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                     
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="services-caption">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                   
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                         
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                 
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services6.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                        <div className="services-caption">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                  
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                         
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                          
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services6.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                        <div className="services-caption">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                   
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services3.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                          
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                         
                                            <div className="single-services mb-30">
                                                <img src="assets/img/service/services1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                   
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                  
                                    <div className="single-services mb-30">
                                        <img src="assets/img/service/services6.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    </div>
</section>
 

</main>

        </div>
    );
};

export default Portfolio;