/**
 * Signin Firebase
 */

import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Avatar_02} from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

const Resignation = () => {
  const [data, setData] = useState([
    {id:1,image:Avatar_02,name:"John Doe",department:"Web Development",reason:"Lorem ipsum dollar",noticedate :"09 Jan 2019",resignationdate:"09 Jan 2019"}        
  ]);
  
    const columns = [
      
      {
        title: '#',
        dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: 'Resigning Employee',
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
        title: 'Department',
        dataIndex: 'department',
        sorter: (a, b) => a.department.length - b.department.length,
      },

      {
        title: 'Reason',
        dataIndex: 'reason', 
        sorter: (a, b) => a.reason.length - b.reason.length,
      },
    
      {
        title: 'Notice Date',
        dataIndex: 'noticedate',
        sorter: (a, b) => a.noticedate.length - b.noticedate.length,
      },
      {
        title: 'Resignation Date',
        dataIndex: 'resignationdate',
        sorter: (a, b) => a.resignationdate.length - b.resignationdate.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
              <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_resignation"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_resignation"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            </div>
          ),
      },     
  
    ]
      return (             
      <div className="page-wrapper">
      <Helmet>
          <title>Resignation - qBotica</title>
          <meta name="description" content="Login page"/>					
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Resignation</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Resignation</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_resignation"><i className="fa fa-plus" /> Add Resignation</a>
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
      {/* Add Resignation Modal */}
      <div id="add_resignation" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Resignation</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Resigning Employee <span className="text-danger">*</span></label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Notice Date <span className="text-danger">*</span></label>
                  <div>
                    <input type="date" className="form-control datetimepicker" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Resignation Date <span className="text-danger">*</span></label>
                  <div>
                    <input type="date" className="form-control datetimepicker" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Reason <span className="text-danger">*</span></label>
                  <textarea className="form-control" rows={4} defaultValue={""} />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Resignation Modal */}
      {/* Edit Resignation Modal */}
      <div id="edit_resignation" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Resignation</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Resigning Employee <span className="text-danger">*</span></label>
                  <input className="form-control" type="text" defaultValue="John Doe" />
                </div>
                <div className="form-group">
                  <label>Notice Date <span className="text-danger">*</span></label>
                  <div>
                    <input type="date" className="form-control datetimepicker" defaultValue="28/02/2019" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Resignation Date <span className="text-danger">*</span></label>
                  <div>
                    <input type="date" className="form-control datetimepicker" defaultValue="28/02/2019" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Reason <span className="text-danger">*</span></label>
                  <textarea className="form-control" rows={4} defaultValue={""} />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Resignation Modal */}
      {/* Delete Resignation Modal */}
      <div className="modal custom-modal fade" id="delete_resignation" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Resignation</h3>
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
      {/* /Delete Resignation Modal */}
    </div>
      );
   
}

export default Resignation;
