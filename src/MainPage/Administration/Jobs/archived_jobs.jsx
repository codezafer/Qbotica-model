/**
 * Signin Firebase
 */

 import React, { useState,useEffect } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import UserDashboardHeader from "./userdashboardheader"
 import { Table } from 'antd';
 import 'antd/dist/antd.css';
 import {itemRender,onShowSizeChange} from "../../paginationfunction"
 import "../../antdstyle.css"
 
 const ArchivedJobs = () => {
  
      const [data, setData] = useState([
        {id:1,jobtitle:"Web Developer",department:"Development",startdate:"1 Jan 2013",expirydate:"31 May 2019",jobtype:"Full Time",status:"Open"},
        {id:2,jobtitle:"Web Designer",department:"Designing",startdate:"18 Mar 2014",expirydate:"31 May 2019",jobtype:"Part Time",status:"Closed"},
        {id:3,jobtitle:"Android Developer",department:"Android",startdate:"1 Apr 2014",expirydate:"31 May 2019",jobtype:"Internship",status:"Cancelled"},
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
          title: 'Job Title',
          dataIndex: 'jobtitle',
          render: (text, record) => (            
              <Link to="/app/administrator/job-details">{text}</Link>
            ), 
            sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
        },
      
        {
          title: 'Department',
          dataIndex: 'department',
          sorter: (a, b) => a.department.length - b.department.length,
        },
        {
          title: 'Start Date',
          dataIndex: 'startdate',
          sorter: (a, b) => a.startdate.length - b.startdate.length,
        },
      
        {
          title: 'Expiry Date',
          dataIndex: 'expirydate',
          sorter: (a, b) => a.expirydate.length - b.expirydate.length,
        },
        {
          title: 'Job Type',
          dataIndex: 'jobtype',
          render: (text, record) => (
            <div className="action-label">
               <a className="btn btn-white btn-sm btn-rounded" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className={text==="Full Time" ? "fa fa-dot-circle-o text-info" : text==="Part Time" ?
                  "fa fa-dot-circle-o text-success" : text==="Internship" ? "fa fa-dot-circle-o text-danger" : 
                     "fa fa-dot-circle-o text-danger" } /> {text}
               </a>
            </div>
            ),
          sorter: (a, b) => a.jobtype.length - b.jobtype.length,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="action-label">
               <a className="btn btn-white btn-sm btn-rounded" href="#" data-bs-toggle="dropdown" aria-expanded="false">
               <i className={text==="Open" ? "fa fa-dot-circle-o text-info" : text==="Closed" ?
                 "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
               </a>
            </div>
            ),
          sorter: (a, b) => a.status.length - b.status.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
            <div className="dropdown dropdown-action">
               <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
               <div className="dropdown-menu dropdown-menu-right">
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
                  <title>Archived Jobs - qBotica</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">Archived Jobs</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                     <li className="breadcrumb-item ">Jobs</li>
                     <li className="breadcrumb-item">User Dashboard</li>
                     <li className="breadcrumb-item active">Archived Jobs</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             {/* Content Starts */}             
             <UserDashboardHeader/>
             {/* Search Filter */}
             <div className="row filter-row">
               <div className="col-sm-6 col-md-3">  
                 <div className="form-group form-focus select-focus">
                   <select className="select floating"> 
                     <option>Select</option>
                     <option>Development</option>
                     <option>Designing</option>
                     <option>Android</option>
                   </select>
                   <label className="focus-label">Department</label>
                 </div>
               </div>
               <div className="col-sm-6 col-md-3">  
                 <div className="form-group form-focus select-focus">
                   <select className="select floating"> 
                     <option>Select</option>
                     <option>Full Time</option>
                     <option>Part Time</option>
                     <option>Internship</option>
                   </select>
                   <label className="focus-label">Job Type</label>
                 </div>
               </div>
               <div className="col-sm-6 col-md-3"> 
                 <div className="form-group form-focus select-focus">
                   <select className="select floating"> 
                     <option>Select Designation</option>
                     <option>Web Developer</option>
                     <option>Web Designer</option>
                     <option>Android Developer</option>
                     <option>Ios Developer</option>
                   </select>
                   <label className="focus-label">Designation</label>
                 </div>
               </div>
               <div className="col-sm-6 col-md-3">  
                 <a href="#" className="btn btn-success btn-block"> Search </a>  
               </div>
             </div>
             {/* Search Filter */}
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
                    //  onChange={this.handleTableChange}
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
 
 export default ArchivedJobs;
 