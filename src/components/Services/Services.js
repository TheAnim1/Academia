import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';

const Services = () => {
    const[allCourses, setAllCourses]= useState([]);
    useEffect(()=>{
        fetch('https://animfahad32.github.io/fakeData/all-courses.json')
        .then(response=>response.json())
        .then(data=>setAllCourses(data))
    },[])
    return (
        <div>
            <div className="container-fluid bg-about">
            <div className="container">
                 <div className="row no-gutters slider-text align-items-center ">
                    <div className="col-lg-5">
                        <div className="text mt-5 pt-5">
                            <h1 className="about-text">All Courses</h1>
                           
                        </div>
                    </div>
                </div>
               
            </div>
          
        </div>

        <div className="container-fluid courses">
       <div className="container py-5 ">
           
                <div className="text-center">
                    <span className="heading">Our Courses</span>
                    <h2 className="mb-4 sub-heading">Browse Our Online Courses</h2>
            </div>
            
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    allCourses.map(allCourse => <AllCourses
                        key={allCourse.id}
                        allCourse={allCourse}
                    
                    ></AllCourses>)
                }
            </div>
         
        </div>
       </div>
        </div>
    );
};

export default Services;