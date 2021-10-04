import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div>
           
            <div className="container-fluid bg-about">
            <div className="container">
                 <div className="row no-gutters slider-text align-items-center ">
                    <div className="col-lg-5">
                        <div className="text mt-5 pt-5">
                            <h1 className="about-text">About Us</h1>
                           
                        </div>
                    </div>
                </div>
               
            </div>
          
        </div>
       <div className="container">
       <div className="row">
            <div className="col-md-6">
            <img src="https://i.ibb.co/KFh9W2S/xabout-jpg-pagespeed-ic-cv-Ag9veo-Wl.webp" alt="xabout-jpg-pagespeed-ic-cv-Ag9veo-Wl" border="0"/>
            </div>
            <div className="col-md-6">
            <div className="mt-5">
                    <span className="heading">LEARN ANYTHING</span>
                    <h2 className="mb-4 sub-heading">Benefits About Online Learning Expertise</h2>
                    <div className="card flex-row">
                        <img className="w-25 card-img-left example-card-img-responsive" src="https://i.ibb.co/C7qz37W/computer.png"/>
                     
                        <div className="card-body">
                            <h4 className="card-title h5 h4-sm">Online Courses</h4>
                            <p className="card-text">Choose from 155,000 online video courses with new additions published every month</p>
                        </div>
                    </div>
                    <div className="card flex-row mt-2">
                        <img className="w-25 card-img-left example-card-img-responsive" src="https://i.ibb.co/bb5vPqr/certificate.png"/>
                     
                        <div className="card-body">
                            <h4 className="card-title h5 h4-sm">Earn A Certificates</h4>
                            <p className="card-text">A verified certificate from edX can provide proof for an employer, school, or other institution</p>
                        </div>
                    </div>
                    <div className="card flex-row mt-2 mb-2">
                        <img className="w-25 card-img-left example-card-img-responsive" src="https://i.ibb.co/d6XSKJz/teacher.png"/>
                     
                        <div className="card-body">
                            <h4 className="card-title h5 h4-sm">Learn with Expert</h4>
                            <p className="card-text">Instructors from around the world teach millions of students on Academia. </p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
       </div>
        </div>
    );
};

export default About;