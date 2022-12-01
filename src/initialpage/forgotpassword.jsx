/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Applogo} from '../Entryfile/imagepath.jsx'

const ForgotPassword = () => {
      return (
          <>
            <Helmet>
                    <title>Forgot Password - qBotica</title>
                    <meta name="description" content="Login page"/>					
            </Helmet>
          <div className="account-content">
            {/* <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link> */}
            <div className="container">
              {/* Account Logo */}
              <div className="account-logo">
                <Link to="/login"><img src={Applogo} alt="Qbotica" /></Link>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Forgot Password?</h3>
                  <p className="account-subtitle">Enter your email to get a password reset link</p>
                  {/* Account Form */}
                  <form>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                    </div>
                    <div className="account-footer">
                      <p>Remember your password? <Link to="/login">Login</Link></p>
                    </div>
                  </form>
                  {/* /Account Form */}
                </div>
              </div>
            </div>
          </div>
        </>
      );
   }



export default ForgotPassword;
