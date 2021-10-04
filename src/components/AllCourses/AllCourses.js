import React from 'react';

const AllCourses = (props) => {
    const { img, name, courses, price} = props.allCourse;
    return (
        <div>
          <div className="card h-100">
                      <img src={img} className="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                            <div className="card-heading">
                            <h5 className="card-title">{courses}</h5>
                            <p className="text-muted">By {name}</p>
                            </div>
                            <div className="text-center bg-light rounded py-2 my-3">
                                <p className="card-text">${price} All Course</p>
                                
                            </div>
                            <div className="text-center">
                            <button className="btn d-block btn-primary">Enroll Now</button>
                            </div>
                           
                         </div>
                    
                </div>
 
        </div>
    );
};

export default AllCourses;