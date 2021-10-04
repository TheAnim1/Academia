import React from 'react';
import "./Faq.css";

const Faq = () => {
    return (
        <div>
            {/* FAQ Section  */}
            <div className="container-fluid bg-faq">
            <div className="container">
                 <div className="row no-gutters slider-text align-items-center ">
                    <div className="col-lg-5">
                        <div className="text mt-5 pt-5">
                            <h1 className="about-text">FAQ</h1>
                           
                        </div>
                    </div>
                </div>
               
            </div>
          
        </div>

        <div className="container p-5">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How do I take a Academia course?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             <p>Academia courses are entirely on-demand. You can begin the course whenever you like, and there are no deadlines to complete it.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Do I have to start my Academia course at a certain time? And how long do I have to complete it?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             <p>There are no deadlines to begin or complete the course. Even after you complete the course you will continue to have access to it, provided that your account’s in good standing, and Udemy continues to have a license to the course.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I pay for a course?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <p>Academia supports several different payment methods, depending on your account country and location.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Faq;