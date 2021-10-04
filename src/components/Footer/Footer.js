import React from 'react';
import { FaFacebook, FaGithubSquare, FaGooglePlusG, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneAlt, FaTwitterSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
       <>
       <div className="container-fluid ps-0 pe-0">

 <footer
         className="text-center text-lg-start text-dark"
         style={{backgroundColor: '#ECEFF1'}}
         >

   <section
            className="d-flex justify-content-between p-4 text-white"
            style={{backgroundColor: '#1EB2A6'}}
            >
 
     <div className="me-5">
       <span>Get connected with us on social networks:</span>
     </div>
     {/* Footer social icons  */}
     <div>
       <a href="" className="text-white me-4">
        <FaFacebook></FaFacebook>
       </a>
       <a href="" className="text-white me-4">
         <FaTwitterSquare></FaTwitterSquare>
       </a>
       <a href="" className="text-white me-4">
       <FaGooglePlusG></FaGooglePlusG>
       </a>
       <a href="" className="text-white me-4">
       <FaInstagram></FaInstagram>
       </a>
       <a href="" className="text-white me-4">
         <FaLinkedin></FaLinkedin>
       </a>
       <a href="" className="text-white me-4">
       <FaGithubSquare></FaGithubSquare>
       </a>
     </div>
    
   </section>
 {/* Footer logo  */}
   <section className="">
     <div className="container text-center text-md-start mt-5">
   
       <div className="row mt-3">
        
         <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
           <h6 className="text-uppercase fw-bold">ACADEMIA</h6>
           <hr
               className="mb-4 mt-0 d-inline-block mx-auto"
               style={{width: '60px',backgroundColor: '#F8F8F8', height: '2px'}}
               />
           <p>
           Build skills with courses, certificates, and degrees online from world-class universities and companies.
           </p>
         </div>
        
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
           <h6 className="text-uppercase fw-bold">Courses</h6>
           <hr
               className="mb-4 mt-0 d-inline-block mx-auto"
               style={{width: '60px',backgroundColor: '#7c4dff', height: '2px'}}
               />
           <p>
             <a href="#!" className="text-dark">Web Devlopment</a>
           </p>
           <p>
             <a href="#!" className="text-dark">Graphics Design</a>
           </p>
           <p>
             <a href="#!" className="text-dark">Fitness</a>
           </p>
           <p>
             <a href="#!" className="text-dark">Digital Marketing</a>
           </p>
         </div>
        {/* Footer Useful links  */}
         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
   
           <h6 className="text-uppercase fw-bold">Useful links</h6>
           <hr
               className="mb-4 mt-0 d-inline-block mx-auto"
               style={{width: '60px',backgroundColor: '#7c4dff', height: '2px'}}
               />
           <p><NavLink className="text-dark" to="/home">Home</NavLink></p>
           <p><NavLink className="text-dark" to="/about">About</NavLink></p>
           <p><NavLink className="text-dark"to="/allCourses">All Courses</NavLink></p>
           <p><NavLink className="text-dark"to="/faq">FAQ</NavLink></p>
         </div>
        {/* Footer contact  */}
         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
           <h6 className="text-uppercase fw-bold">Contact</h6>
           <hr
               className="mb-4 mt-0 d-inline-block mx-auto"
               style={{width: '60px',backgroundColor: '#7c4dff', height: '2px'}}
               />
           <p><FaLocationArrow></FaLocationArrow> New York, NY 10012, US</p>
           <p> <FaMailBulk></FaMailBulk> info@example.com</p>
           <p><FaPhoneAlt></FaPhoneAlt> + 01 234 567 88</p>
           
         </div>
      
       </div>

     </div>
   </section>
    {/* Footer Copyright  */}
   <div
        className="text-center p-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        >
     © 2021 Copyright: ACADEMIA
   </div>
  
 </footer>

</div>
       </> 
    );
};

export default Footer;