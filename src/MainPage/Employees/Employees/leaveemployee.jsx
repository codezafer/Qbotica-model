
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_02,Avatar_05,Avatar_09,Avatar_10, Avatar_03,Avatar_08,Avatar_15,Avatar_20,Avatar_25,Avatar_24  } from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import  Delete from "../../../_components/modelbox/Delete"

const LeaveEmployee = () => {
  
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
            <div className="action-label text-center">
              <a className="btn btn-white btn-sm btn-rounded" href="">
                <i className={text==="New" ? "fa fa-dot-circle-o text-purple" : text === "Pending" ?
              "fa fa-dot-circle-o text-info" : text === "Approved" ? "fa fa-dot-circle-o text-success" 
              :"fa fa-dot-circle-o text-danger" } /> {text}
              </a>
            </div>
            ),
        },
        {
          title: 'Approved By',
          dataIndex: 'name',
          render: (text, record) => (            
              <h2 className="table-avatar">
                <Link to="/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></Link>
                <Link to="/app/profile/employee-profile">{text} </Link>
              </h2>
            ), 
            sorter: (a, b) => a.name.length - b.name.length,
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
              <h6>Annual Leave</h6>
              <h4>12</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Medical Leave</h6>
              <h4>3</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Other Leave</h6>
              <h4>4</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Remaining Leave</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        {/* /Leave Statistics */}
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
                  onChange={console.log("change")}
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
      {/* Delete Leave Modal */}
      <Delete/>
      {/* /Delete Leave Modal */}
    </div>
        );
  }

export default LeaveEmployee;
