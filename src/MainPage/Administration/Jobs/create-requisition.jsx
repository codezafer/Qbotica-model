//createRequisition

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm, Controller, set } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { postRequisitionData } from "../../../app/features/createRequisitionReducer";

const CreateRequisition = (props) => {
  const [value, setValue] = useState({
    requisitionId: create_UUID(),
    dateOfReq: "",
    closingDate: "",
    client: "",
    role: "",
    jobType: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    experience: "",
    vacancy: "",
    min: "",
    max: "",
    jd: "",
    resp: "",
    skills: "",
    workType: "",
    elegibleCriteria: "",
    goodToAdd: "",
  });
  const {posts,status,error} = useSelector((state) => ({...state.post}));
  const {requestStatus, setRequestStatus} = useState('idle')
  const dispatch = useDispatch();

  function create_UUID (){
    let num = Math.floor(1000 + Math.random() * 9000);
    return num;
} 
 
  const load = requestStatus==='idle'

  const RequisitionSubmit = () => {
    if(load){
        try{
          setRequestStatus('pending')
          dispatch(postRequisitionData(posts))
          props.history.push("/app/administrator/requisition");
        }catch(err){
          console.error('Failed to get the data' ,err)
        }finally{
          setRequestStatus('idle')
        }
      } 
  };

  useEffect(() => {
      RequisitionSubmit();
  }, []);
  

  const onFormFieldChange = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Create Requisition - qBotica</title>
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
                      Requisition ID
                    </label>
                    <input
                      name="requisitionId"
                      className="form-control"
                      type="text"
                      readOnly
                      value={value.requisitionId}
                      onChange={onFormFieldChange}
                    
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input
                      name="dateOfReq"
                      value={value.dateOfReq}
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
                      value={value.closingDate}
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
                      Client
                    </label>
                    <input
                      name="client"
                      value={value.client}
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
                      value={value.role}
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
                      value={value.jobType}
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
                      value={value.postalCode}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                      
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Year of Experience</label>
                    <input
                      name="experience"
                      value={value.experience}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                      
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Vacancy</label>
                    <input
                      name="vacancy"
                      value={value.vacancy}
                      className="form-control"
                      type="number"
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
                      value={value.min}
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
                      value={value.max}
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
                      value={value.jd}
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
                      value={value.resp}
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
                      value={value.skills}
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
                      value={value.elegibleCriteria}
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
                      value={value.goodToAdd}
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
