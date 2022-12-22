//updateCandidate

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios, { Axios } from "axios";
import { useForm, Controller, set } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

const UpdateCandidate = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setEmailId] = useState();
  const [phone, setPhone] = useState();
  const [file, setFile] = useState();


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
    const response = await axios.get(`http://localhost:9000/candidatelist/${id}`)
    setFirstName(response.data.values.firstName);
    setLastName(response.data.values.lastName);
    setEmailId(response.data.values.emailId);
    setPhone(response.data.values.phone);
    setFile(response.data.values.file);
  };

  const history = useHistory();

  const CandidateSubmit = (e) => {
    e.preventDefault();
    const values = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      phone: phone,
      file: file
    }
    try {
      const updatedata = axios.put(`http://localhost:9000/candidatelist/${id}`, { values })
      console.log(updatedata)
      history.push("/app/administrator/candidates");
    } catch (errors) {
      console.log("error")
    }
  };


  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Update Candidate - qBotica</title>
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
            <form onSubmit={CandidateSubmit} >
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
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      value={lastName}
                      className="form-control "
                      type="text"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="emailId"
                      value={emailId}
                      className="form-control "
                      type="email"
                      onChange={(e) => {
                        setEmailId(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={phone}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* <div className="col-sm-12">
                  <div className="form-group">
                    <label>Resume</label>
                    <input
                      name="file"
                      value={file}
                      className="form-control"
                      type="file"
                      onChange={(e) => {
                        setFile(e.target.value);
                      }}
                      />
                  </div>
                </div> */}

                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </div>
  );
};

export default UpdateCandidate;