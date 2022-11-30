/**
 * Signin Firebase
 */

 import React, { useState,useEffect } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import {  Avatar_01 ,Avatar_02,Avatar_03 } from "../../../Entryfile/imagepath"

 import { Table } from 'antd';
 import 'antd/dist/antd.css';
 import {itemRender,onShowSizeChange} from "../../paginationfunction"
 import "../../antdstyle.css"
 
 const ScheduleTimings = () => {

      const [data, setData] = useState([
          {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",jobtitle:"Web Designer"},
          {id:2,image:Avatar_01,name:"Richard Miles",role:"Web Developer",jobtitle:"Web Developer"},
          {id:3,image:Avatar_03,name:"John Smith",role:"Android Developer",jobtitle:"Android Developer"},
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
          title: 'User Available Timings',
          dataIndex: 'status',
          render: (text, record) => (
            <p><b>11-03-2020</b> - 11:00 AM-12:00 PM<br /><b>12-03-2020</b> - 10:00 AM-11:00 AM<br /><b>01-01-1970</b> - 10:00 AM-11:00 AM<br /></p>
         ),
          sorter: (a, b) => a.status.length - b.status.length,
        },  
        {
          title: 'Schedule timing',
          render: (text, record) => (
               <div className="action-label text-center">
                  <a className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#edit_job" href="#">
                     Schedule Time
                  </a>
               </div>
            ),  
        },   
    
      ]
       return ( 
         <>
         {/* Page Wrapper */}
         <div className="page-wrapper">
            <Helmet>
                  <title>Schedule timing - qBotica</title>
                  <meta name="description" content="Login page"/>					
            </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row align-items-center">
                 <div className="col-12">
                   <h3 className="page-title">Schedule timing</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                     <li className="breadcrumb-item">Jobs</li>
                     <li className="breadcrumb-item active">Schedule timing</li>
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
                    //  onChange={this.handleTableChange}
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
                   <h5 className="modal-title">Edit</h5>
                   <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <form>
                     <div className="row">
                       <div className="col-md-6">
                         <div className="form-group">
                           <label>Schedule Date 1</label>
                           <input type="text" className="form-control datetimepicker" defaultValue="3 Mar 2019" />
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="form-group">
                           <label>Select Time</label>
                           <select className="select" defaultChecked="12">
                             <option>Select Time</option>
                             <option value="12">12:00 AM-01:00 AM</option>
                             <option>01:00 AM-02:00 AM</option>
                             <option>02:00 AM-03:00 AM</option>
                             <option>03:00 AM-04:00 AM</option>
                             <option>04:00 AM-05:00 AM</option>
                             <option>05:00 AM-06:00 AM</option>
                           </select>
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="form-group">
                           <label>Schedule Date 2</label>
                           <input type="text" className="form-control datetimepicker" defaultValue="3 Mar 2019" />
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="form-group">
                           <label>Select Time</label>
                           <select className="select" defaultValue="12">
                             <option>Select Time</option>
                             <option value="12">12:00 AM-01:00 AM</option>
                             <option>01:00 AM-02:00 AM</option>
                             <option>02:00 AM-03:00 AM</option>
                             <option>03:00 AM-04:00 AM</option>
                             <option>04:00 AM-05:00 AM</option>
                             <option>05:00 AM-06:00 AM</option>
                           </select>
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="form-group">
                           <label>Schedule Date 3</label>
                           <input type="text" className="form-control datetimepicker" defaultValue="3 Mar 2019" />
                         </div>
                       </div>
                       <div className="col-md-6">
                         <div className="form-group">
                           <label>Select Time</label>
                           <select className="select" defaultValue="12">
                             <option>Select Time</option>
                             <option value="12">12:00 AM-01:00 AM</option>
                             <option>01:00 AM-02:00 AM</option>
                             <option>02:00 AM-03:00 AM</option>
                             <option>03:00 AM-04:00 AM</option>
                             <option>04:00 AM-05:00 AM</option>
                             <option>05:00 AM-06:00 AM</option>
                           </select>
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
           <div className="modal custom-modal fade" id="delete_job" role="dialog">
             <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                 <div className="modal-body">
                   <div className="form-header">
                     <h3>Delete</h3>
                     <p>Are you sure want to delete?</p>
                   </div>
                   <div className="modal-btn delete-action">
                     <div className="row">
                       <div className="col-6">
                         <a className="btn btn-primary continue-btn">Delete</a>
                       </div>
                       <div className="col-6">
                         <a data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* /Delete Job Modal */}
         </div>
         {/* /Page Wrapper */}
         </>
       );
 }
 
 export default ScheduleTimings;
 