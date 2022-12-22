//createCandidate

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios, { Axios } from "axios";
import { useForm, Controller, set } from "react-hook-form";

const CreateCandidate = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phone: "",
  });


  const url = "http://localhost:9000/candidatelist";
  const CandidateSubmit = async (e) => {
    e.preventDefault();
    await axios.post(url, { values });
    props.history.push("/app/administrator/candidates");
  };

  useEffect(() => {
    CandidateSubmit();
  }, []);

  const onFormFieldChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Create Candidate - qBotica</title>
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
                  <h3 className="page-title">Candidate</h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <form onSubmit={CandidateSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      First Name
                    </label>
                    <input
                      name="firstName"
                      className="form-control"
                      type="text"
                      value={values.firstName}
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      value={values.lastName}
                      className="form-control "
                      type="text"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="emailId"
                      value={values.emailId}
                      className="form-control "
                      type="email"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      name="phone"
                      value={values.phone}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Resume</label>
                    <input
                      name="file"
                      // value={values.phone}
                      className="form-control"
                      type="file"
                      onChange={onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
      {/* /Page Content */}
    </div >
  );
};

export default CreateCandidate;