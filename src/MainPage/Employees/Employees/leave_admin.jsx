
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_09, Avatar_02,Avatar_03, Avatar_05, Avatar_08, Avatar_10,Avatar_15,Avatar_20, Avatar_24,Avatar_25  } from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import  Delete from "../../../_components/modelbox/Delete"
import Header from '../../../initialpage/Sidebar/header'
import Sidebar from '../../../initialpage/Sidebar/sidebar'

const LeaveAdmin = () => {

  const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

    const [data, setData] = useState([
      {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",leavetype:"Medical Leave",from:"27 Feb 2019",to:'27 Feb 2019'
      ,noofdays:"1 day",reason:"Going to Hospital",status:"Approved" },
      {id:2,image:Avatar_09,name:"Buster Wigton",role:"Web Developer",leavetype:"Hospitalisation",from:"15 Jan 2019",to:'25 Jan 2019'
      ,noofdays:"10 days",reason:"Going to Hospital",status:"Approved" },
      {id:3,image:Avatar_03,name:"Catherine Manseau",role:"Web Developer",leavetype:"Maternity Leave",from:"5 Jan 2019",to:'15 Jan 2019'
      ,noofdays:"10 days",reason:"Going to Hospital",status:"Approved" },
      {id:4,image:Avatar_05,name:"Domenic Houston",role:"Web Developer",leavetype:"Casual Leave",from:"10 Jan 2019",to:'11 Jan 2019'
      ,noofdays:"2 days",reason:"Going to Hospital",status:"Approved" },
      {id:5,image:Avatar_02,name:"John Doe",role:"Web Designer",leavetype:"Casual Leave",from:"9 Jan 2019",to:'10 Jan 2019'
      ,noofdays:"2 days",reason:"Going to Hospital",status:"Approved" },
      {id:6,image:Avatar_08,name:"John Smith",role:"Android Developer",leavetype:"LOP",from:"24 Feb 2019",to:'25 Feb 2019'
      ,noofdays:"2 days",reason:"Personnal",status:"Approved" },
      {id:7,image:Avatar_10,name:"Melita Faucher",role:"Web Developer",leavetype:"Casual Leave",from:"13 Jan 2019",to:'14 Jan 2019'
      ,noofdays:"2 days",reason:"Going to Hospital",status:"Declined" },
      {id:8,image:Avatar_15,name:"Mike Litorus",role:"IOS Developer",leavetype:"Paternity Leave",from:"13 Feb 2019",to:'17 Feb 2019'
      ,noofdays:"5 days",reason:"Going to Hospital",status:"Declined" },
      {id:9,image:Avatar_20,name:"Richard Miles",role:"Web Designer",leavetype:"Casual Leave",from:"8 Mar 2019",to:'9 Mar 2019'
      ,noofdays:"2 days",reason:"Going to Hospital",status:"New" },
      {id:10,image:Avatar_25,name:"Richard Parker",role:"Web Developer",leavetype:"Casual Leave",from:"30 Jan 2019",to:'31 Jan 2019'
      ,noofdays:"2 days",reason:"Personnal",status:"New" },
      {id:11,image:Avatar_10,name:"Rolland Webber",role:"Web Developer",leavetype:"Casual Leave",from:"7 Jan 2019",to:'8 Jan 2019'
      ,noofdays:"2 days",reason:"Going to Hospital",status:"Declined" },
      {id:12,image:Avatar_24,name:"Tarah Shropshire",role:"Web Developer",leavetype:"Paternity Leave",from:"10 Jan 2019",to:'10 Jan 2019'
      ,noofdays:"1 day",reason:"Going to Hospital",status:"New" },
    ]);
  
    useEffect( ()=>{
      if($('.select').length > 0) {
        $('.select').select2({
          minimumResultsForSearch: -1,
          width: '100%'
        });
      }
    });  
      const columns = [
        {
          title: 'Employee',
          dataIndex: 'name',
          render: (text, record) => (            
              <h2 className="table-avatar">
                <Link to="/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></Link>
                <Link to="/app/profile/employee-profile">{text} <span>{record.role}</span></Link>
              </h2>
            ), 
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: 'Leave Type',
          dataIndex: 'leavetype',
          sorter: (a, b) => a.leavetype.length - b.leavetype.length,
        },

        {
          title: 'From',
          dataIndex: 'from',
          sorter: (a, b) => a.from.length - b.from.length,
        },
        {
          title: 'To',
          dataIndex: 'to',
          sorter: (a, b) => a.to.length - b.to.length,
        },

        {
          title: 'No Of Days',
          dataIndex: 'noofdays', 
          sorter: (a, b) => a.noofdays.length - b.noofdays.length,
        },
      
        {
          title: 'Reason',
          dataIndex: 'reason',
          sorter: (a, b) => a.reason.length - b.reason.length,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className={text==="New" ? "fa fa-dot-circle-o text-purple" : text === "Pending" ?
              "fa fa-dot-circle-o text-info" : text === "Approved" ? "fa fa-dot-circle-o text-success" :"fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-purple" /> New</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Pending</a>
              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#approve_leave"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Declined</a>
            </div>
          </div>
            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
              <div className="dropdown dropdown-action text-end">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
              </div>
            ),
        },
      ]

      return (     
        
   <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />        
      <div className="page-wrapper">
      <Helmet>
          <title>Leaves - qBotica</title>
          <meta name="description" content="Login page"/>					
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Leaves</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Leaves</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_leave"><i className="fa fa-plus" /> Add Leave</a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Leave Statistics */}
        <div className="row">
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Today Presents</h6>
              <h4>12 / 60</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Planned Leaves</h6>
              <h4>8 <span>Today</span></h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Unplanned Leaves</h6>
              <h4>0 <span>Today</span></h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Pending Requests</h6>
              <h4>12</h4>
            </div>
          </div>
        </div>
        {/* /Leave Statistics */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
            <div className="form-group form-focus select-focus">
              <select className="select floating"> 
                <option> -- Select -- </option>
                <option>Casual Leave</option>
                <option>Medical Leave</option>
                <option>Loss of Pay</option>
              </select>
              <label className="focus-label">Leave Type</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
            <div className="form-group form-focus select-focus">
              <select className="select floating"> 
                <option> -- Select -- </option>
                <option> Pending </option>
                <option> Approved </option>
                <option> Rejected </option>
              </select>
              <label className="focus-label">Leave Status</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
                <input className="form-control floating" type="date" />
                <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
            <div className="form-group form-focus select-focus">
                <input className="form-control floating" type="date" />
                <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
            <a href="#" className="btn btn-success btn-block w-100"> Search </a>  
          </div>     
        </div>
        {/* /Search Filter */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              
            <Table className="table-striped"
                  pagination= { {total : data.length,
                    showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                  style = {{overflowX : 'auto'}}
                  columns={columns}                 
                  // bordered
                  dataSource={data}
                  rowKey={record => record.id}
                  onChange={console.log("chnage")}
                />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Leave Modal */}
      <div id="add_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Leave Type <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                    <option>Medical Leave</option>
                    <option>Loss of Pay</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>From <span className="text-danger">*</span></label>
                  <div>
                    <input className="form-control datetimepicker" type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>To <span className="text-danger">*</span></label>
                  <div>
                    <input className="form-control datetimepicker" type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of days <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly type="text" />
                </div>
                <div className="form-group">
                  <label>Remaining Leaves <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly defaultValue={12} type="text" />
                </div>
                <div className="form-group">
                  <label>Leave Reason <span className="text-danger">*</span></label>
                  <textarea rows={4} className="form-control" defaultValue={""} />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Leave Modal */}
      {/* Edit Leave Modal */}
      <div id="edit_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Leave Type <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>From <span className="text-danger">*</span></label>
                  <div>
                    <input className="form-control datetimepicker" defaultValue="01-01-2019" type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>To <span className="text-danger">*</span></label>
                  <div>
                    <input className="form-control datetimepicker" defaultValue="01-01-2019" type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of days <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly type="text" defaultValue={2} />
                </div>
                <div className="form-group">
                  <label>Remaining Leaves <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly defaultValue={12} type="text" />
                </div>
                <div className="form-group">
                  <label>Leave Reason <span className="text-danger">*</span></label>
                  <textarea rows={4} className="form-control" defaultValue={"Going to hospital"} />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Leave Modal */}
      {/* Approve Leave Modal */}
      <div className="modal custom-modal fade" id="approve_leave" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Leave Approve</h3>
                <p>Are you sure want to approve for this leave?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="" className="btn btn-primary continue-btn">Approve</a>
                  </div>
                  <div className="col-6">
                    <a href="" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Decline</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Approve Leave Modal */}
      {/* Delete Leave Modal */}
      <Delete/>
      {/* /Delete Leave Modal */}
    </div>
    </div>
        );
  }

export default LeaveAdmin;
