/**
 * Signin Firebase
 */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link,useParams } from "react-router-dom";

const Jobdetails = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    // if ($(".select").length > 0) {
    //   $(".select").select2({
    //     minimumResultsForSearch: -1,
    //     width: "100%",
    //   });
    // }
  },[]);
 const getData = async () =>{
  axios.get(`http://localhost:9000/requisition/${id}`)
    .then((product) =>{
      // const newData =  product.data.find((item) => item.id=== parseInt(id));
      setData(product.data);
      console.log(product.data);
    })
  };

  
  return (
    
    <div className="page-wrapper">
      <Helmet>
        <title>Jobs - qBotica</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      {/* {values.map((data) => ( */}
      <div key={data.id} className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Job Details</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/administrator/requisition">Requisition</Link></li>
                <li  className="breadcrumb-item active">Job Details</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div  className="row">
          <div className="col-md-8">
            <div className="job-info job-widget">  
            <h3 className="job-title">{data.values.role}</h3>
              <span className="job-client">{data.values.client}</span>
              <ul className="job-post-det">
                <li>
                  <i className="fa fa-calendar" /> Post Date:{" "}
                  <span className="text-blue">{data.values.dateOfReq}</span>
                </li>
                <li>
                  <i className="fa fa-calendar" /> Last Date:{" "}
                  <span className="text-blue">{data.values.closingDate}</span>
                </li>
                {/* <li><i className="fa fa-user-o" /> Applications: <span className="text-blue">4</span></li> */}
                {/* <li><i className="fa fa-eye" /> Views: <span className="text-blue">3806</span></li> */}
              </ul>
            </div>
            <div className="job-content job-widget">
              <div className="job-desc-title">
                <h4>Job Description</h4>
              </div>
              <div className="job-description">
                <p>
                  {data.values.jd}
                </p>
              </div>
              <div className="job-desc-title">
                <h4>Roles and Responsibilities</h4>
              </div>
              <div className="job-description">
                <p>
                 {data.values.resp}
                </p>
                <ul className="square-list">
                <h4>Desired Skills</h4>
                  <li>
                    {data.values.skills}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-det-info job-widget">
              {/* <button
                className="btn job-btn" 
              ><Link to={`/app/administrator/update-requisition/${id}`}>
                Edit</Link>
              </button> */}
              <div className="info-list">
                <span>
                  <i className="fa fa-bar-chart" />
                </span>
                <h5>Job Type</h5>
                <p>{data.values.jobType}</p>
              </div>
              <div className="info-list">
                <span>
                  <i className="fa fa-money" />
                </span>
                <h5>Salary</h5>
                <p>{data.values.min} - {data.values.max}</p>
              </div>
              {/* <div className="info-list">
                 <span><i className="fa fa-suitcase" /></span>
                 <h5>Experience</h5>
                 <p>2 Years</p>
               </div>
               <div className="info-list">
                 <span><i className="fa fa-ticket" /></span>
                 <h5>Vacancy</h5>
                 <p>5</p>
               </div> */}
              <div className="info-list">
                <span>
                  <i className="fa fa-map-signs" />
                </span>
                <h5>Location</h5>
                <p>
                {" "}
                  qBotica
                  <br /> 10000 N 31st Ave D-304A Phoenix, AZ 85051,
                  <br /> {data.values.city},
                  <br /> {data.values.country}
                  <br />{data.values.postalCode}
                </p>
              </div>
              <div className="info-list">
                <p className="text-truncate">
                  {" "}
                  818-978-7102
                  <br />{" "}
                  <a
                    href="mailto:danielporter@example.com"
                    title="danielporter@example.com"
                  >
                    danielporter@example.com
                  </a>
                  <br />{" "}
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    title="https://www.example.com"
                  >
                    https://www.example.com
                  </a>
                </p>
              </div>
              {/* <div className="info-list text-center">
                 <a className="app-ends" href="#">Application ends in 2d 7h 6m</a>
               </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default Jobdetails;
