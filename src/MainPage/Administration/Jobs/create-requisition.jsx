//createRequisition

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios, { Axios } from "axios";
import { useForm, Controller, set } from "react-hook-form";

const CreateRequisition = (props) => {
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
  });

  const url = "http://localhost:9000/requisition";
  const RequisitionSubmit = async (e) => {
    e.preventDefault();
    await axios.post(url, { values });
    props.history.push("/app/administrator/requisition");
  };

  useEffect(() => {
      RequisitionSubmit();
  }, []);

  // const {
  //   control,
  //   setErrors,
  //   clearErrors,
  //   formState: { errors },
  // } = useForm()


  const onFormFieldChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Requisition - qBotica</title>
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
            <form onSubmit={RequisitionSubmit}>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>
                      Requisition ID<span className="text-danger">*</span>
                    </label>
                    <input
                      name="requisitionId"
                      className="form-control"
                      type="text"
                      value={values.requisitionId}
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input
                      name="dateOfReq"
                      value={values.dateOfReq}
                      className="form-control "
                      type="date"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Closing Date</label>
                    <input
                      name="closingDate"
                      value={values.closingDate}
                      className="form-control "
                      type="date"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>
                      Client<span className="text-danger">*</span>
                    </label>
                    <input
                      name="client"
                      value={values.client}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Role / Job Title</label>
                    <input
                      name="role"
                      value={values.role}
                      className="form-control "
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Job Type</label>
                    <input
                      name="jobType"
                      value={values.jobType}
                      className="form-control "
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      name="country"
                      className="form-control2"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>City</label>
                    <select
                      name="city"
                      className="form-control2"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>State/Province</label>
                    <select
                      name="state"
                      className="form-control2"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      name="postalCode"
                      value={values.postalCode}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <p>CTC</p>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Min</label>
                    <input
                      name="min"
                      value={values.min}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Max</label>
                    <input
                      name="max"
                      value={values.max}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Job Description</label>
                    <textarea
                      name="jd"
                      value={values.jd}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Roles & Responsibilities</label>
                    <textarea
                      name="resp"
                      value={values.resp}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Desired skills</label>
                    <textarea
                      name="skills"
                      value={values.skills}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Work Type</label>
                    <select
                      name="workType"
                      className="form-control2"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>From Office</option>
                      <option>WFM</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Elegible Criteria</label>
                    <input
                      name="elegibleCriteria"
                      value={values.elegibleCriteria}
                      className="form-control "
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Good to add</label>
                    <input
                      name="goodToAdd"
                      value={values.goodToAdd}
                      className="form-control "
                      type="text"
                      onChange={onFormFieldChange}
                    />
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
};

export default CreateRequisition;
