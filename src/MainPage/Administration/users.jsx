/**
 * Signin Firebase
 */

import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_01, Avatar_02, Avatar_03, Avatar_04, Avatar_05,Avatar_06,Avatar_07,
        Avatar_08,Avatar_09,Avatar_10,Avatar_11,Avatar_12 } from '../../Entryfile/imagepath';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"
import  Adduser from "../../_components/modelbox/Adduser"

const Users = () => {

  const [data, setData] = useState([
    {id:1,name:"Bernardo Galaviz",image:Avatar_01,email:"bernardogalaviz@example.com",company:"Global Technologies",created_date:"5 Jan 2019",role:"Client"},
    {id:2,name:"Catherine Manseau",image:Avatar_02,email:"catherinemanseau@example.com",company:"Dreamguy's Technologies",created_date:"5 Jan 2019",role:"Admin"},
    {id:3,name:"Jeffery Lalor",image:Avatar_03,email:"jefferrylalorr@example.com",company:"Dreamguy's Technologies",created_date:"5 Jan 2019",role:"Employee"},
    {id:4,name:"Jeffrey Warden",image:Avatar_04,email:"jeffreywarden@example.com",company:"Global Technologies",created_date:"5 Jan 2019",role:"Client"},
    {id:5,name:"John Due",image:Avatar_05,email:"johndue@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:6,name:"John Smith",image:Avatar_06,email:"johnsmith@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:7,name:"Lesley Grauer",image:Avatar_07,email:"lesleygrauer@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:8,name:"Loren Gatlin",image:Avatar_08,email:"lorengatlin@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:9,name:"Mike Litorus",image:Avatar_09,email:"mikelitorus@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:10,name:"Richard Miles",image:Avatar_10,email:"richardmiles@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:11,name:"Tarah Shropshire",image:Avatar_11,email:"tarahshropshire@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
    {id:12,name:"Wilmer Deluna",image:Avatar_12,email:"wilmerdeluna@example.com",company:"Dreamguy's Technologies",created_date:"14 Jan 2019",role:"Employee"},
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
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
      },

      {
        title: 'Company',
        dataIndex: 'company', 
        sorter: (a, b) => a.company.length - b.company.length,
      },
    
      {
        title: 'Created Date',
        dataIndex: 'created_date',
        sorter: (a, b) => a.created_date.length - b.created_date.length,
      },
      {
        title: 'Role',
        dataIndex: 'role',
        render: (text, record) => (
            <span className={text ==="Admin" ? "badge bg-inverse-danger" :  "badge bg-inverse-success" }
           >{text}</span>
          ),
        sorter: (a, b) => a.role.length - b.role.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
              <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
          ),
      },
    ]
      return ( 
            <div className="page-wrapper">
              <Helmet>
                 <title>Users - qBotica</title>
                 <meta name="description" content="Login page"/>					
              </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Users</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item active">Users</li>
                      </ul>
                    </div>
                    <div className="col-auto float-end ml-auto">
                      <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_user"><i className="fa fa-plus" /> Add User</a>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                {/* Search Filter */}
                <div className="row filter-row">
                  <div className="col-sm-6 col-md-3">  
                    <div className="form-group form-focus">
                      <input type="text" className="form-control floating" />
                      <label className="focus-label">Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3"> 
                    <div className="form-group form-focus select-focus">
                      <select className="select floating"> 
                        <option>Select Company</option>
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                      </select>
                      <label className="focus-label">Company</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3"> 
                    <div className="form-group form-focus select-focus">
                      <select className="select floating"> 
                        <option>Select Roll</option>
                        <option>Web Developer</option>
                        <option>Web Designer</option>
                        <option>Android Developer</option>
                        <option>Ios Developer</option>
                      </select>
                      <label className="focus-label">Role</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">  
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
                        // onChange={this.handleTableChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Content */}
              {/* Add User Modal */}

              < Adduser/>

              {/* /Add User Modal */}
              {/* Edit User Modal */}
              <div id="edit_user" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit User</h5>
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>First Name <span className="text-danger">*</span></label>
                              <input className="form-control" defaultValue="John" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input className="form-control" defaultValue="Doe" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Username <span className="text-danger">*</span></label>
                              <input className="form-control" defaultValue="johndoe" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Email <span className="text-danger">*</span></label>
                              <input className="form-control" defaultValue="johndoe@example.com" type="email" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input className="form-control" defaultValue={9876543210} type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select">
                                <option>Admin</option>
                                <option>Client</option>
                                <option >Employee</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Company</label>
                              <select className="select">
                                <option>Global Technologies</option>
                                <option>Delta Infotech</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">  
                            <div className="form-group">
                              <label>Employee ID <span className="text-danger">*</span></label>
                              <input type="text" defaultValue="FT-0001" className="form-control floating" />
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive m-t-15">
                          <table className="table table-striped custom-table">
                            <thead>
                              <tr>
                                <th>Module Permission</th>
                                <th className="text-center">Read</th>
                                <th className="text-center">Write</th>
                                <th className="text-center">Create</th>
                                <th className="text-center">Delete</th>
                                <th className="text-center">Import</th>
                                <th className="text-center">Export</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Employee</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Holidays</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Leaves</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Events</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Edit User Modal */}
              {/* Delete User Modal */}
              <div className="modal custom-modal fade" id="delete_user" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-header">
                        <h3>Delete User</h3>
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
              {/* /Delete User Modal */}
            </div>

      );
  }

export default Users;
