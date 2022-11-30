/**
 * Signin Firebase
 */

 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import UserDashboardHeader from "./userdashboardheader"
 
 const Jobapptitude = () => {
 
       return ( 
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <Helmet>
                  <title>Aptitude - qBotica</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                    <h3 className="page-title">Aptitude</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item ">Jobs</li>
                        <li className="breadcrumb-item">Interviewing</li>
                        <li className="breadcrumb-item active">Aptitude</li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* /Page Header */}
                {/* Content Starts */}           
                <UserDashboardHeader/>
                <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                    <div className="card-body">
                        <p>Name : <b>John Richerd</b></p>
                        <p>Code : <b>#1245</b></p>
                        <p>Job Type : <b>UI Development</b></p>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-body">
                        <p className="m-b-30">Click button to answer your question.</p>
                        <div className="row">
                        <div className="col-md-6 text-center m-b-30">
                            <Link to="/app/administrator/questions" className="btn btn-primary btn-block submit-btn">Html</Link>
                        </div>
                        <div className="col-md-6 text-center m-b-30">
                            <Link to="/app/administrator/questions" className="btn btn-primary btn-block submit-btn">Css</Link>
                        </div>
                        <div className="col-md-6 text-center m-b-30">
                            <Link to="/app/administrator/questions" className="btn btn-primary btn-block submit-btn">Design</Link>
                        </div>
                        <div className="col-md-6 text-center m-b-30">
                            <Link to="/app/administrator/questions" className="btn btn-primary btn-block submit-btn">Javascript</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* /Content End */}
            </div>
            {/* /Page Content */}
            </div>
            {/* /Page Wrapper */}
        </>
       );
 }
 
 export default Jobapptitude;
 