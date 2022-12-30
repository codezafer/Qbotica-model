//requisition

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table, Popconfirm, Space } from "antd";
import { DeleteTwoTone, EditTwoTone, } from "@ant-design/icons";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import { useSelector,useDispatch } from "react-redux";
import { getRequisitionData, deleteRequisitionData } from "../../../app/features/requisitionReducer";


const Requisition = () => {
  const [page, setPage] = useState(1);
  const {values} = useSelector((state) => state.jobs)
  const dispatch = useDispatch();
  const [requestStatus, setRequestStatus] = useState('idle')
  
  const load = requestStatus==='idle'

  useEffect(() => {
    if(load){
      try{
      setRequestStatus('pending')
      dispatch(getRequisitionData())
      } catch (err) {
        console.error('Failed to load the post', err)
    } finally {
        setRequestStatus('idle')
    }
    } 
  }, []);

  const dataWithDetails = values.map((details) => ({
    ...details,
    key: details.id,
    id: details.id,
    role: details.values.role,
    client: details.values.client,
    dateOfReq: details.values.dateOfReq,
    closingDate: details.values.closingDate,
    jobType: details.values.jobType,
  }));

  const handleDelete = (id) => {
    try {
      setRequestStatus('pending')
      dispatch(deleteRequisitionData({ id })).unwrap()
  } catch (err) {
      console.error('Failed to delete the post', err)
  } finally {
      setRequestStatus('idle')
  }
  }
 

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key:"index",
      align: "center",
      render:(value, item, index) => ((page - 1) * 10 + index + 1),
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Role",
      dataIndex: "role",
      editTable: true,
      align: "center",
      render: (_,record) => (
        <Link to={`/app/administrator/job-details/${record.id}`} >{record.role}</Link>
      ),
      sorter: (a, b) => a.role.length - b.role.length,
    },

    {
      title: "Client",
      dataIndex: "client",
      align: "center",
      sorter: (a, b) => a.client.length - b.client.length,
    },
    {
      title: "Start Date",
      dataIndex: "dateOfReq",
      align: "center",
    },

    {
      title: "Expiry Date",
      dataIndex: "closingDate",
      align: "center",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
      align: "center",
      // render: (text, record) => (
      //   <div className="dropdown action-label text-center">
      //     <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
      //       <i className={text==="Full Time" ? "fa fa-dot-circle-o text-info" : text==="Part Time" ?
      //        "fa fa-dot-circle-o text-success" : text==="Internship" ? "fa fa-dot-circle-o text-danger" :
      //         "fa fa-dot-circle-o text-danger" } /> {text}
      //     </a>
      //     <div className="dropdown-menu dropdown-menu-right">
      //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
      //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
      //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
      //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
      //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
      //     </div>
      // </div>
      //   ),
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   render: (text, record) => (
    //     <div className="dropdown action-label text-center">
    //     <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    //       <i className={text==="Open" ? "fa fa-dot-circle-o text-info" : text==="Closed" ?
    //          "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
    //     </a>
    //     <div className="dropdown-menu dropdown-menu-right">
    //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
    //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
    //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
    //     </div>
    //   </div>
    //     ),
    //   sorter: (a, b) => a.status.length - b.status.length,
    // },

    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="Are you sure want to delete ?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteTwoTone />
          </Popconfirm>
          <Link to={`/app/administrator/update-requisition/${record.id}`}>
            <EditTwoTone />
          </Link> 
        </Space>
      ),
    },
  ];
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Requisition - qBotica</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Requisition</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Requisition</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <Link
                to="/app/administrator/create-requisition"
                className="btn add-btn"
              >
                <i className="fa fa-plus" />
                Create
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: dataWithDetails.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                bordered
                dataSource={dataWithDetails}

                // rowKey={record => record.id}
                // onChange={this.handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Job Modal */}
      {/* <div id="add_job" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Job</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select className="select">
                        <option>-</option>
                        <option>Web Development</option>
                        <option>Application Development</option>
                        <option>IT Management</option>
                        <option>Accounts Management</option>
                        <option>Support Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Location</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No of Vacancies</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Age</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select className="select">
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                        <option>Remote</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="select">
                        <option>Open</option>
                        <option>Closed</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input type="text" className="form-control datetimepicker" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Expired Date</label>
                      <input type="text" className="form-control datetimepicker" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
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
      </div> */}
      {/* /Add Job Modal */}
      {/* Edit Job Modal */}
      {/* <div id="edit_job" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <button type="button" className="close" data-bs-dismiss="modal">×</button>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input className="form-control" type="text" defaultValue="Web Developer" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select className="select">
                        <option>-</option>
                        <option >Web Development</option>
                        <option>Application Development</option>
                        <option>IT Management</option>
                        <option>Accounts Management</option>
                        <option>Support Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Location</label>
                      <input className="form-control" type="text" defaultValue="California" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No of Vacancies</label>
                      <input className="form-control" type="text" defaultValue={5} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input className="form-control" type="text" defaultValue="2 Years" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Age</label>
                      <input className="form-control" type="text" defaultValue="-" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input type="text" className="form-control" defaultValue="32k" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input type="text" className="form-control" defaultValue="38k" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select className="select">
                        <option >Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                        <option>Remote</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="select">
                        <option >Open</option>
                        <option>Closed</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input type="text" className="form-control datetimepicker" defaultValue="3 Mar 2019" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Expired Date</label>
                      <input type="text" className="form-control datetimepicker" defaultValue="31 May 2019" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
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
      </div> */}
      {/* /Edit Job Modal */}
    </div>
  );
};

export default Requisition;
