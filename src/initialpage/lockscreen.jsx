/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Applogo,Avatar_02} from '../Entryfile/imagepath.jsx'

const Lockscreen = () => {
      return (
        <>
            <Helmet>
               <title>Lockscreen - qBotica</title>
               <meta name="description" content="Login page"/>					
             </Helmet>
          <div className="account-content">
            <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link>
            <div className="container">
              {/* Account Logo */}
              <div className="account-logo">
                <Link to="/login"><img src={Applogo} alt="Qbotica" /></Link>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  {/* Lock User Img */}
                  <div className="lock-user">
                    <img alt="" src={Avatar_02} className="rounded-circle" />
                    <h4>John Doe</h4>
                  </div>
                  {/* /Lock User Img */}
                  {/* Account Form */}
                  <div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" type="submit">Enter</button>
                    </div>
                    <div className="account-footer">
                      <p>Sign in as a different user? <Link to="/register">Login</Link></p>
                    </div>
                  </div>
                  {/* /Account Form */}
                </div>
              </div>
            </div>
          </div>
        </>
      );
   }

export default Lockscreen;
