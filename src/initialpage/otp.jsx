/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Applogo} from '../Entryfile/imagepath.jsx'

const OTPscreen = () => {
      return ( 
      <>
          <Helmet>
               <title>OTP - qBotica</title>
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
              <h3 className="account-title">OTP</h3>
              <p className="account-subtitle">Verification your account</p>
              {/* Account Form */}
              <div>
                <div className="otp-wrap">
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" />
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" />
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" />
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">Enter</button>
                </div>
                <div className="account-footer">
                  <p>Not yet received? <Link to="">Resend OTP</Link></p>
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


export default OTPscreen;
