/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const Error404 = () => {
     
      return (
         <>
            <Helmet>
                <title>Error 404 - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
         <div className="error-box">
           <h1>404</h1>
           <h3><i className="fa fa-warning" /> Oops! Page not found!</h3>
           <p>The page you requested was not found.</p>
           <Link onClick={()=>localStorage.setItem("firstload","true")} to="/app/main/dashboard" className="btn btn-custom">Back to Home</Link >
         </div>
       </>
        
      );
   
}

export default Error404;
