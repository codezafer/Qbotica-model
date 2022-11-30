
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import  Addschedule from "../../../_components/modelbox/Addschedule"

const ShiftList = () => {
     
    const [data, setData] = useState([
      {id:1,shift_name:"10'o clock Shift",min_start_time:"09:00:00 am",start_time:"10:00:00 am",max_start_time:"10:30:00 am",
         min_end_time:'06:00:00 pm',end_time:"07:00:00 pm",max_end_time:"07:00:00 pm",break_time:"30 mins"},
         {id:2,shift_name:"10:30 shift",min_start_time:"10:00:00 am",start_time:"10:30:00 am",max_start_time:"11:00:00 am",
         min_end_time:'06:30:00 pm',end_time:"06:30:00 pm",max_end_time:"07:30:00 pm",break_time:"45 mins"},
         {id:3,shift_name:"Daily Rout",min_start_time:"06:00:00 am",start_time:"06:30:00 am",max_start_time:"06:00:00 am",
         min_end_time:'03:00:00 pm',end_time:"03:30:00 pm",max_end_time:"04:00:00 pm",break_time:"60 mins"},          
    ]);

    const columns = [  
        {
          title: '#',
          dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
        },      
        {
          title: 'Shift Name',
          dataIndex: 'shift_name',
            sorter: (a, b) => a.shift_name.length - b.shift_name.length,
        },
        {
          title: 'Min Start Time',
          dataIndex: 'min_start_time',
          sorter: (a, b) => a.min_start_time.length - b.min_start_time.length,
        },

        {
          title: 'Start Time',
          dataIndex: 'start_time',
          sorter: (a, b) => a.start_time.length - b.start_time.length,
        },

        {
          title: 'Max Start Time',
          dataIndex: 'max_start_time', 
          sorter: (a, b) => a.max_start_time.length - b.max_start_time.length,
        },
      
        {
          title: 'Min End Time',
          dataIndex: 'min_end_time',
          sorter: (a, b) => a.min_end_time.length - b.min_end_time.length,
        },
        {
          title: 'End Time',
          dataIndex: 'end_time',
          sorter: (a, b) => a.end_time.length - b.end_time.length,
        },
        {
          title: 'Max End Time',
          dataIndex: 'max_end_time',
          sorter: (a, b) => a.max_end_time.length - b.max_end_time.length,
        },
        {
          title: 'Break Time',
          dataIndex: 'break_time',
          sorter: (a, b) => a.break_time.length - b.break_time.length,
        },
        {
          title: 'Status',
          render: (text, record) => (
            <div className="action-label">
              <a className="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
                <i className="fa fa-dot-circle-o text-success" /> Active
              </a>
            </div>
            ),
        },
        {
          title: 'Action',
          render: (text, record) => (
            <div className="dropdown dropdown-action">
              <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_shift"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
            ),
        },
        
    
      ]
      
      return ( 
        <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <Helmet>
                <title>Shift List - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Shift List</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item"><a href="#">Employees</a></li>
                    <li className="breadcrumb-item active">Shift List</li>
                  </ul>
                </div>
                <div className="col-auto float-end ml-auto">
                  <a href="#" className="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_shift">Add Shifts</a>
                  <a href="#" className="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_schedule"> Assign Shifts</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Content Starts */}
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
            {/* /Content End */}
          </div>
          {/* /Page Content */}
        </div>
        {/* /Page Wrapper */}
        {/* Add Shift Modal */}
        <div id="add_shift" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Shift</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Shift Name <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Min Start Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Start Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>									
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Max Start Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>											
                      </div>
                    </div>		
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Min End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>									
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Max End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>											
                      </div>
                    </div>	
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Break Time (In Minutes) </label>
                        <input type="text" className="form-control" />											
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recurring Shift</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Repeat Every</label>
                        <select className="select">
                          <option value>1 </option>
                          <option value={1}>2</option>
                          <option value={2}>3</option>
                          <option value={3}>4</option>
                          <option value={4}>5</option>
                          <option value={3}>6</option>
                        </select>
                        <label className="col-form-label">Week(s)</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group wday-box">
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="monday" className="days recurring" defaultChecked /><span className="checkmark">M</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="tuesday" className="days recurring" defaultChecked /><span className="checkmark">T</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="wednesday" className="days recurring" defaultChecked /><span className="checkmark">W</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="thursday" className="days recurring" defaultChecked /><span className="checkmark">T</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="friday" className="days recurring" defaultChecked /><span className="checkmark">F</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="saturday" className="days recurring" /><span className="checkmark">S</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="sunday" className="days recurring" /><span className="checkmark">S</span></label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">End On <span className="text-danger">*</span></label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Indefinite</label>
                      </div>
                    </div>								
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Add Tag </label>
                        <input type="text" className="form-control" />											
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Add Note </label>
                        <textarea className="form-control" defaultValue={""} />											
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
        {/* /Add Shift Modal */}
        {/* Edit Shift Modal */}
        <div id="edit_shift" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Shift</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Shift Name <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Min Start Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Start Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>									
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Max Start Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>											
                      </div>
                    </div>		
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Min End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>									
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Max End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>											
                      </div>
                    </div>	
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Break Time (In Minutes) </label>
                        <input type="text" className="form-control" />											
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Recurring Shift</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Repeat Every</label>
                        <select className="select">
                          <option value>1 </option>
                          <option value={1}>2</option>
                          <option value={2}>3</option>
                          <option value={3}>4</option>
                          <option value={4}>5</option>
                          <option value={3}>6</option>
                        </select>
                        <label className="col-form-label">Week(s)</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group wday-box">
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="monday" className="days recurring" defaultChecked /><span className="checkmark">M</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="tuesday" className="days recurring" defaultChecked /><span className="checkmark">T</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="wednesday" className="days recurring" defaultChecked /><span className="checkmark">W</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="thursday" className="days recurring" defaultChecked /><span className="checkmark">T</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="friday" className="days recurring" defaultChecked /><span className="checkmark">F</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="saturday" className="days recurring" /><span className="checkmark">S</span></label>
                        <label className="checkbox-inline"><input type="checkbox" defaultValue="sunday" className="days recurring" /><span className="checkmark">S</span></label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">End On <span className="text-danger">*</span></label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                        <label className="custom-control-label" htmlFor="customCheck4">Indefinite</label>
                      </div>
                    </div>								
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Add Tag </label>
                        <input type="text" className="form-control" />											
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Add Note </label>
                        <textarea className="form-control" defaultValue={""} />											
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
        {/* /Edit Shift Modal */}
        {/* Add Schedule Modal */}
       <Addschedule/>
        {/* /Add Schedule Modal */}
        {/* Delete Shift Modal */}
        <div className="modal custom-modal fade" id="delete_employee" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Shift</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div className="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Employee Modal */}
      </>
        );
   
}

export default ShiftList;
