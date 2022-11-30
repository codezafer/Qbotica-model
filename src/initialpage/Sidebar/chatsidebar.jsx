/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {User,Avatar_02,Avatar_05,Avatar_09,Avatar_10} from "../../Entryfile/imagepath"


const Chatsidebar = (props) => {
  let pathname = props.location.pathname

    return (
      <>
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <Link onClick={()=>localStorage.setItem("firstload","true")} to="/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></Link>
              </li>
              <li className="menu-title"><span>Chat Groups</span> <a href="#" data-bs-toggle="modal" data-bs-target="#add_group"><i className="fa fa-plus" /></a></li>
              <li> 
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#General</span>
                </Link>
              </li>
              <li> 
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#Video Responsive Survey</span>
                </Link>
              </li>
              <li> 
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#500rs</span>
                </Link>
              </li>
              <li> 
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span> 
                  <span className="chat-user">#warehouse</span>
                </Link>
              </li>
              <li className="menu-title">Direct Chats <a href="#" data-bs-toggle="modal" data-bs-target="#add_chat_user"><i className="fa fa-plus" /></a></li>
              <li>
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                  </span> 
                  <span className="chat-user">John Doe</span> <span className="badge badge-pill bg-danger">1</span>
                </Link>
              </li>
              <li>
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_09} /><span className="status offline" />
                  </span> 
                  <span className="chat-user">Richard Miles</span> <span className="badge badge-pill bg-danger">7</span>
                </Link>
              </li>
              <li>
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_10} /><span className="status away" />
                  </span> 
                  <span className="chat-user">John Smith</span>
                </Link>
              </li>
              <li className="active">
                <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_05} /><span className="status online" />
                  </span> 
                  <span className="chat-user">Mike Litorus</span> <span className="badge badge-pill bg-danger">2</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      </>
     
      
      );
   
}

export default withRouter(Chatsidebar);
