/**
 * Signin Firebase
 */

 import React, { useState,useEffect } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import {  Avatar_01 ,Avatar_02,Avatar_03 } from "../../../Entryfile/imagepath"
 import  Deletejob from "../../../_components/modelbox/Deletejob"
 import { Table } from 'antd';
 import 'antd/dist/antd.css';
 import {itemRender,onShowSizeChange} from "../../paginationfunction"
 import "../../antdstyle.css"
 
 const ManagedResumes = () => {

      const [data, setData] = useState([
        {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",jobtitle:"Web Designer",department:"Development",startdate:"1 Jan 2013",expirydate:"31 May 2019",jobtype:"Full Time",status:"Open",applicants:"3 Candidates"},
        {id:2,image:Avatar_01,name:"Richard Miles",role:"Web Developer",jobtitle:"Web Developer",department:"Designing",startdate:"18 Mar 2014",expirydate:"31 May 2019",jobtype:"Part Time",status:"Closed",applicants:"2 Candidates"},
        {id:3,image:Avatar_03,name:"John Smith",role:"Android Developer",jobtitle:"Android Developer",department:"Android",startdate:"1 Apr 2014",expirydate:"31 May 2019",jobtype:"Internship",status:"Cancelled",applicants:"1 Candidates"},
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
         title: 'Name',
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
            <div className="dropdown action-label text-center">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className={text==="Full Time" ? "fa fa-dot-circle-o text-info" : text==="Part Time" ?
                 "fa fa-dot-circle-o text-success" : text==="Internship" ? "fa fa-dot-circle-o text-danger" : 
                  "fa fa-dot-circle-o text-danger" } /> {text}
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
              </div>
          </div>
            ),
          sorter: (a, b) => a.jobtype.length - b.jobtype.length,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className={text==="Open" ? "fa fa-dot-circle-o text-info" : text==="Closed" ?
                 "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
            </div>
          </div>
            ),
          sorter: (a, b) => a.status.length - b.status.length,
        },
        {
          title: 'Resume',
          dataIndex: 'applicants',
          render: (text, record) => (
            <a className="btn btn-sm btn-primary"><i className="fa fa-download mr-1" /> Download</a>
            ),
          sorter: (a, b) => a.applicants.length - b.applicants.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
              <div className="dropdown dropdown-action text-end">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                  <title>Manage Resumes - qBotica</title>
                  <meta name="description" content="Login page"/>					
            </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row align-items-center">
                 <div className="col-12">
                   <h3 className="page-title">Manage Resumes</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                     <li className="breadcrumb-item">Jobs</li>
                     <li className="breadcrumb-item active">Manage Resumes</li>
                   </ul>
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
           {/* Edit Job Modal */}
           <div id="edit_job" className="modal custom-modal fade" role="dialog">
             <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
                           <select className="select" defaultValue='Web'>
                             <option>-</option>
                             <option value="Web">Web Development</option>
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
                           <select className="select" defaultValue="Full">
                             <option value="Full">Full Time</option>
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
                           <select className="select" defaultValue="Open">
                             <option value="Open">Open</option>
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
           </div>
           {/* /Edit Job Modal */}
           {/* Delete Job Modal */}
           <Deletejob/>
           {/* /Delete Job Modal */}
         </div>
         {/* /Page Wrapper */}
         </>
       );
 }
 
 export default ManagedResumes;
 