/**
 * Signin Firebase
 */

 import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const GoalTracking = () => {
  const [data, setData] = useState([
    {id:1,description:"Lorem ipsum dollar",status :"Active",type:'Event Goal',progress:73,subject:"Test Goal",startdate:"7 May 2019",enddate:"10 May 2019"},
         {id:2,description:"Lorem ipsum dollar",status :"Active",type:'Invoice Goal',progress:100,subject:"Test Goal",startdate:"7 May 2019",enddate:"10 May 2019"},
         {id:3,description:"Lorem ipsum dollar",status :"Active",type:'Project Goal',progress:73,subject:"Test Goal",startdate:"7 May 2019",enddate:"10 May 2019"},
         {id:4,description:"Lorem ipsum dollar",status :"Inactive",type:'Employee Goal',progress:73,subject:"Test Goal",startdate:"7 May 2019",enddate:"10 May 2019"},
         {id:5,description:"Lorem ipsum dollar",status :"Inactive",type:'Invoice  Goal',progress:73,subject:"Test Goal",startdate:"7 May 2019",enddate:"10 May 2019"},         
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
        title: 'Goal Type',
        dataIndex: 'type',
        sorter: (a, b) => a.type.length - b.type.length,
      },
      {
        title: 'Subject',
        dataIndex: 'subject',
        sorter: (a, b) => a.subject.length - b.subject.length,
      },
      {
        title: 'Target Achievement',
        dataIndex: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
      },
      {
        title: 'Start Date',
        dataIndex: 'startdate',
        sorter: (a, b) => a.startdate.length - b.startdate.length,
      },
      {
        title: 'End Date',
        dataIndex: 'enddate',
        sorter: (a, b) => a.enddate.length - b.enddate.length,
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
          <div className="dropdown action-label">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className={text==="Inactive" ?"fa fa-dot-circle-o text-danger" : "fa fa-dot-circle-o text-success"} /> {text}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
              </div>
          </div>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Progress',
        dataIndex: 'progress',
        render: (text, record) => (
          <span>
            <p className="mb-1">Completed {text}%</p><div className="progress" style={{height: '5px'}}>
            <div className="progress-bar bg-primary progress-sm" style={{width: '73%', height: '10px'}} />
            </div>
          </span>
          ),
        sorter: (a, b) => a.progress.length - b.progress.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
              <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_goal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_goal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                  </div>
            </div>
          ),
      },
    ]
      return ( 
            <div className="page-wrapper">
                  <Helmet>
                      <title>Goal - qBotica</title>
                      <meta name="description" content="Login page"/>					
                  </Helmet>
                  {/* Page Content */}
                  <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="page-title">Goal Tracking</h3>
                          <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Goal Tracking</li>
                          </ul>
                        </div>
                        <div className="col-auto float-end ml-auto">
                          <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_goal"><i className="fa fa-plus" /> Add New</a>
                        </div>
                      </div>
                    </div>
                    {/* /Page Header */}
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
                            // onChange={this.handleTableChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Page Content */}
                  {/* Add Goal Modal */}
                  <div id="add_goal" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Add Goal Tracking</h5>
                          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="col-form-label">Goal Type</label>
                                  <select className="select">
                                    <option>Invoice Goal</option>
                                    <option>Event Goal</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="col-form-label">Subject</label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="col-form-label">Target Achievement</label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label>Start Date <span className="text-danger">*</span></label>
                                  <div><input className="form-control datetimepicker" type="date" /></div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label>End Date <span className="text-danger">*</span></label>
                                  <div><input className="form-control datetimepicker" type="date" /></div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>Description <span className="text-danger">*</span></label>
                                  <textarea className="form-control" rows={4} defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="col-form-label">Status</label>
                                  <select className="select">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                  </select>
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
                  {/* /Add Goal Modal */}
                  {/* Edit Goal Modal */}
                  <div id="edit_goal" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Edit Goal Tracking</h5>
                          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="col-form-label">Goal Type</label>
                                  <select className="select">
                                    <option >Invoice Goal</option>
                                    <option>Event Goal</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="col-form-label">Subject</label>
                                  <input className="form-control" type="text" defaultValue="Test Goal" />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="col-form-label">Target Achievement</label>
                                  <input className="form-control" type="text" defaultValue="Lorem ipsum dollar" />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label>Start Date <span className="text-danger">*</span></label>
                                  <div><input className="form-control datetimepicker" defaultValue="01-01-2019" type="date" /></div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label>End Date <span className="text-danger">*</span></label>
                                  <div><input className="form-control datetimepicker" defaultValue="01-01-2019" type="date" /></div>
                                </div>
                              </div>
                              <div className="col-sm-12 mb-3">
                                <div className="form-group">
                                  <label htmlFor="customRange">Progress</label>
                                  <input type="range" className="form-control-range custom-range" id="customRange" />
                                  <div className="mt-2" id="result">Progress Value: <b /></div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>Description <span className="text-danger">*</span></label>
                                  <textarea className="form-control" rows={4} defaultValue={"Lorem ipsum dollar"} />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="col-form-label">Status</label>
                                  <select className="select">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="submit-section">
                              <button className="btn btn-primary submit-btn">Save</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Edit Goal Modal */}
                  {/* Delete Goal Modal */}
                  <div className="modal custom-modal fade" id="delete_goal" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="form-header">
                            <h3>Delete Goal Tracking List</h3>
                            <p>Are you sure want to delete?</p>
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
                  {/* /Delete Goal Modal */}
                </div>
      );
   }


export default GoalTracking;
