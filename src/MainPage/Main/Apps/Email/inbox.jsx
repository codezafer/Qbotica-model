/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const InboxPage = () => {
      return (
      <div className="page-wrapper">
          <Helmet>
                <title>Inbox - qBotica</title>
                <meta name="description" content="Inbox"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Inbox</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Inbox</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <Link to="/email/compose" className="btn add-btn"><i className="fa fa-plus" /> Compose</Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-body">
                <div className="email-header">
                  <div className="row">
                    <div className="col top-action-left">
                      <div className="float-start">
                        <div className="btn-group dropdown-action">
                          <button type="button" className="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">Select <i className="fa fa-angle-down " /></button>&nbsp;
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">All</a>
                            <a className="dropdown-item" href="#">None</a>
                            <div className="dropdown-divider" /> 
                            <a className="dropdown-item" href="#">Read</a>
                            <a className="dropdown-item" href="#">Unread</a>
                          </div>
                        </div>
                        <div className="btn-group dropdown-action">
                          <button type="button" className="btn btn-white dropdown-toggle" data-bs-toggle="dropdown">Actions <i className="fa fa-angle-down " /></button>&nbsp;
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Reply</a>
                            <a className="dropdown-item" href="#">Forward</a>
                            <a className="dropdown-item" href="#">Archive</a>
                            <div className="dropdown-divider" /> 
                            <a className="dropdown-item" href="#">Mark As Read</a>
                            <a className="dropdown-item" href="#">Mark As Unread</a>
                            <div className="dropdown-divider" /> 
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                        <div className="btn-group dropdown-action">
                          <button type="button" className="btn btn-white dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-folder" /> <i className="fa fa-angle-down" /></button>&nbsp;
                          <div role="menu" className="dropdown-menu">
                            <a className="dropdown-item" href="#">Social</a>
                            <a className="dropdown-item" href="#">Forums</a>
                            <a className="dropdown-item" href="#">Updates</a>
                            <div className="dropdown-divider" /> 
                            <a className="dropdown-item" href="#">Spam</a>
                            <a className="dropdown-item" href="#">Trash</a>
                            <div className="dropdown-divider" /> 
                            <a className="dropdown-item" href="#">New</a>
                          </div>
                        </div>
                        <div className="btn-group dropdown-action">
                          <button type="button" data-bs-toggle="dropdown" className="btn btn-white dropdown-toggle"><i className="fa fa-tags" /> <i className="fa fa-angle-down" /></button>
                          <div role="menu" className="dropdown-menu">
                            <a className="dropdown-item" href="#">Work</a>
                            <a className="dropdown-item" href="#">Family</a>
                            <a className="dropdown-item" href="#">Social</a>
                            <div className="dropdown-divider" /> 
                            <a className="dropdown-item" href="#">Primary</a>
                            <a className="dropdown-item" href="#">Promotions</a>
                            <a className="dropdown-item" href="#">Forums</a>
                          </div>
                        </div>
                      </div>
                      <div className="float-start d-none d-sm-block">
                        <input type="text" placeholder="Search Messages" className="form-control search-message" />
                      </div>
                    </div>
                    <div className="col-auto top-action-right">
                      <div className="text-end">
                        <button type="button" title="Refresh" data-bs-toggle="tooltip" className="btn btn-white d-none d-md-inline-block"><i className="fa fa-refresh" /></button>
                        <div className="btn-group">
                          <a className="btn btn-white"><i className="fa fa-angle-left" /></a>
                          <a className="btn btn-white"><i className="fa fa-angle-right" /></a>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="text-muted d-none d-md-inline-block">Showing 10 of 112 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email-content">
                  <div className="table-responsive">
                    <table className="table table-inbox table-hover">
                      <thead>
                        <tr>
                          <th colSpan={6}>
                            <input type="checkbox" className="checkbox-all" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="unread clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star starred" /></span></td>
                          <td className="name">John Doe</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td><i className="fa fa-paperclip" /></td>
                          <td className="mail-date">13:14</td>
                        </tr>
                        <tr className="unread clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">Envato Account</td>
                          <td className="subject">Important account security update from Envato</td>
                          <td />
                          <td className="mail-date">8:42</td>
                        </tr>
                        <tr className="clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">Twitter</td>
                          <td className="subject">HRMS Bootstrap Admin Template</td>
                          <td />
                          <td className="mail-date">30 Nov</td>
                        </tr>
                        <tr className="unread clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">Richard Parker</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td />
                          <td className="mail-date">18 Sep</td>
                        </tr>
                        <tr className="clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">John Smith</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td />
                          <td className="mail-date">21 Aug</td>
                        </tr>
                        <tr className="clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">me, Robert Smith (3)</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td />
                          <td className="mail-date">1 Aug</td>
                        </tr>
                        <tr className="unread clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">Codecanyon</td>
                          <td className="subject">Welcome To Codecanyon</td>
                          <td />
                          <td className="mail-date">Jul 13</td>
                        </tr>
                        <tr className="clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">Richard Miles</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td><i className="fa fa-paperclip" /></td>
                          <td className="mail-date">May 14</td>
                        </tr>
                        <tr className="unread clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                          <td className="name">John Smith</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td />
                          <td className="mail-date">11/11/16</td>
                        </tr>
                        <tr className="clickable-row" data-href="/email/mail-view">
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td><span className="mail-important"><i className="fa fa-star starred" /></span></td>
                          <td className="name">Mike Litorus</td>
                          <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                          <td />
                          <td className="mail-date">10/31/16</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
      );
   
}

export default InboxPage;
