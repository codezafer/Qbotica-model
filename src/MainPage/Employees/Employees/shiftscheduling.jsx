
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_02,Avatar_05,Avatar_11, Avatar_12,Avatar_09,Avatar_10, Avatar_13 } from "../../../Entryfile/imagepath"
import  Addschedule from "../../../_components/modelbox/Addschedule"

const ShiftScheduling = () => {
      
    useEffect( ()=>{
      if($('.select').length > 0) {
        $('.select').select2({
          minimumResultsForSearch: -1,
          width: '100%'
        });
      }
    });  
      return ( 
        <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <Helmet>
                <title>Shift &amp; Schedule - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Daily Scheduling</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link to="/app/employee/allemployees">Employees</Link></li>
                    <li className="breadcrumb-item active">Shift Scheduling</li>
                  </ul>
                </div>
                <div className="col-auto float-end ml-auto">
                  <Link to="/app/employee/shift-list" className="btn add-btn m-r-5">Shifts</Link>
                  <a href="#" className="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_schedule"> Assign Shifts</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Content Starts */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option>All Department</option>
                    <option value={1}>Finance</option>
                    <option value={2}>Finance and Management</option>
                    <option value={3}>Hr &amp; Finance</option>
                    <option value={4}>ITech</option>
                  </select>
                  <label className="focus-label">Department</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">  
                <div className="form-group form-focus focused">
                  <div>
                    <input className="form-control floating datetimepicker" type="date" />
                  </div>
                  <label className="focus-label">From</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">  
                <div className="form-group form-focus focused">
                  <div>
                    <input className="form-control floating datetimepicker" type="date" />
                  </div>
                  <label className="focus-label">To</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">  
                <a href="#" className="btn btn-success btn-block w-100"> Search </a>  
              </div>     
            </div>
            {/* Search Filter */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Scheduled Shift</th>
                        <th>Fri 21</th>
                        <th>Sat 22</th>
                        <th>Sun 23</th>
                        <th>Mon 24</th>
                        <th>Tue 25</th>
                        <th>Wed 26</th>
                        <th>Thu 27</th>
                        <th>Fri 28</th>
                        <th>Sat 29</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_02} /></Link>
                            <Link to="/app/profile/employee-profile">John Doe <span>Web Designer</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_09} /></Link>
                            <Link to="/app/profile/employee-profile">Richard Miles <span>Web Developer</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_10} /></Link>
                            <Link to="/app/profile/employee-profile">John Smith <span>Android Developer</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_05} /></Link>
                            <Link to="/app/profile/employee-profile">Mike Litorus <span>IOS Developer</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_11} /></Link>
                            <Link to="/app/profile/employee-profile">Wilmer Deluna <span>Team Leader</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_12} /></Link>
                            <Link to="/app/profile/employee-profile">Jeffrey Warden <span>Web Developer</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_13} /></Link>
                            <Link to="/app/profile/employee-profile">Bernardo Galaviz <span>Web Developer</span></Link>
                          </h2>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <h2>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{border: '2px dashed #1eb53a'}}>
                                <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
                                <span className="userrole-info">Web Designer - SMARTHR</span>
                              </a>
                            </h2>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="user-add-shedule-list">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                              <span><i className="fa fa-plus" /></span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Content End */}
          </div>
          {/* /Page Content */}
        </div>
        {/* /Page Wrapper */}
        {/* Add Schedule Modal */}
       <Addschedule/>
        {/* /Add Schedule Modal */}
        {/* Edit Schedule Modal */}
        <div id="edit_schedule" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Schedule</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Department <span className="text-danger">*</span></label>
                        <select className="select">
                          <option value>Select</option>
                          <option >Development</option>
                          <option value={1}>Finance</option>
                          <option value={2}>Finance and Management</option>
                          <option value={3}>Hr &amp; Finance</option>
                          <option value={4}>ITech</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Employee Name <span className="text-danger">*</span></label>
                        <select className="select">
                          <option value>Select </option>
                          <option value={1}>Richard Miles </option>
                          <option value={2}>John Smith</option>
                          <option value={3}>Mike Litorus </option>
                          <option value={4}>Wilmer Deluna</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Date <span className="text-danger">*</span></label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Shifts <span className="text-danger">*</span></label>
                        <select className="select">
                          <option value>Select </option>
                          <option value={1}>10'o clock Shift</option>
                          <option value={2}>10:30 shift</option>
                          <option value={3}>Daily Shift </option>
                          <option value={4}>New Shift</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Min Start Time  <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="06:11 am" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Start Time  <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="06:30 am" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Max Start Time  <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="08:12 am" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Min End Time  <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="09:12 pm" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">End Time   <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="09:30 pm" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Max End Time <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="09:45 pm" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Break Time  <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue={45} />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recurring Shift</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Repeat Every</label>
                        <select className="select">
                          <option value>1 </option>
                          <option value={1}>2</option>
                          <option value={2}>3</option>
                          <option value={3}>4</option>
                          <option value={4}>5</option>
                          <option value={3}>6</option>
                        </select>
                        <label className="col-form-label">Week(s)</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group wday-box">
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="monday" className="days recurring" defaultChecked /><span className="checkmark">M</span></label>
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="tuesday" className="days recurring" defaultChecked /><span className="checkmark">T</span></label>
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="wednesday" className="days recurring" defaultChecked /><span className="checkmark">W</span></label>
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="thursday" className="days recurring" defaultChecked /><span className="checkmark">T</span></label>
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="friday" className="days recurring" defaultChecked /><span className="checkmark">F</span></label>
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="saturday" className="days recurring" /><span className="checkmark">S</span></label>
                        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" defaultValue="sunday" className="days recurring" /><span className="checkmark">S</span></label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">End On <span className="text-danger">*</span></label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Indefinite</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Accept Extra Hours </label>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked />
                          <label className="custom-control-label" htmlFor="customSwitch3" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Publish </label>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked />
                          <label className="custom-control-label" htmlFor="customSwitch4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Schedule Modal */}
      </>
        );
   
}

export default ShiftScheduling;
