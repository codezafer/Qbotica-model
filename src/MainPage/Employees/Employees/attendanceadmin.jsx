
import React, {useEffect,useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {   Avatar_01,Avatar_04,Avatar_05, Avatar_09, Avatar_10,Avatar_11,Avatar_12,Avatar_13 ,Avatar_16 } from "../../../Entryfile/imagepath"
import  Tableavatar from "../../../_components/tableavatar/tableavatar"
import Header from '../../../initialpage/Sidebar/header'
import Sidebar from '../../../initialpage/Sidebar/sidebar'

const AttendanceAdmin = () => {
   
  const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

  useEffect( ()=>{
    if($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });  
      return (      
   <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />   
      <div className="page-wrapper"> 
        <Helmet>
            <title>Attendance - qBotica</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Attendance</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Attendance</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">  
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3"> 
            <div className="form-group form-focus select-focus">
              <select className="select floating"> 
                <option>-</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              <label className="focus-label">Select Month</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3"> 
            <div className="form-group form-focus select-focus">
              <select className="select floating"> 
                <option>-</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
              <label className="focus-label">Select Year</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">  
            <a href="#" className="btn btn-success btn-block w-100"> Search </a>  
          </div>     
        </div>
        {/* /Search Filter */}
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table table-nowrap mb-0">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>31</th>
                  </tr>
                </thead>
                <tbody>
                <Tableavatar/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Attendance Modal */}
      <div className="modal custom-modal fade" id="attendance_info" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Attendance Info</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card punch-status">
                    <div className="card-body">
                      <h5 className="card-title">Timesheet <small className="text-muted">11 Mar 2019</small></h5>
                      <div className="punch-det">
                        <h6>Punch In at</h6>
                        <p>Wed, 11th Mar 2019 10.00 AM</p>
                      </div>
                      <div className="punch-info">
                        <div className="punch-hours">
                          <span>3.45 hrs</span>
                        </div>
                      </div>
                      <div className="punch-det">
                        <h6>Punch Out at</h6>
                        <p>Wed, 20th Feb 2019 9.00 PM</p>
                      </div>
                      <div className="statistics">
                        <div className="row">
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box">
                              <p>Break</p>
                              <h6>1.21 hrs</h6>
                            </div>
                          </div>
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box">
                              <p>Overtime</p>
                              <h6>3 hrs</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card recent-activity">
                    <div className="card-body">
                      <h5 className="card-title">Activity</h5>
                      <ul className="res-activity-list">
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            10.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.15 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            1.30 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            2.00 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            7.30 PM.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Attendance Modal */}
    </div>
  </div>
        );
  }

export default AttendanceAdmin;
