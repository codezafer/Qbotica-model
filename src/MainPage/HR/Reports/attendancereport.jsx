
import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const AttendanceReport = () => {
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
                <title>Attendance Reports - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Attendance Reports</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Attendance Reports</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Content Starts */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus select-focus">
                  <div className="cal-icon">
                    <select className="form-control floating select">
                      <option>
                        Jan
                      </option>
                      <option>
                        Feb
                      </option>
                      <option>
                        Mar
                      </option>
                    </select>
                  </div>
                  <label className="focus-label">Month</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus select-focus">
                  <div className="cal-icon">
                    <select className="form-control floating select">
                      <option>
                        2020
                      </option>
                      <option>
                        2019
                      </option>
                      <option>
                        2018
                      </option>
                    </select>
                  </div>
                  <label className="focus-label">Year</label>
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
                        <th>Date</th>
                        <th>Clock In</th>
                        <th>Clock Out</th>
                        <th>Work Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1 Jan 2020</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2 Jan 2020</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>3 Jan 2020</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>4 Jan 2020</td>
                        <td colSpan={3} className="text-danger text-center">Week Off</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>5 Jan 2020</td>
                        <td colSpan={3} className="text-danger text-center">Week Off</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>6 Jan 2020</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
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

export default AttendanceReport;
