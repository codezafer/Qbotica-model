/**
 * Signin Firebase
 */

 import React, { useEffect } from 'react';
 import { Helmet } from "react-helmet";
 
 const Requisition = () => {
   useEffect(() => {
     if ($('.select').length > 0) {
       $('.select').select2({
         minimumResultsForSearch: -1,
         width: '100%'
       });
     }
   });
   return (
     <div className="page-wrapper">
       <Helmet>
         <title>Requisition - HRMS Admin Template</title>
         <meta name="description" content="Login page" />
       </Helmet>
       {/* Page Content */}
       <div className="content container-fluid">
         <div className="row">
           <div className="col-md-8 offset-md-2">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">Requisition</h3>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <form>
               <div className="row">
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Requisition ID<span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Date of Requisition</label>
                     <input className="form-control " type="date" />
                   </div>
                 </div>
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Closing Date</label>
                     <input className="form-control " type="date" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Client<span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Role / Job Title</label>
                     <input className="form-control " type="text" />
                   </div>
                 </div>
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Job Type</label>
                     <input className="form-control " type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>Country</label>
                     <select className="form-control select">
                       <option>India</option>
                       <option>USA</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>City</label>
                     <select className="form-control select">
                       <option>Chennai</option>
                       <option>Bangalore</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>State/Province</label>
                     <select className="form-control select">
                       <option>Tamil Nadu</option>
                       <option>Karnataka</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>Postal Code</label>
                     <input className="form-control" type="text"/>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <p>CTC</p>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Min</label>
                     <input className="form-control" defaultValue="danielporter@example.com" type="number" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Max</label>
                     <input className="form-control" type="number" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-12">
                   <div className="form-group">
                     <label>Job Description</label>
                     <textarea className="form-control" type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-12">
                   <div className="form-group">
                     <label>Roles & Responsibilities</label>
                     <textarea className="form-control" type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-12">
                   <div className="form-group">
                     <label>Desired skills</label>
                     <textarea className="form-control" type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-4">
                 <div className="form-group">
                     <label>Work Type</label>
                     <select className="form-control select">
                       <option>From Office</option>
                       <option>WFM</option>
                       <option>Hybrid</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Elegible Criteria</label>
                     <input className="form-control " type="text" />
                   </div>
                 </div>
                 <div className="col-sm-4">
                   <div className="form-group">
                     <label>Good to add</label>
                     <input className="form-control " type="text" />
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
       {/* /Page Content */}
     </div>
   );
 }
 
 export default Requisition;