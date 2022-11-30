
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const PaymentReport = () =>{

    const [data, setData] = useState([
      {id:1,transactionid:"834521",date:"2nd Dec 2020",clientname:"Dreams",paymentmethod:"Online",
      invoice:"INV0001",amount:"$4,329,970.7"},
      {id:2,transactionid:"834522",date:"2nd Dec 2020",clientname:"Dreams",paymentmethod:"Online",
      invoice:"INV0002",amount:"$2,329,970.7"},
    ]);

    const columns = [
           
      {
        title: '#',
        dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
      }, 
      {
        title: 'Transaction ID',
        dataIndex: 'transactionid',
        render: (text, record) => (            
          <a href="#">{text}</a>
          ), 
        sorter: (a, b) => a.transactionid.length - b.transactionid.length,
      },     
      {
        title: 'Date',
        dataIndex: 'date',
        sorter: (a, b) => a.date.length - b.date.length,
      },  
      {
        title: 'Client Name',
        dataIndex: 'clientname',
        sorter: (a, b) => a.clientname.length - b.clientname.length,
      },

      {
        title: 'Payment Method',
        dataIndex: 'paymentmethod', 
        sorter: (a, b) => a.paymentmethod.length - b.paymentmethod.length,
      },  
      {
        title: 'Invoice',
        dataIndex: 'invoice',
        render: (text, record) => (
          <a href="#">{text}</a>
          ),
        sorter: (a, b) => a.invoice.length - b.invoice.length,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
    ]
      return ( 
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <Helmet>
                <title>Payments Reports - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Payments Report</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                      <li className="breadcrumb-item active">Payments Report</li>
                    </ul>
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
          {/* /Page Wrapper */}
        </>
      );
}

export default PaymentReport;
