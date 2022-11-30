/**
 * Signin Firebase
 */

import React, {useState} from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const LeaveType = () => {

    const [data, setData] = useState([
      {id:1,leavetype:"Medical Leave",leavedays:"12 days"},
      {id:2,leavetype:"Loss of Pay",leavedays:"-"},
      {id:3,leavetype:"Casual Leave",leavedays:"12 days"},
    ]);

    const columns = [
      {
        title: '#',
        dataIndex: 'id',
      },
      {
        title: 'Leave Type',
        dataIndex: 'leavetype',
        sorter: (a, b) => a.leavetype.length - b.leavetype.length,
      },

      {
        title: 'Leave Days',
        dataIndex: 'leavedays',
        sorter: (a, b) => a.leavedays.length - b.leavedays.length,
      },
      {
        title: 'Status',
        render: (text, record) => (
          <div className="dropdown action-label">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-dot-circle-o text-success" /> Active
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item"><i className="fa fa-dot-circle-o text-success" /> Active</a>
              <a href="#" className="dropdown-item"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
            </div>
          </div>
          ),
      },
      {
        title: 'Action',
        render: (text, record) => (
          <div className="dropdown dropdown-action text-end">
            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_leavetype"><i className="fa fa-pencil m-r-5" /> Edit</a>
              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5" /> Delete</a>
            </div>
          </div>
          ),
      },
    ]

      return ( 
        <div className="page-wrapper">
        <Helmet>
            <title>Leave Type - qBotica</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Leave Type</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Leave Type</li>
                </ul>
              </div>
              <div className="col-auto float-end ml-auto">
                <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_leavetype"><i className="fa fa-plus" /> Add Leave Type</a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                    <Table
                      pagination= { {total : data.length,
                      showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                      style = {{overflowX : 'auto'}}
                      columns={columns}                 
                      bordered
                      dataSource={data}
                      rowKey={record => record.id}
                      // onChange={this.handleTableChange}
                  />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Leavetype Modal */}
        <div id="add_leavetype" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Leave Type</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Leave Type <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Number of days <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Leavetype Modal */}
        {/* Edit Leavetype Modal */}
        <div id="edit_leavetype" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Leave Type</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Leave Type <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="Casual Leave" />
                  </div>
                  <div className="form-group">
                    <label>Number of days <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue={12} />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Leavetype Modal */}
        {/* Delete Leavetype Modal */}
        <div className="modal custom-modal fade" id="delete_leavetype" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Leave Type</h3>
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
        {/* /Delete Leavetype Modal */}
      </div>
      );
}

export default LeaveType;