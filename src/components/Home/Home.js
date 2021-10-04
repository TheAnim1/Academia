import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import "./Home.css";
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://animfahad32.github.io/fakeData/courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
    },[])
    return (
        <>
        {/* Banner Section  */}
        <div className="container-fluid bg-img">
            <div className="container">
                 <div className="row no-gutters slider-text align-items-center ">
                    <div className="col-lg-5">
                        <div className="text mt-5 pt-5">
                            <h5 className="text-heading">WELCOME TO ACADEMIA</h5>
                            <h2 className="mb-4">Best Online Education Expertise</h2>
                            <h5 className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h5>
                            <button className="btn btn-primary p-4 py-3">Get Started Now</button>
                            <button className="btn p-4 py-3 btn-white mx-2">View Course</button>
                        </div>
                    </div>
                </div>
               
            </div>
          
        </div>
        {/* Courses Section  */}
       <div className="container-fluid courses">
       <div className="container py-5 ">
           
                <div className="text-center">
                    <span className="heading">Our Courses</span>
                    <h2 className="mb-4 sub-heading">Browse Our Online Courses</h2>
            </div>
            
            <div className="row row-cols-1 row-cols-md-4 g-4">
            
            {
                courses.map(course => <Courses
                    key={course.id}
                    course ={course}
                    
                ></Courses>)
            }
           
          
            </div>
         
        </div>
       </div>

            {/* Testimonial Section  */}
            <div className="container-fluid courses">
       <div className="container py-5 ">
            
                <div className="text-center">
                    <span className="heading">TESTIMONIAL</span>
                    <h2 className="mb-4 sub-heading">Our Successful Students</h2>
            </div>
            
         
        </div>
       </div>
            
            <div className="testimonials-clean">
        <div className="container">
           
            <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">I took my first online course at Wilmington University last block. I took Managerial Accounting and while the content of the course proved to be quite challenging, the course format was excellent. The flexibility of the course allowed me to move at my own pace. In addition, online tutoring was available 24/7 to answer any questions that I had!</p>
                    </div>
                    <div className="author" style={{marginTop: '89px'}}>
                        <img className="rounded-circle w-25" src="https://i.ibb.co/sFqrvNX/1.jpg"/>
                        <h5 className="name">Ben Johnson</h5>
                        <p className="title">CEO of Company Inc.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">I've taken classes back in 1996/97 at Del-Tech and it was fine for me because I was younger and worked part-time;now,however, I'm older, married working full-time and the ability to finish my schooling on my own time is great! I was a bit leery when I started at WU in September of 2009 online, but after getting used to it (which didn't take long at all), it is by far the best thing I've done for myself. I make time to get my schoolwork done and I'm still able to hold down a full-time job.</p>
                    </div>
                    <div className="author">
                        <img className="rounded-circle w-25" src="https://i.ibb.co/qn9FjVB/2.jpg"/>
                        <h5 className="name">Carl Kent</h5>
                        <p className="title">Founder of Style Co.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Taking online classes here at Wilmington University has been a major benefit to me. As I work toward completing my degree, I have been able to take advantage of several online classes which has allowed me to be home for my family and work on my school work when I have time. The courses are well laid out and the instructors are supportive and responsible in returning emails. Thanks Wilmington for allowing me to have a flexible schedule while finishing my degree</p>
                    </div>
                    <div className="author">
                        <img className="rounded-circle w-25"  src="https://i.ibb.co/P5Vjy82/3.jpg"/>
                        <h5 className="name">Emily Clark</h5>
                        <p className="title">Owner of Creative Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
       
        </>
    );
};

export default Home;