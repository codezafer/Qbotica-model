
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Avatar_03,Avatar_04} from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const EmployeeReport = () => {
  
    const [data, setData] = useState([
      {id:1,image:Avatar_03,name:"John Doe",number:"#0001",employeetype:"Employee",email:"johndoe@example.com",
      department:"Design",designation:"UI Design",joiningdate:"20 Aug 2020",dob:"03 Mar 1992",martialstatus:"Married",
      gender:"Male", terminateddate:"-", relievingdate:"-",salary:"$20000",address:"1861 Bayonne Ave, Manchester Township, NJ, 08759",
      contactnumber:"9876543210",emergencycontactdetails:"7894561235", experience:"0 years 4 months and 9 days"   },
      
      {id:2,image:Avatar_04,name:"Richard Miles",number:"#0002",employeetype:"Employee",email:"richardmiles@example.com",
      department:"Android Developer",designation:"IT Support",joiningdate:"01 Jul 2020",dob:"05 Dec 1979",martialstatus:"Single",
      gender:"Male", terminateddate:"-", relievingdate:"-",salary:"$15000",address:"1861 Bayonne Ave, Manchester Township, NJ, 08759",
      contactnumber:"9876543210",emergencycontactdetails:"7894561235", experience:"0 years 5 months and 24 days"},
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
              <Link to="/app/profile/employee-profile">{text} <span>{record.number}</span></Link>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },            
      {
        title: 'Employee Type',
        dataIndex: 'employeetype',
        sorter: (a, b) => a.employeetype.length - b.employeetype.length,
      },      
      {
        title: 'Email',
        dataIndex: 'email',
        render: (text, record) => (            
            <p className="text-info">{text}</p>
          ), 
        sorter: (a, b) => a.email.length - b.email.length,
      },      
      {
        title: 'Department',
        dataIndex: 'department',
        sorter: (a, b) => a.department.length - b.department.length,
      },      
      {
        title: 'Designation',
        dataIndex: 'designation',
        sorter: (a, b) => a.designation.length - b.designation.length,
      },      
      {
        title: 'Joining Date',
        dataIndex: 'joiningdate',
        sorter: (a, b) => a.joiningdate.length - b.joiningdate.length,
      },      
      {
        title: 'DOB',
        dataIndex: 'dob',
        sorter: (a, b) => a.dob.length - b.dob.length,
      },      
      {
        title: 'Martial Status',
        dataIndex: 'martialstatus',
        sorter: (a, b) => a.martialstatus.length - b.martialstatus.length,
      },      
      {
        title: 'Gender',
        dataIndex: 'gender',
        sorter: (a, b) => a.gender.length - b.gender.length,
      },      
      {
        title: 'Terminated Date',
        dataIndex: 'terminateddate',
        sorter: (a, b) => a.terminateddate.length - b.terminateddate.length,
      },      
      {
        title: 'Relieving Date',
        dataIndex: 'relievingdate',
        sorter: (a, b) => a.relievingdate.length - b.relievingdate.length,
      },  
      {
        title: 'Salary',
        dataIndex: 'salary',
        sorter: (a, b) => a.salary.length - b.salary.length,
      },
    
      {
        title: 'Address',
        dataIndex: 'address',
        sorter: (a, b) => a.address.length - b.address.length,
      },
  
      {
        title: 'Contact Number',
        dataIndex: 'contactnumber',
        sorter: (a, b) => a.contactnumber.length - b.contactnumber.length,
      },

      {
        title: 'Emercency Contact Details',
        dataIndex: 'emergencycontactdetails', 
        sorter: (a, b) => a.emergencycontactdetails.length - b.emergencycontactdetails.length,
      },  
      {
        title: 'Experience',
        dataIndex: 'experience',
        sorter: (a, b) => a.experience.length - b.experience.length,
      },
      {
        title: 'Status',
        render: (text, record) => (
          <button className="btn btn-outline-success btn-sm">Active</button>
          ),
      },
    ]
      return ( 
        <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <Helmet>
                <title>Employee Reports - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Employee Report</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Employee Report</li>
                  </ul>
                </div>
                <div className="col-auto">
                  <a href="#" className="btn btn-primary">PDF</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Content Starts */}
            {/* Search Filter */}
            <div className="row filter-row mb-4">
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus">
                  <input className="form-control floating" type="text" />
                  <label className="focus-label">Employee</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option>Select Department</option>
                    <option>Designing</option>
                    <option>Development</option>
                    <option>Finance</option>
                    <option>Hr &amp; Finance</option>
                  </select>
                  <label className="focus-label">Department</label>
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
            {/* /Content End */}
          </div>
          {/* /Page Content */}
        </div>
        {/* /Page Wrapper */}
        </>
      );
}

export default EmployeeReport;
