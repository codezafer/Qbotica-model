
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {  Avatar_01 ,Avatar_02   } from "../../../Entryfile/imagepath"

    import { Table } from 'antd';
    import 'antd/dist/antd.css';
    import {itemRender,onShowSizeChange} from "../../paginationfunction"
    import "../../antdstyle.css"

    const Timesheet = () => {
      const [data, setData] = useState([
        {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",date:"1 Jan 2013",projects:"Video Calling App",assignedhours:"20",hours:'12'
         ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."}, 
         {id:2,image:Avatar_01,name:"Richard Miles",role:"Android Developer",date:"1 Jan 2013",projects:"Project Management",assignedhours:"10",hours:'12'
         ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."},          
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
          title: 'Date',
          dataIndex: 'date',
          sorter: (a, b) => a.date.length - b.date.length,
        },

        {
          title: 'Projects',
          dataIndex: 'projects',
          sorter: (a, b) => a.projects.length - b.projects.length,
        },

        {
          title: 'Assigned Hours',
          dataIndex: 'assignedhours', 
          sorter: (a, b) => a.assignedhours.length - b.assignedhours.length,
        },
      
        {
          title: 'Hours',
          dataIndex: 'hours',
          sorter: (a, b) => a.hours.length - b.hours.length,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          render: (text, record) => (
              <span className="d-none d-sm-table-cell col-md-4">
               {text}
              </span>
            ),
          sorter: (a, b) => a.description.length - b.description.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
              <div className="dropdown dropdown-action text-end">
               <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                      <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                    </div>
              </div>
            ),
        },       
    
      ]
                        
      return ( 
        <div className="page-wrapper">
            <Helmet>
                <title>Timesheet - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Timesheet</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item active">Timesheet</li>
                      </ul>
                    </div>
                    <div className="col-auto float-end ml-auto">
                      <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_todaywork"><i className="fa fa-plus" /> Add Today Work</a>
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
                            onChange={console.log("change")}
                          />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Content */}
              {/* Add Today Work Modal */}
              <div id="add_todaywork" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add Today Work details</h5>
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Project <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Office Management</option>
                              <option>Project Management</option>
                              <option>Video Calling App</option>
                              <option>Hospital Administration</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-4">
                            <label>Deadline <span className="text-danger">*</span></label>
                            <div>
                              <input className="form-control" type="date" defaultValue="5 May 2019" readOnly />
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Total Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={100} readOnly />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Remaining Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={60} readOnly />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Date <span className="text-danger">*</span></label>
                            <div>
                              <input className="form-control datetimepicker" type="date" />
                            </div>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
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
              {/* /Add Today Work Modal */}
              {/* Edit Today Work Modal */}
              <div id="edit_todaywork" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Work Details</h5>
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Project <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Office Management</option>
                              <option>Project Management</option>
                              <option>Video Calling App</option>
                              <option>Hospital Administration</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-4">
                            <label>Deadline <span className="text-danger">*</span></label>
                            <div>
                              <input className="form-control" type="date" defaultValue="5 May 2019" readOnly />
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Total Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={100} readOnly />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Remaining Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={60} readOnly />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Date <span className="text-danger">*</span></label>
                            <div>
                              <input className="form-control datetimepicker" defaultValue="03/03/2019" type="date" />
                            </div>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={9} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Description <span className="text-danger">*</span></label>
                          <textarea rows={4} className="form-control" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."} />
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Edit Today Work Modal */}
              {/* Delete Today Work Modal */}
              <div className="modal custom-modal fade" id="delete_workdetail" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-header">
                        <h3>Delete Work Details</h3>
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
              {/* Delete Today Work Modal */}
            </div>
        );
  
}

export default Timesheet;
