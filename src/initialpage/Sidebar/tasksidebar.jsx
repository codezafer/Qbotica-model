/**
 * App Header
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <Link onClick={()=>localStorage.setItem("firstload","true")} to="/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></Link>
              </li>
              <li className="menu-title">Projects <a href="#" data-bs-toggle="modal" data-bs-target="#create_project"><i className="fa fa-plus" /></a></li>
              <li> 
                <Link to="/tasks/tasks">Project Management</Link>
              </li>
              <li className="active"> 
                <Link to="/tasks/tasks">Hospital Administration</Link>
              </li>
              <li> 
                <Link to="/tasks/tasks">Video Calling App</Link>
              </li>
              <li> 
                <Link to="/tasks/tasks">Office Management</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   
}

export default withRouter(Sidebar);
