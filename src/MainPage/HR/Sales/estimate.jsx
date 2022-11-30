
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const Estimates = () => {
  const [data, setData] = useState([
    {id:1,invoicenumber:"EST-0001",client:"	Global Technologies",createddate:"11 Mar 2019",duedate:"11 Mar 2019",amount:"2099",status:"Accepted"},
         {id:2,invoicenumber:"EST-0002",client:"Delta Infotech",createddate:"11 Mar 2019",duedate:"11 Mar 2019",amount:"2099",status:"Declined"},         
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
        title: 'Estimate Number',
        dataIndex: 'invoicenumber',
        render: (text, record) => (
          <Link to="/app/sales/estimatesview">{text}</Link>
          ),
        sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
      },     
      {
        title: 'Client',
        dataIndex: 'client',
        sorter: (a, b) => a.client.length - b.client.length,
      },

      {
        title: 'Estimate Date',
        dataIndex: 'createddate', 
        sorter: (a, b) => a.createddate.length - b.createddate.length,
      },
      {
        title: 'Expiry Date',
        dataIndex: 'duedate',
          sorter: (a, b) => a.duedate.length - b.duedate.length,
      },    
      {
        title: 'Amount',
        dataIndex: 'amount',
        render: (text, record) => (
        <span>$ {text}</span>
          ),
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
        <span className={text==="Accepted" ? "badge bg-inverse-success" : "badge bg-inverse-info"}>{text}</span>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
                 <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/app/sales/editestimates"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_estimate"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                  </div>
            </div>
          ),
      },
    ]
      return (         
      <div className="page-wrapper">
        <Helmet>
            <title>Estimates - qBotica</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Estimates</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Estimates</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <Link to="/app/sales/createestimates" className="btn add-btn"><i className="fa fa-plus" /> Create Estimate</Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">  
            <div className="form-group form-focus select-focus">
              <div>
                <input className="form-control floating datetimepicker" type="date" />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">  
            <div className="form-group form-focus select-focus">
              <div>
                <input className="form-control floating datetimepicker" type="date" />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3"> 
            <div className="form-group form-focus select-focus">
              <select className="select floating"> 
                <option>Select Status</option>
                <option>Accepted</option>
                <option>Declined</option>
                <option>Expired</option>
              </select>
              <label className="focus-label">Status</label>
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
      {/* Delete Estimate Modal */}
      <div className="modal custom-modal fade" id="delete_estimate" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Estimate</h3>
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
      {/* /Delete Estimate Modal */}
    </div>
      );
   
}

export default Estimates;
