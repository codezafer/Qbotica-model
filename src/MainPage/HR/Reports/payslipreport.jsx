
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Avatar_03,Avatar_04} from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const PayslipReport = () => {

  const [data, setData] = useState([
    {id:1,image:Avatar_03,name:"John Doe",role:"Web Developer",amount:"$200",paymentmonth:"Apr",paymentyear:"2019"},
         {id:2,image:Avatar_04,name:"Richard Miles",role:"Android Developer",amount:"$300",paymentmonth:"Dec",paymentyear:"2020"},
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
        title: 'Paid Amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount.length - b.amount.length,
      },

      {
        title: 'Payment Month',
        dataIndex: 'paymentmonth', 
        sorter: (a, b) => a.paymentmonth.length - b.paymentmonth.length,
      },  
      {
        title: 'Payment Year',
        dataIndex: 'paymentyear',
        sorter: (a, b) => a.paymentyear.length - b.paymentyear.length,
      },
      {
        title: 'Actions',
        render: (text, record) => (
          <a href="#" className="btn btn-sm btn-primary">PDF</a>
          ),
      },
    ]
      return ( 
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <Helmet>
                <title>Payslip Reports - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Payslip Reports</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                      <li className="breadcrumb-item active">Payslip Reports</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              {/* Content Starts */}
              {/* Search Filter */}
              <div className="row filter-row">
                <div className="col-sm-6 col-md-3">  
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">Employee Name</label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">  
                  <div className="form-group form-focus select-focus">
                    <div className="cal-icon">
                      <select className="form-control floating select">
                        <option>
                          Jan
                        </option>
                        <option>
                          Feb
                        </option>
                        <option>
                          Mar
                        </option>
                      </select>
                    </div>
                    <label className="focus-label">Month</label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">  
                  <div className="form-group form-focus select-focus">
                    <div className="cal-icon">
                      <select className="form-control floating select">
                        <option>
                          2018
                        </option>
                        <option>
                          2019
                        </option>
                        <option>
                          2020
                        </option>
                      </select>
                    </div>
                    <label className="focus-label">Year</label>
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
              {/* /Content End */}
            </div>
            {/* /Page Content */}
          </div>
          {/* /Page Wrapper */}
        </>
      );
}

export default PayslipReport;
