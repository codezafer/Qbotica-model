
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_19, Avatar_29, Avatar_07, Avatar_06, Avatar_14, Avatar_18, Avatar_28, Avatar_13 } from "../../Entryfile/imagepath"
import  Editclient from "../../_components/modelbox/Editclient"


const Clients = () => {

  useEffect( ()=>{
    if($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });  
      return ( 
         <div className="page-wrapper">
            <Helmet>
                <title>Clients - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
         {/* Page Content */}
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row align-items-center">
               <div className="col">
                 <h3 className="page-title">Clients</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                   <li className="breadcrumb-item active">Clients</li>
                 </ul>
               </div>
               <div className="col-auto float-end ml-auto">
                 <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_client"><i className="fa fa-plus" /> Add Client</a>
                 <div className="view-icons">
                   <Link to="/app/employees/clients" className="grid-view btn btn-link active"><i className="fa fa-th" /></Link>
                   <Link to="/app/employees/clients-list" className="list-view btn btn-link"><i className="fa fa-bars" /></Link>
                 </div>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           {/* Search Filter */}
           <div className="row filter-row">
             <div className="col-sm-6 col-md-3">  
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Client ID</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">  
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Client Name</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3"> 
               <div className="form-group form-focus select-focus">
                 <select className="select floating"> 
                   <option>Select Company</option>
                   <option>Global Technologies</option>
                   <option>Delta Infotech</option>
                 </select>
                 <label className="focus-label">Company</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">  
               <a href="#" className="btn btn-success btn-block w-100"> Search </a>  
             </div>     
           </div>
           {/* Search Filter */}
           <div className="row staff-grid-row">
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_19} /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Global Technologies</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Barry Cuda</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link> 
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_29} /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Delta Infotech</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Tressa Wexler</Link></h5>
                 <div className="small text-muted">Manager</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img src={Avatar_07} alt="" /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Cream Inc</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Ruby Bartlett</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img src={Avatar_06} alt="" /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Wellware Company</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Misty Tison</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_14} /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Mustang Technologies</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Daniel Deacon</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_18} /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">International Software Inc</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Walter Weaver</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_28} /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Mercury Software Inc</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Amanda Warren</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
             <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
               <div className="profile-widget">
                 <div className="profile-img">
                   <Link to="/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_13} /></Link>
                 </div>
                 <div className="dropdown profile-action">
                   <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                     <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                   </div>
                 </div>
                 <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Carlson Tech</Link></h4>
                 <h5 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/client-profile">Betty Carlson</Link></h5>
                 <div className="small text-muted">CEO</div>
                 <Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</Link>
                 <Link to="/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
               </div>
             </div>
           </div>
         </div>
         {/* /Page Content */}
         {/* Add Client Modal */}
         <div id="add_client" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Client</h5>
                 <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Username <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Email <span className="text-danger">*</span></label>
                         <input className="form-control floating" type="email" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">  
                       <div className="form-group">
                         <label className="col-form-label">Client ID <span className="text-danger">*</span></label>
                         <input className="form-control floating" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Company Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="table-responsive m-t-15">
                     <table className="table table-striped custom-table">
                       <thead>
                         <tr>
                           <th>Module Permission</th>
                           <th className="text-center">Read</th>
                           <th className="text-center">Write</th>
                           <th className="text-center">Create</th>
                           <th className="text-center">Delete</th>
                           <th className="text-center">Import</th>
                           <th className="text-center">Export</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>Projects</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Tasks</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Chat</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Estimates</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Invoices</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Timing Sheets</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Submit</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Add Client Modal */}
         {/* Edit Client Modal */}
         <Editclient/>
         {/* /Edit Client Modal */}
         {/* Delete Client Modal */}
         <div className="modal custom-modal fade" id="delete_client" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Client</h3>
                   <p>Are you sure want to delete?</p>
                 </div>
                 <div className="modal-btn delete-action">
                   <div className="row">
                     <div className="col-6">
                       <a href="" className="btn btn-primary continue-btn">Delete</a>
                     </div>
                     <div className="col-6">
                       <a href="" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Delete Client Modal */}
       </div>
      );
}

export default Clients;
