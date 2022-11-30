import React, {useEffect,useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_01,Avatar_02,Avatar_03,Avatar_04,Avatar_05,Avatar_11, Avatar_12,Avatar_09,
    Avatar_10, Avatar_08,Avatar_13,Avatar_16 } from "../../../Entryfile/imagepath"
import  Addemployee from "../../../_components/modelbox/Addemployee"
import  Editemployee from "../../../_components/modelbox/Editemployee"
import Header from '../../../initialpage/Sidebar/header'
import Sidebar from '../../../initialpage/Sidebar/sidebar'

const AllEmployees = () => {

  const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

    useEffect( ()=>{
      if($('.select').length > 0) {
        $('.select').select2({
          minimumResultsForSearch: -1,
          width: '100%'
        });
      }
    });  

      return ( 
    <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
      
      <Header onMenuClick={(value) => toggleMobileMenu()} />
      <Sidebar /> 
      <div className="page-wrapper">
        <Helmet>
            <title>Employee - qBotica</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Employee</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_employee"><i className="fa fa-plus" /> Add Employee</a>
              <div className="view-icons">
                <Link to="/app/employee/allemployees" className="grid-view btn btn-link active"><i className="fa fa-th" /></Link>
                <Link to="/app/employee/employees-list" className="list-view btn btn-link"><i className="fa fa-bars" /></Link>
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
              <label className="focus-label">Employee ID</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">  
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
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
            <a href="#" className="btn btn-success btn-block w-100"> Search </a>  
          </div>
        </div>
        {/* Search Filter */}
        <div className="row staff-grid-row">
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_02} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">John Doe</Link></h4>
              <div className="small text-muted">Web Designer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_09} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Richard Miles</Link></h4>
              <div className="small text-muted">Web Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_10} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">John Smith</Link></h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_05} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Mike Litorus</Link></h4>
              <div className="small text-muted">IOS Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_11} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Wilmer Deluna</Link></h4>
              <div className="small text-muted">Team Leader</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_12} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Jeffrey Warden</Link></h4>
              <div className="small text-muted">Web Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_13} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Bernardo Galaviz</Link></h4>
              <div className="small text-muted">Web Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_01} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Lesley Grauer</Link></h4>
              <div className="small text-muted">Team Leader</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_16} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Jeffery Lalor</Link></h4>
              <div className="small text-muted">Team Leader</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_04} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Loren Gatlin</Link></h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_03} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Tarah Shropshire</Link></h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
            <div className="profile-widget">
              <div className="profile-img">
                <Link to="/app/profile/employee-profile" className="avatar"><img src={Avatar_08} alt="" /></Link>
              </div>
              <div className="dropdown profile-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
              <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="/app/profile/employee-profile">Catherine Manseau</Link></h4>
              <div className="small text-muted">Android Developer</div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Employee Modal */}
     <Addemployee/>
      {/* /Add Employee Modal */}
      {/* Edit Employee Modal */}
        <Editemployee/>
      {/* /Edit Employee Modal */}
      {/* Delete Employee Modal */}
      <div className="modal custom-modal fade" id="delete_employee" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Employee</h3>
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
      {/* /Delete Employee Modal */}
    </div>
  </div>
        );
  }

export default AllEmployees;
