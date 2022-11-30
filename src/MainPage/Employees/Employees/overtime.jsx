
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_09, Avatar_02 } from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const Overtime = () => {
  const [data, setData] = useState([
    {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",description:"Lorem ipsum dollar",
         ottype:"Normal day OT 1.5x",othours:'2',otdate:"1 Jan 2013",apimage:Avatar_09,approvedby:"Richard Miles"},         
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
          title: '#',
          dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
        },
        {
          title: 'Name',
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
          title: 'OT Date',
          dataIndex: 'otdate',
          sorter: (a, b) => a.otdate.length - b.otdate.length,
        },

        {
          title: 'OT Hours',
          dataIndex: 'othours',
          sorter: (a, b) => a.othours.length - b.othours.length,
        },

        {
          title: 'OT Type',
          dataIndex: 'ottype', 
          sorter: (a, b) => a.ottype.length - b.ottype.length,
        },
      
        {
          title: 'Description',
          dataIndex: 'description',
          sorter: (a, b) => a.description.length - b.description.length,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="action-label">
              <a className="btn btn-white btn-sm btn-rounded" href="">
                <i className="fa fa-dot-circle-o text-purple" /> New
              </a>
            </div>
            ),
        },
      
        {
          title: 'Approved By',
          dataIndex: 'approvedby',
          render: (text, record) => (            
              <h2 className="table-avatar">
                <Link to="/app/profile/employee-profile" className="avatar"><img alt="" src={record.apimage} /></Link>
                <Link to="/app/profile/employee-profile">{text}</Link>
              </h2>
            ), 
          sorter: (a, b) => a.approvedby.length - b.approvedby.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
              <div className="dropdown dropdown-action text-end">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_overtime"><i className="fa fa-pencil m-r-5" /> Edit</a>
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_overtime"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                  </div>
              </div>
            ),
      
        
        },
        
    
      ]
      return (         
      <div className="page-wrapper">
        <Helmet>
            <title>Overtime - qBotica</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Overtime</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Overtime</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_overtime"><i className="fa fa-plus" /> Add Overtime</a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Overtime Statistics */}
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="stats-info">
              <h6>Overtime Employee</h6>
              <h4>12 <span>this month</span></h4>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="stats-info">
              <h6>Overtime Hours</h6>
              <h4>118 <span>this month</span></h4>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="stats-info">
              <h6>Pending Request</h6>
              <h4>23</h4>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="stats-info">
              <h6>Rejected</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        {/* /Overtime Statistics */}
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
      {/* Add Overtime Modal */}
      <div id="add_overtime" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Overtime</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Select Employee <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>-</option>
                    <option>John Doe</option>
                    <option>Richard Miles</option>
                    <option>John Smith</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Overtime Date <span className="text-danger">*</span></label>
                  <div>
                    <input className="form-control datetimepicker" type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Overtime Hours <span className="text-danger">*</span></label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Description <span className="text-danger">*</span></label>
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
      {/* /Add Overtime Modal */}
      {/* Edit Overtime Modal */}
      <div id="edit_overtime" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Overtime</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Select Employee <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>-</option>
                    <option>John Doe</option>
                    <option>Richard Miles</option>
                    <option>John Smith</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Overtime Date <span className="text-danger">*</span></label>
                  <div>
                    <input className="form-control datetimepicker" type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Overtime Hours <span className="text-danger">*</span></label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Description <span className="text-danger">*</span></label>
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
      {/* /Edit Overtime Modal */}
      {/* Delete Overtime Modal */}
      <div className="modal custom-modal fade" id="delete_overtime" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Overtime</h3>
                <p>Are you sure want to Cancel this?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="" className="btn btn-primary continue-btn">Delete</a>
                  </div>
                  <div className="col-6">
                    <a href="" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Overtime Modal */}
    </div>
        );
   
}

export default Overtime;
