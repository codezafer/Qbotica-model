//createRequisition

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm, Controller, set } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { postRequisitionData } from "../../../app/features/createRequisitionReducer";

const initialState= {
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
};
function create_UUID (){ 
  let num = Math.floor(1000 + Math.random() * 9000);
  return num;
} 

const CreateRequisition = (props) => {
  const [formValue, setFormValue] = useState(initialState)
  const posts = useSelector((state) => ({...state.posts}));
  console.log(posts)
  const {requestStatus, setRequestStatus} = useState('idle')
  const dispatch = useDispatch();

  const load = requestStatus==='idle'

  const RequisitionSubmit =() => {
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
    const {name,value} = e.target
    setFormValue({
      ...posts,
      [name]: value,
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
                      value={formValue.requisitionId}
                      onChange={onFormFieldChange}
                    
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input
                      name="dateOfReq"
                      value={formValue.dateOfReq}
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
                      value={formValue.closingDate}
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
                      value={formValue.client}
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
                      value={formValue.role}
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
                      value={formValue.jobType}
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
                      value={formValue.country}
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
                      value={formValue.city}
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
                      value={formValue.state}
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
                      value={formValue.postalCode}
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
                      value={formValue.experience}
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
                      value={formValue.vacancy}
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
                      value={formValue.min}
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
                      value={formValue.max}
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
                      value={formValue.jd}
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
                      value={formValue.resp}
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
                      value={formValue.skills}
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
                      value={formValue.workType}
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
                      value={formValue.elegibleCriteria}
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
                      value={formValue.goodToAdd}
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
