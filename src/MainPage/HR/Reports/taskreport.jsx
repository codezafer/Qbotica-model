
import React,{useEffect} from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {Avatar_16 } from "../../../Entryfile/imagepath"

const TaskReport = () => {
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
                <title>Task Reports - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Task Reports</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Task Reports</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Content Starts */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus select-focus">
                  <div className="cal-icon">
                    <select className="form-control floating select">
                      <option>
                        Name1
                      </option>
                      <option>
                        Name2
                      </option>
                    </select>
                  </div>
                  <label className="focus-label">Project Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus select-focus">
                  <div className="cal-icon">
                    <select className="form-control floating select">
                      <option>
                        All
                      </option>
                      <option>
                        Pending
                      </option>
                      <option>
                        Completed
                      </option>
                    </select>
                  </div>
                  <label className="focus-label">Status</label>
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
                  <table className="table table-striped custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Hospital Administration</td>
                        <td>26 Mar 2019</td>
                        <td>26 Apr 2021</td>
                        <td>
                          <div className="dropdown action-label">
                            <a href="#" className="btn btn-white btn-sm btn-rounded"><i className="fa fa-dot-circle-o text-success" /> Active </a>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a href="#" data-bs-toggle="tooltip" data-original-title="Jeffery Lalor"><img src={Avatar_16} /></a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Hospital Administration</td>
                        <td>26 Mar 2019</td>
                        <td>26 Apr 2021</td>
                        <td>
                          <div className="dropdown action-label">
                            <a href="#" className="btn btn-white btn-sm btn-rounded"><i className="fa fa-dot-circle-o text-success" /> Active </a>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a href="#" data-bs-toggle="tooltip" data-original-title="Jeffery Lalor"><img src={Avatar_16} /></a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default TaskReport;
