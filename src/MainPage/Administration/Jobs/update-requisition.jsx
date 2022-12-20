//createRequisition

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios, { Axios } from "axios";
import { useForm, Controller, set } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateRequisition = (props) => {
  const { id } = useParams();
  const [requisitionId, setRequisitionId] = useState();
  const [dateOfReq, setDateOfReq] = useState();
  const [closingDate, setClosingDate] = useState();
  const [role, setRole] = useState();
  const [client,setClient] = useState();
  const [jobType, setJobType] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [postalCode, setPostalCode] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [jd, setJd] = useState();
  const [resp, setResp] = useState();
  const [skills, setSkills] = useState();
  const [workType, setWorkType] = useState();
  const [elegibleCriteria, setelEgibleCriteria] = useState();
  const [goodToAdd, setGoodToAdd] = useState();

  // const {
  //   control,
  //   setErrors,
  //   clearErrors,
  //   formState: { errors },
  // } = useForm()

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get( `http://localhost:9000/requisition/${id}`)
    setRequisitionId(response.data.values.requisitionId);
    setDateOfReq(response.data.values.dateOfReq);
    setClosingDate(response.data.values.closingDate);
    setRole(response.data.values.role);
    setClient(response.data.values.client);
    setJobType(response.data.values.jobType);
    setCountry(response.data.values.country);
    setCity(response.data.values.city);
    setState(response.data.values.state);
    setPostalCode(response.data.values.postalCode);
    setMin(response.data.values.min);
    setMax(response.data.values.max);
    setJd(response.data.values.jd);
    setResp(response.data.values.resp);
    setSkills(response.data.values.skills);
    setWorkType(response.data.values.workType);
    setelEgibleCriteria(response.data.values.elegibleCriteria);
    setGoodToAdd(response.data.values.goodToAdd);
  };

  
  const RequisitionSubmit = () => {
    const inputdata = {
      id:id,
      requisitionId : requisitionId,
      dateOfReq : dateOfReq,
      closingDate : closingDate,
      role : role,
      client : client,
      jobType : jobType
    }
    try{
    const updatedata = axios.put("http://localhost:9000/requisition", {inputdata})
    console.log(updatedata)
    props.history.push("/app/administrator/requisition");
    }catch(errors){
      console.log("error")
    }
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
            <form onSubmit={RequisitionSubmit} >
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
                      value={requisitionId}
                      onChange={(e) => {
                        setRequisitionId(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input
                      name="dateOfReq"
                      value={dateOfReq}
                      className="form-control "
                      type="date"
                      onChange={(e) => {
                        setDateOfReq(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Closing Date</label>
                    <input
                      name="closingDate"
                      value={closingDate}
                      className="form-control "
                      type="date"
                      onChange={(e) => {
                        setClosingDate(e.target.value);
                      }}
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
                      value={client}
                      className="form-control"
                      type="text"
                      onChange={(e) =>{
                        setClient(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Role / Job Title</label>
                    <input
                      name="role"
                      value={role}
                      className="form-control "
                      type="text"
                      onChange={(e) =>{
                        setRole(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Job Type</label>
                    <input
                      name="jobType"
                      value={jobType}
                      className="form-control "
                      type="text"
                      onChange={(e) =>{
                        setJobType(e.target.value);
                      }}
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
                      onChange={(e) =>{
                        setCountry(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
                    >
                      <option value={country} disabled>
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
                      onChange={(e) =>{
                        setCity(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
                    >
                      <option value={city} disabled>
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
                      onChange={(e) =>{
                        setState(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
                    >
                      <option value={state} disabled>
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
                      value={postalCode}
                      className="form-control"
                      type="text"
                      onChange={(e) =>{
                        setPostalCode(e.target.value);
                      }}
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
                      value={min}
                      className="form-control"
                      type="number"
                      onChange={(e) =>{
                        setMin(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Max</label>
                    <input
                      name="max"
                      value={max}
                      className="form-control"
                      type="number"
                      onChange={(e) =>{
                        setMax(e.target.value);
                      }}
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
                      value={jd}
                      className="form-control"
                      type="text"
                      onChange={(e) =>{
                        setJd(e.target.value);
                      }}
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
                      value={resp}
                      className="form-control"
                      type="text"
                      onChange={(e) =>{
                        setResp(e.target.value);
                      }}
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
                      value={skills}
                      className="form-control"
                      type="text"
                      onChange={(e) =>{
                        setSkills(e.target.value);
                      }}
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
                      onChange={(e) =>{
                        setWorkType(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
                    >
                      <option value={workType} disabled>
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
                      value={elegibleCriteria}
                      className="form-control "
                      type="text"
                      onChange={(e) =>{
                        setelEgibleCriteria(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Good to add</label>
                    <input
                      name="goodToAdd"
                      value={goodToAdd}
                      className="form-control "
                      type="text"
                      onChange={(e) =>{
                        setGoodToAdd(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </div>
  );
};

export default UpdateRequisition;
