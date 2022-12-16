//createRequisition

import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import axios, { Axios } from 'axios';
import { useForm, Controller, set } from 'react-hook-form'


const UpdateRequisition = () => {

  const [values, setValues] = useState([])


  const RequisitionSubmit = async (e) => {
    e.preventDefault();
    const requisitionRequest = await requisitionApi();
    if (requisitionRequest.data.status === 201) {
      console.log("post done")
    } else {
      console.log("invalid")
    }

  }
  // const {
  //   control,
  //   setErrors,
  //   clearErrors,
  //   formState: { errors },
  // } = useForm()


  useEffect(() => {
    axios.get("http://localhost:9000/requisition")
    .then((getData) =>{
      setValues(getData.data);
      console.log(getData)
    })
    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  },[]);



  const onFormFieldChange = (e) => {
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Requisition - qBotica</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      {values.map((data) =>(
      <div key={data.id} className="content container-fluid">
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
                    <label>Requisition ID<span className="text-danger" >*</span></label>
                    <input name="requisitionId" className="form-control" type="text" value={data.values.requisitionId} onChange={onFormFieldChange} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input name="dateOfReq" value={data.values.dateOfReq} className="form-control " type="date" onChange={onFormFieldChange} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Closing Date</label>
                    <input name="closingDate" value={data.values.closingDate} className="form-control " type="date" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Client<span className="text-danger">*</span></label>
                    <input name="client" value={data.values.client} className="form-control" type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Role / Job Title</label>
                    <input name="role" value={data.values.role} className="form-control " type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Job Type</label>
                    <input name="jobType" value={data.values.jobType} className="form-control " type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Country</label>
                    <select name="country" className="form-control2" onChange={onFormFieldChange} defaultValue={'DEFAULT'}>
                      <option value={data.values.country} disabled >Select</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>City</label>
                    <select name="city" className="form-control2" onChange={onFormFieldChange} defaultValue={'DEFAULT'}>
                      <option value={data.values.city} disabled >Select</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>State/Province</label>
                    <select name="state" className="form-control2" onChange={onFormFieldChange} defaultValue={'DEFAULT'}>
                      <option value={data.values.state} disabled >Select</option>
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input name="postalCode" value={data.values.postalCode} className="form-control" type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <p>CTC</p>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Min</label>
                    <input name="min" value={data.values.min} className="form-control" type="number" onChange={onFormFieldChange} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Max</label>
                    <input name="max" value={data.values.max} className="form-control" type="number" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Job Description</label>
                    <textarea name="jd" value={data.values.jd} className="form-control" type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Roles & Responsibilities</label>
                    <textarea name="resp" value={data.values.resp} className="form-control" type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Desired skills</label>
                    <textarea name="skills" value={data.values.skills} className="form-control" type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Work Type</label>
                    <select name="workType" className="form-control2" onChange={onFormFieldChange} defaultValue={'DEFAULT'}>
                      <option value={data.values.workType} disabled >Select</option>
                      <option>From Office</option>
                      <option>WFM</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Elegible Criteria</label>
                    <input name="elegibleCriteria" value={data.values.elegibleCriteria} className="form-control " type="text" onChange={onFormFieldChange} />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Good to add</label>
                    <input name="goodToAdd" value={data.values.goodToAdd} className="form-control " type="text" onChange={onFormFieldChange} />
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
         ))}
      {/* /Page Content */}
    </div>
  );
}

export default UpdateRequisition;