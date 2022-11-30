/**
 * Signin Firebase
 */

 import React, { useState,useEffect } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import  Deletejob from "../../../_components/modelbox/Deletejob"
 import { Table } from 'antd';
 import 'antd/dist/antd.css';
 import {itemRender,onShowSizeChange} from "../../paginationfunction"
 import "../../antdstyle.css"
 
 const ExperienceLevel = () => {

    const [data, setData] = useState([
        {id:1,experiannce:"1-2",status:"Active"},
        {id:2,experiannce:"1-3",status:"Active"},
        {id:3,experiannce:"4-7",status:"Active"},
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
          title: 'Experiance',
          dataIndex: 'experiannce',
          sorter: (a, b) => a.experiannce.length - b.experiannce.length,
        }, 
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="action-label">
               <a className="btn btn-white btn-sm btn-rounded">
               <i className="fa fa-dot-circle-o text-success" />{text}</a>
            </div> 
            ),
          sorter: (a, b) => a.status.length - b.status.length,
        },  
        {
          title: 'Actions',
          render: (text, record) => (
            <div className="dropdown dropdown-action text-center">
               <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
               <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                  <title>Experience Level - qBotica</title>
                  <meta name="description" content="Login page"/>					
            </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row align-items-center">
                 <div className="col">
                   <h3 className="page-title">Experience Level</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                     <li className="breadcrumb-item">Jobs</li>
                     <li className="breadcrumb-item active">Experience Level</li>
                   </ul>
                 </div>
                 <div className="col-auto float-end ml-auto">
                   <a href="#" data-bs-toggle="modal" data-bs-target="#add_employee" className="btn add-btn"> Add Experience Level</a>
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
           {/* Add Employee Modal */}
           <div id="add_employee" className="modal custom-modal fade" role="dialog">
             <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title">Add Experience Level</h5>
                   <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <form>
                     <div className="row">
                       <div className="col-sm-12">
                         <div className="form-group">
                           <label>Experience Level <span className="text-danger">*</span></label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                       <div className="col-sm-12">
                         <div className="form-group">
                           <label className="col-form-label">Status</label>
                           <select className="select">
                             <option>Select</option>
                             <option>Active</option>
                             <option>Inactive</option>
                           </select>
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
           {/* /Add Employee Modal */}
           {/* Edit Job Modal */}
           <div id="edit_job" className="modal custom-modal fade" role="dialog">
             <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title">Edit Candidates</h5>
                   <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <form>
                     <div className="row">
                       <div className="col-sm-12">
                         <div className="form-group">
                           <label>Experience Level <span className="text-danger">*</span></label>
                           <input className="form-control" type="text" defaultValue="1-3" />
                         </div>
                       </div>
                       <div className="col-sm-12">
                         <div className="form-group">
                           <label className="col-form-label">Status</label>
                           <select className="select" defaultValue="Active">
                             <option>Select</option>
                             <option value="Active">Active</option>
                             <option>Inactive</option>
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
           <Deletejob/>
           {/* /Delete Job Modal */}
         </div>
         {/* /Page Wrapper */}
         </>
       );
 }
 
 export default ExperienceLevel;
 