/**
 * Signin Firebase
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { API_URL } from "../../../constant/URL";
import axios from 'axios'

const Requisition = () => {

  const [values, setValues] = useState({
    requisitionId: "",
    dateOfReq: "",
    closingDate: "",
    client: "",
    role: "",
    jobType: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    min: "",
    max: "",
    jd: "",
    resp: "",
    skills: "",
    workType: "",
    elegibleCriteria: "",
    goodToAdd: "",
  })

  const url = "https://638dd2c84190defdb74e5f41.mockapi.io/Job-Post";

  const fetchData = async () => {

    try {

      // axios.get(), axios.post(),axios.put(), axios.delete()

      const response = await axios(url);



      console.log(response);

    } catch (error) {

      console.log(error.response);

    }

  };

  //  useEffect(() => {
  //    if ($('.select').length > 0) {
  //      $('.select').select2({
  //        minimumResultsForSearch: -1,
  //        width: '100%'
  //      });
  //    }
  //  });
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
                    <label>Requisition ID<span className="text-danger" >*</span></label>
                    <input name="requisitionId" value={values.requisitionId} className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input name="dateOfReq" value={values.dateOfReq} className="form-control " type="date" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Closing Date</label>
                    <input name="closingDate" value={values.closingDate} className="form-control " type="date" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Client<span className="text-danger">*</span></label>
                    <input name="client" value={values.client} className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Role / Job Title</label>
                    <input name="role" value={values.role} className="form-control " type="text" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Job Type</label>
                    <input name="jobType" value={values.jobType} className="form-control " type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Country</label>
                    <select name="country" value={values.country} className="form-control select">
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>City</label>
                    <select name="city" value={values.city} className="form-control select">
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>State/Province</label>
                    <select name="state" value={values.state} className="form-control select">
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input name="postalCode" value={values.postalCode} className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <p>CTC</p>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Min</label>
                    <input name="min" value={values.min} className="form-control" defaultValue="danielporter@example.com" type="number" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Max</label>
                    <input name="max" value={values.max} className="form-control" type="number" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Job Description</label>
                    <textarea name="jd" value={values.jd} className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Roles & Responsibilities</label>
                    <textarea name="resp" value={values.resp} className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Desired skills</label>
                    <textarea name="skills" value={values.skills} className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Work Type</label>
                    <select name="workType" value={values.workType} className="form-control select">
                      <option>From Office</option>
                      <option>WFM</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Elegible Criteria</label>
                    <input name="elegibleCriteria" value={values.elegibleCriteria} className="form-control " type="text" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Good to add</label>
                    <input name="goodToAdd" value={values.goodToAdd} className="form-control " type="text" />
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
