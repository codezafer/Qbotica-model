/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SettingsSidebar = (props) => {
  let pathname = props.location.pathname

    return (

        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <Link onClick={()=>localStorage.setItem("firstload","true")} to="/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></Link>
              </li>
              <li className="menu-title">Settings</li>
              <li className={pathname.includes('companysetting') ?"active" :""}> 
                <Link to="/settings/companysetting"><i className="la la-building" /> <span>Company Settings</span></Link>
              </li>
              <li className={pathname.includes('localization') ?"active" :""}> 
                <Link  onClick={()=>localStorage.setItem("selectbox","true")} to="/settings/localization"><i className="la la-clock-o" /> <span>Localization</span></Link>
              </li>
              <li className={pathname.includes('theme-') ?"active" :""}> 
                <Link to="/settings/theme-settings"><i className="la la-photo" /> <span>Theme Settings</span></Link>
              </li>
              <li className={pathname.includes('roles-permissions') ?"active" :""}> 
                <Link to="/settings/roles-permissions"><i className="la la-key" /> <span>Roles &amp; Permissions</span></Link>
              </li>
              <li className={pathname.includes('email-') ?"active" :""}> 
                <Link to="/settings/email-settings"><i className="la la-at" /> <span>Email Settings</span></Link>
              </li>
              <li className={pathname.includes('performance-') ?"active" :""}> 
                <Link to="/settings/performance-setting"><i className="la la-chart-bar" /> <span>Performance Settings</span></Link>
              </li>
              <li className={pathname.includes('approval-') ?"active" :""}> 
                <Link to="/settings/approval-setting"><i className="la la-thumbs-up" /> <span>Approval Settings</span></Link>
              </li>
              <li className={pathname.includes('invoice-') ?"active" :""}> 
                <Link to="/settings/invoice-settings"><i className="la la-pencil-square" /> <span>Invoice Settings</span></Link>
              </li>
              <li className={pathname.includes('salary-') ?"active" :""}> 
                <Link to="/settings/salary-settings"><i className="la la-money" /> <span>Salary Settings</span></Link>
              </li>
              <li className={pathname.includes('notifications') ?"active" :""}> 
                <Link to="/settings/notifications"><i className="la la-globe" /> <span>Notifications</span></Link>
              </li>
              <li className={pathname.includes('-password') ?"active" :""}> 
                <Link to="/settings/change-password"><i className="la la-lock" /> <span>Change Password</span></Link>
              </li>
              <li className={pathname.includes('-type') ?"active" :""}> 
                <Link to="/settings/leave-type"><i className="la la-cogs" /> <span>Leave Type</span></Link>
              </li>
              <li className={pathname.includes('toxbox-') ?"active" :""}> 
                <Link to="/settings/toxbox-setting"><i className="la la-comment" /> <span>ToxBox Settings</span></Link>
              </li>
              <li className={pathname.includes('cron') ?"active" :""}> 
                <Link to="/settings/cron-setting"><i className="la la-rocket" /> <span>Cron Settings</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   
}

export default withRouter(SettingsSidebar);
