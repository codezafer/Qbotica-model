/**
 * Signin Firebase
 */

 import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Avatar_11} from '../../../Entryfile/imagepath'

const IncomingCall = () => {
  useEffect( ()=>{
    let firstload = localStorage.getItem("minheight")
    if(firstload === "true"){
        setTimeout(function() {
          window.location.reload(1)
          localStorage.removeItem("minheight")
        },1000)
    }
 });
  
      return (
      <div className="page-wrapper">
          <Helmet>
            <title>Incoming Call - qBotica</title>
            <meta name="description" content="Incoming Call"/>					
        </Helmet>
      {/* Incoming Call */}
      <div className="call-box incoming-box">
        <div className="call-wrapper">
          <div className="call-inner">
            <div className="call-user">
              <img className="call-avatar" src={Avatar_11} alt="" />
              <h4>Wilmer Deluna</h4>
              <span>Calling ...</span>
            </div>							
            <div className="call-items">
              <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn call-item call-end"><i className="material-icons">call_end</i></Link>
              <Link to="/conversation/video-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Incoming Call */}
    </div>
       );
   
}

export default IncomingCall;
