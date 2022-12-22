/**
 * Signin Firebase
 */

 import React from 'react';
 import { Helmet } from "react-helmet"; 
 import { Link } from 'react-router-dom';
import { Avatar_02,Avatar_09,Avatar_10  } from "../../../Entryfile/imagepath";
import { Line } from "react-chartjs-2";
 import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    
    );


 const JobsDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    legend: {
      display: false
    },
    datasets: [
      
      {
        label: 'UI Developer',
				data: [20,	10,	5,	5,	20],
        lineTension:0.2,
				fill: false,
				borderColor: '#373651',
				backgroundColor: '#373651',
				borderWidth: 1
      },
      {
				label: 'Android',
				data: [2,	2,	3,	4,	1],
				fill: false,
        lineTension:0.2,
        legend: false,
				borderColor: '#E65A26',
				backgroundColor: '#E65A26',
				borderWidth: 1
			},
      {
				label: 'Web Designing',
				data: [1,	3,	6,	8,	10],
				fill: false,
        lineTension:0.2,
				borderColor: '#a1a1a1',
				backgroundColor: '#a1a1a1',
				borderWidth: 1
			}
    ]
    
  };
       return ( 
         <>
         {/* Page Wrapper */}
         <div className="page-wrapper">
              <Helmet>
                  <title>Job Dashboard - qBotica</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">Job Dashboard</h3>
                   <ul className="breadcrumb">
                     {/* <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                     <li className="breadcrumb-item">Jobs</li> */}
                     <li className="breadcrumb-item active">Job Dashboard</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <div className="row">
               <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                 <div className="card dash-widget">
                   <div className="card-body">
                     <span className="dash-widget-icon"><i className="fa fa-briefcase" /></span>
                     <div className="dash-widget-info">
                       <h3>110</h3>
                       <span>Jobs</span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                 <div className="card dash-widget">
                   <div className="card-body">
                     <span className="dash-widget-icon"><i className="fa fa-users" /></span>
                     <div className="dash-widget-info">
                       <h3>40</h3>
                       <span>Job Seekers</span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                 <div className="card dash-widget">
                   <div className="card-body">
                     <span className="dash-widget-icon"><i className="fa fa-user" /></span>
                     <div className="dash-widget-info">
                       <h3>374</h3>
                       <span>Employees</span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                 <div className="card dash-widget">
                   <div className="card-body">
                     <span className="dash-widget-icon"><i className="fa fa-clipboard" /></span>
                     <div className="dash-widget-info">
                       <h3>220</h3>
                       <span>Applications</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-12">
                 <div className="row">
                   <div className="col-md-6 text-center d-flex">
                     <div className="card flex-fill">
                       <div className="card-body">
                         <h3 className="card-title">Overview</h3>                       
                         <Line data={data} /> 
                       </div>
                     </div>
                   </div>
                   <div className="col-md-6 d-flex">
                     <div className="card flex-fill">
                       <div className="card-body">
                         <h3 className="card-title text-center">Latest Jobs</h3>
                         <ul className="list-group">
                           <li className="list-group-item list-group-item-action">UI Developer <span className="float-end text-sm text-muted">1 Hours ago</span></li>
                           <li className="list-group-item list-group-item-action">Android Developer <span className="float-end text-sm text-muted">1 Days ago</span></li>
                           <li className="list-group-item list-group-item-action">IOS Developer<span className="float-end text-sm text-muted">2 Days ago</span></li>
                           <li className="list-group-item list-group-item-action">PHP Developer<span className="float-end text-sm text-muted">3 Days ago</span></li>
                           <li className="list-group-item list-group-item-action">UI Developer<span className="float-end text-sm text-muted">3 Days ago</span></li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-12">
                 <div className="card card-table">
                   <div className="card-header">
                     <h3 className="card-title mb-0">Applicants List</h3>
                   </div>
                   <div className="card-body">
                     <div className="table-responsive">
                       <table className="table table-nowrap custom-table mb-0">
                         <thead>
                           <tr>
                             <th>#</th>
                             <th>Name</th>
                             <th>Job Title</th>
                             <th>Departments</th>
                             <th>Start Date</th>
                             <th>Expire Date</th>
                             <th className="text-center">Job Types</th>
                             <th className="text-center">Status</th>
                             <th className="text-center">Resume</th>
                             <th className="text-center">Actions</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>1</td>
                             <td>
                               <h2 className="table-avatar">
                                 <Link to="/app/profile/employee-profile/profile" className="avatar"><img src={Avatar_02} /></Link>
                                 <Link to="/app/profile/employee-profile/profile">John Doe <span>Web Designer</span></Link>
                               </h2>
                             </td>
                             <td><Link to="/app/administrator/job-details">Web Developer</Link></td>
                             <td>Development</td>
                             <td>3 Mar 2019</td>
                             <td>31 May 2019</td>
                             <td className="text-center">
                               <div className="dropdown action-label">
                                 <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa fa-dot-circle-o text-danger" /> Full Time
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
                                 </div>
                               </div>
                             </td>
                             <td className="text-center">
                               <div className="dropdown action-label">
                                 <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa fa-dot-circle-o text-danger" /> Open
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                                 </div>
                               </div>
                             </td>
                             <td className="text-center"><a href="" className="btn btn-sm btn-primary"><i className="fa fa-download mr-1" /> Download</a></td>
                             <td className="text-center">
                               <div className="dropdown dropdown-action">
                                 <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                   <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                 </div>
                               </div>
                             </td>
                           </tr>
                           <tr>
                             <td>2</td>
                             <td>
                               <h2 className="table-avatar">
                                 <Link to="/app/profile/employee-profile/profile" className="avatar"><img src={Avatar_09} /></Link>
                                 <Link to="/app/profile/employee-profile/profile">Richard Miles <span>Web Developer</span></Link>
                               </h2>
                             </td>
                             <td><Link to="/app/administrator/job-details">Web Designer</Link></td>
                             <td>Designing</td>
                             <td>3 Mar 2019</td>
                             <td>31 May 2019</td>
                             <td className="text-center">
                               <div className="dropdown action-label">
                                 <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa fa-dot-circle-o text-success" /> Part Time
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
                                 </div>
                               </div>
                             </td>
                             <td className="text-center">
                               <div className="dropdown action-label">
                                 <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa fa-dot-circle-o text-success" /> Closed
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                                 </div>
                               </div>
                             </td>
                             <td className="text-center"><a href="" className="btn btn-sm btn-primary"><i className="fa fa-download mr-1" /> Download</a></td>
                             <td className="text-center">
                               <div className="dropdown dropdown-action">
                                 <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                   <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                 </div>
                               </div>
                             </td>
                           </tr>
                           <tr>
                             <td>3</td>
                             <td>
                               <h2 className="table-avatar">
                                 <Link to="/app/profile/employee-profile/profile" className="avatar"><img src={Avatar_10} /></Link>
                                 <Link to="/app/profile/employee-profile/profile">John Smith <span>Android Developer</span></Link>
                               </h2>
                             </td>
                             <td><Link to="/app/administrator/job-details">Android Developer</Link></td>
                             <td>Android</td>
                             <td>3 Mar 2019</td>
                             <td>31 May 2019</td>
                             <td className="text-center">
                               <div className="dropdown action-label">
                                 <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa fa-dot-circle-o text-danger" /> Internship
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
                                 </div>
                               </div>
                             </td>
                             <td className="text-center">
                               <div className="dropdown action-label">
                                 <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa fa-dot-circle-o text-danger" /> Cancelled
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                                   <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                                 </div>
                               </div>
                             </td>
                             <td className="text-center"><a href="" className="btn btn-sm btn-primary"><i className="fa fa-download mr-1" /> Download</a></td>
                             <td className="text-center">
                               <div className="dropdown dropdown-action">
                                 <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                   <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                 </div>
                               </div>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-12">
                 <div className="card card-table">
                   <div className="card-header">
                     <h3 className="card-title mb-0">Shortlist Candidates</h3>
                   </div>
                   <div className="card-body">
                     <div className="table-responsive">
                       <table className="table table-nowrap custom-table mb-0">
                         <thead>
                           <tr>
                             <th>#</th>
                             <th>Name</th>
                             <th>Job Title</th>
                             <th>Departments</th>
                             <th className="text-center">Status</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>
                               1
                             </td>
                             <td>
                               <h2 className="table-avatar">
                                 <Link to="/app/profile/employee-profile/profile" className="avatar"><img src={Avatar_02} /></Link>
                                 <Link to="/app/profile/employee-profile/profile">John Doe <span>Web Designer</span></Link>
                               </h2>
                             </td>
                             <td><Link to="/app/administrator/job-details">Web Designer</Link></td>
                             <td>Department</td>
                             <td className="text-center">
                               <div className="action-label">
                                 <a className="btn btn-white btn-sm btn-rounded" href="#">
                                   <i className="fa fa-dot-circle-o text-danger" />Offered
                                 </a>
                               </div>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               2
                             </td>
                             <td>
                               <h2 className="table-avatar">
                                 <Link to="/app/profile/employee-profile/profile" className="avatar"><img src={Avatar_09} /></Link>
                                 <Link to="/app/profile/employee-profile/profile">Richard Miles <span>Web Developer</span></Link>
                               </h2>
                             </td>
                             <td><Link to="/app/administrator/job-details">Web Developer</Link></td>
                             <td>Department</td>
                             <td className="text-center">
                               <div className="action-label">
                                 <a className="btn btn-white btn-sm btn-rounded" href="#">
                                   <i className="fa fa-dot-circle-o text-danger" />Offered
                                 </a>
                               </div>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               3
                             </td>
                             <td>
                               <h2 className="table-avatar">
                                 <Link to="/app/profile/employee-profile/profile" className="avatar"><img src={Avatar_10} /></Link>
                                 <Link to="/app/profile/employee-profile/profile">John Smith <span>Android Developer</span></Link>
                               </h2>
                             </td>
                             <td><Link to="/app/administrator/job-details">Android Developer</Link></td>
                             <td>Department</td>
                             <td className="text-center">
                               <div className="action-label">
                                 <a className="btn btn-white btn-sm btn-rounded" href="#">
                                   <i className="fa fa-dot-circle-o text-danger" />Offered
                                 </a>
                               </div>
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
           {/* /Page Content */}
         </div>
         {/* /Page Wrapper */}
         </>
       );
 }
 
 export default JobsDashboard;
 