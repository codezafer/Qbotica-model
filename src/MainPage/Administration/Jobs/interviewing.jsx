/**
 * Signin Firebase
 */

 import React,{useEffect} from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import UserDashboardHeader from "./userdashboardheader"
 
 const Interviewing = () => {

  useEffect( ()=>{
    if($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });  
       return ( 
         <>
         {/* Page Wrapper */}
         <div className="page-wrapper">
              <Helmet>
                  <title>Interviewing - qBotica</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">Interviewing</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                     <li className="breadcrumb-item">Jobs</li>
                     <li className="breadcrumb-item">User Dashboard</li>
                     <li className="breadcrumb-item active">Interviewing</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             {/* Content Starts */}
             <UserDashboardHeader/>
             <div className="row">
               <div className="col-md-3">
                 <div className="card">
                   <div className="card-body">
                     <ul className="nav nav-tabs nav-tabs-solid nav-justified flex-column">
                       <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#home">Apptitude</a></li>
                       <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#menu1">Schedule Interview</a></li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="col-md-9">
                 <div className="card">
                   <div className="card-body">
                     <div className="tab-content">
                       <div id="home" className="tab-pane show active">
                         <div className="card-box">
                           <div className="table-responsive">
                             <table className="table table-striped custom-table mb-0">
                               <thead>
                                 <tr>
                                   <th>#</th>
                                   <th>Job Title</th>
                                   <th>Department</th>
                                   <th className="text-center">Job Type</th>
                                   <th className="text-center">Aptitude Test</th>
                                 </tr>
                               </thead>
                               <tbody>
                                 <tr>
                                   <td>1</td>
                                   <td><a href="#">Web Developer</a></td>
                                   <td>Development</td>
                                   <td className="text-center">
                                     <div className="action-label">
                                       <a className="btn btn-white btn-sm btn-rounded" href="#">
                                         <i className="fa fa-dot-circle-o text-danger" /> Full Time
                                       </a>
                                     </div>
                                   </td>
                                   <td className="text-center">
                                     <Link to="/app/administrator/job-aptitude" className="btn btn-primary aptitude-btn"><span>Click Here</span></Link>
                                   </td>
                                 </tr>
                                 <tr>
                                   <td>2</td>
                                   <td><a href="#">Web Developer</a></td>
                                   <td>Development</td>
                                   <td className="text-center">
                                     <div className="action-label">
                                       <a className="btn btn-white btn-sm btn-rounded" href="#">
                                         <i className="fa fa-dot-circle-o text-warning" /> Part Time
                                       </a>
                                     </div>
                                   </td>
                                   <td className="text-center">
                                     <Link to="/app/administrator/job-aptitude" className="btn btn-primary aptitude-btn"><span>Click Here</span></Link>
                                   </td>
                                 </tr>
                                 <tr>
                                   <td>2</td>
                                   <td><a href="#">Web Designing</a></td>
                                   <td>Development</td>
                                   <td className="text-center">
                                     <div className="action-label">
                                       <a className="btn btn-white btn-sm btn-rounded" href="#">
                                         <i className="fa fa-dot-circle-o text-warning" /> Part Time
                                       </a>
                                     </div>
                                   </td>
                                   <td className="text-center">
                                     <Link to="/app/administrator/job-aptitude" className="btn btn-primary aptitude-btn"><span>Click Here</span></Link>
                                   </td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                       </div>
                       <div id="menu1" className="tab-pane fade">
                         <div className="card-box">
                           <div className="table-responsive">
                             <table className="table table-striped custom-table mb-0">
                               <thead>
                                 <tr>
                                   <th>#</th>
                                   <th>Job Title</th>
                                   <th>Department</th>
                                   <th className="text-center">Job Type</th>
                                   <th className="text-center">Aptitude Test</th>
                                   <th className="text-center">Schedule Interview</th>
                                 </tr>
                               </thead>
                               <tbody>
                                 <tr>
                                   <td>1</td>
                                   <td><a href="#">Web Developer</a></td>
                                   <td>Development</td>
                                   <td className="text-center">
                                     <div className="action-label">
                                       <a className="btn btn-white btn-sm btn-rounded" href="#">
                                         <i className="fa fa-dot-circle-o text-danger" /> Full Time
                                       </a>
                                     </div>
                                   </td>
                                   <td className="text-center">
                                     <a href="" className="btn btn-primary disabled"><span>Selected</span></a>
                                   </td>
                                   <td className="text-center">
                                     <a href="" className="btn btn-primary aptitude-btn" data-bs-toggle="modal" data-bs-target="#selectMyTime"><span>Select Your Time Here</span></a>
                                   </td>
                                 </tr>
                                 <tr>
                                   <td>1</td>
                                   <td><a href="#">Web Designing</a></td>
                                   <td>Development</td>
                                   <td className="text-center">
                                     <div className="action-label">
                                       <a className="btn btn-white btn-sm btn-rounded" href="#">
                                         <i className="fa fa-dot-circle-o text-warning" /> Part Time
                                       </a>
                                     </div>
                                   </td>
                                   <td className="text-center">
                                     <a href="" className="btn btn-primary disabled"><span>Selected</span></a>
                                   </td>
                                   <td className="text-center">
                                     <a href="" className="btn btn-primary aptitude-btn" data-bs-toggle="modal" data-bs-target="#selectMyTime"><span>Select Your Time Here</span></a>
                                   </td>
                                 </tr>
                                 <tr>
                                   <td>1</td>
                                   <td><a href="#">Web Developer</a></td>
                                   <td>Development</td>
                                   <td className="text-center">
                                     <div className="action-label">
                                       <a className="btn btn-white btn-sm btn-rounded" href="#">
                                         <i className="fa fa-dot-circle-o text-warning" /> Part Time
                                       </a>
                                     </div>
                                   </td>
                                   <td className="text-center">
                                     <a href="" className="btn btn-primary disabled"><span>Selected</span></a>
                                   </td>
                                   <td className="text-center">
                                     <a href="" className="btn btn-primary aptitude-btn" data-bs-toggle="modal" data-bs-target="#selectMyTime"><span>Select Your Time Here</span></a>
                                   </td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               {/* /Content End */}
             </div>
             {/* /Page Content */}
           </div>
           {/* /Page Wrapper */}
         </div>
         </>
       );
 }
 
 export default Interviewing;
 