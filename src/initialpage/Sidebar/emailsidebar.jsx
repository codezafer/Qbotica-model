/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EmailSidebar = (props) => {
  let pathname = props.location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <Link onClick={()=>localStorage.setItem("firstload","true")} to="/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></Link>
              </li>
              <li className="active"> 
                <Link to="/email/inbox">Inbox <span className="mail-count">(21)</span></Link>
              </li>
              <li> 
                <a href="#">Starred</a>
              </li>
              <li> 
                <a href="#">Sent Mail</a>
              </li>
              <li> 
                <a href="#">Trash</a>
              </li>
              <li> 
                <a href="#">Draft <span className="mail-count">(8)</span></a>
              </li>
              <li className="menu-title">Label <a href="#"><i className="fa fa-plus" /></a></li>
              <li> 
                <a href="#"><i className="fa fa-circle text-success mail-label" /> Work</a>
              </li>
              <li> 
                <a href="#"><i className="fa fa-circle text-danger mail-label" /> Office</a>
              </li>
              <li> 
                <a href="#"><i className="fa fa-circle text-warning mail-label" /> Personal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   
}

export default withRouter(EmailSidebar);
