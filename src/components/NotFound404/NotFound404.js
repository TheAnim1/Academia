import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NotFound404.css";

const NotFound404 = () => {
    return (
        <div>
          {/* 404 Section  */}
            <section class="page_404">
            <div class="container">
                <div class="row">	
                <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                    <h1 class="text-center ">404</h1>
                
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not available!</p>
		
		
        <NavLink className="link_404" to="/home">Go to Home</NavLink>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default NotFound404;