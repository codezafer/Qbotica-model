
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const InvoiceReport = () => {

    const [data, setData] = useState([
      {id:1,invoicenumber:"INV-0001",client:"	Global Technologies",createddate:"11 Mar 2019",duedate:"11 Mar 2019",amount:"2099",status:"Paid"},
      {id:2,invoicenumber:"INV-0002",client:"Delta Infotech",createddate:"11 Mar 2019",duedate:"11 Mar 2019",amount:"2099",status:"Sent"},
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
        title: 'Invoice Number',
        dataIndex: 'invoicenumber',
        render: (text, record) => (
          <Link to="/app/sales/invoices-view">#{text}</Link>
          ),
        sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
      },     
      {
        title: 'Client',
        dataIndex: 'client',
        sorter: (a, b) => a.client.length - b.client.length,
      },

      {
        title: 'Created Date',
        dataIndex: 'createddate', 
        sorter: (a, b) => a.createddate.length - b.createddate.length,
      },
      {
        title: 'Due Date',
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
        <span className={text==="Paid" ? "badge bg-inverse-success" : "badge bg-inverse-info"}>{text}</span>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/app/sales/invoices-edit"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                    <Link className="dropdown-item" to="/app/sales/invoices-view"><i className="fa fa-eye m-r-5" /> View</Link>
                    <a className="dropdown-item" href="#"><i className="fa fa-file-pdf-o m-r-5" /> Download</a>
                    <a className="dropdown-item" href="#"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                  </div>
            </div>
          ),
      },
    ]
      return ( 
          <div className="page-wrapper">
            <Helmet>
                <title>Invoice Report - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Invoice Report</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Invoice Report</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option>Select Client</option>
                    <option>Global Technologies</option>
                    <option>Delta Infotech</option>
                  </select>
                  <label className="focus-label">Client</label>
                </div>
              </div>
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
        </div>
      );
}

export default InvoiceReport;
