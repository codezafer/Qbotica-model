
import React, { useEffect,useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_02 } from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const ProvidentFund = () => {
  const [data, setData] = useState([
    {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",fundtype:"Percentage of Basic Salary",employeeshare:"2%",organizationshare:'2%',status:"Pending"},
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
          title: 'Employee Name',
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
          title: 'Provident Fund Type',
          dataIndex: 'fundtype',
          sorter: (a, b) => a.fundtype.length - b.fundtype.length,
        },
        {
          title: 'Employee Share',
          dataIndex: 'employeeshare', 
          sorter: (a, b) => a.employeeshare.length - b.employeeshare.length,
        },
        {
          title: 'Organization Share',
          dataIndex: 'organizationshare', 
          sorter: (a, b) => a.organizationshare.length - b.organizationshare.length,
        },
        {
          title: 'Status',
          dataIndex: 'status', 
          render: (text, record) => (
            <div className="dropdown action-label">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className={text === "Pending" ?"fa fa-dot-circle-o text-danger" : "fa fa-dot-circle-o text-success"} /> {text}
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
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
                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_pf"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_pf"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
              </div>
            ),
        },        
      ]
      return ( 
        
      <div className="page-wrapper">
        <Helmet>
            <title>Provident Fund - qBotica</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Provident Fund</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Provident Fund</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_pf"><i className="fa fa-plus" /> Add Provident Fund</a>
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
      {/* Add PF Modal */}
      <div id="add_pf" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Provident Fund</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee Name</label>
                      <select className="form-control select">
                        <option value={3}>John Doe (FT-0001)</option>
                        <option value={23}>Richard Miles (FT-0002)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Provident Fund Type</label>
                      <select className="form-control select">
                        <option value="Fixed Amount">Fixed Amount</option>
                        <option value="Percentage of Basic Salary">Percentage of Basic Salary</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="show-fixed-amount">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Employee Share (Amount)</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Organization Share (Amount)</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="show-basic-salary">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Employee Share (%)</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Organization Share (%)</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" rows={4} defaultValue={""} />
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
      {/* /Add PF Modal */}
      {/* Edit PF Modal */}
      <div id="edit_pf" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Provident Fund</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Employee Name</label>
                      <select className="form-control select">
                        <option value={3}>John Doe (FT-0001)</option>
                        <option value={23}>Richard Miles (FT-0002)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Provident Fund Type</label>
                      <select className="form-control select">
                        <option value="Fixed Amount">Fixed Amount</option>
                        <option value="Percentage of Basic Salary">Percentage of Basic Salary</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="show-fixed-amount">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Employee Share (Amount)</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Organization Share (Amount)</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="show-basic-salary">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Employee Share (%)</label>
                            <input className="form-control" type="text" defaultValue="2%" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Organization Share (%)</label>
                            <input className="form-control" type="text" defaultValue="2%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" rows={4} defaultValue={""} />
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
      {/* /Edit PF Modal */}
      {/* Delete PF Modal */}
      <div className="modal custom-modal fade" id="delete_pf" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Provident Fund</h3>
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
      {/* /Delete PF Modal */}
    </div>
      );
   
}

export default ProvidentFund;
