/**
 * Signin Firebase
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { useForm, Controller, set } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { alphaNumericPattern, emailrgx } from '../constant'
import axios from 'axios'
import { Modal } from 'antd'


// const schema = yup
//   .object({
//     email: yup
//       .string()
//       .matches(emailrgx, 'Email is required')
//       .required('Email is required')
//       .trim(),
//     password: yup.string().min(6).required('Password is required')
//       .trim(),
//     error: yup.string().trim()
//   })

const RegistrationPageDemo = (props) => {

  const [eye, seteye] = useState(true);
  const [emailerror, setEmailError] = useState("");
  const [nameerror, setNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [formgroup, setFormGroup] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "admin@dreamguys.co.in",
    password: "123456",
  });



  const [emailId, setEmailId] = useState("")
  const [role, setRole] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const {
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm()

  // const loginApi = async (e) => {
  //   e.preventDefault()
  //   const url = "http://localhost:3000/login";
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState();

  const showModal = () => {
    setOpen(false);
  };
  

  const handleOk = () => {
    setConfirmLoading(true);
    navigator.clipboard.writeText().then(()=>{
      alert("copied")
    })
    // setModalText('Copied!');
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };


  async function loginApi() {
    const url = "http://localhost:3000/register";
    const inputs = JSON.stringify({ emailId, role })
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: inputs,
    }
    try {
      const req = await fetch(url, options);
      const res = await req.json();
      return res;
    } catch (err) { console.log(err) }

  }



  const LoginSubmit = async (e) => {
    e.preventDefault();
    if (emailId === "") {
      return setError('error', {
        message: "The required field is empty"
      })
      
    } 

    if(!role){
      return setError('error', {
        message: "The role is empty"
      })
    }

    if (!emailrgx.test(emailId)) {
      setError('email', {
        message: "Invalid email"
      })
    }
  
    // const {role, emailId} = await loginApi();
    if(emailId!=="" && !role){
      setError('error', {
        message: msg
      })
    }
    else{  
    setOpen(true)
    setModalText("AVB")
    } 
   }



  return (


    //format: shift+Alt+F
    <>
      <Helmet>
        <title>Login - qBotica</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        {/* <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link> */}
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link to="/login"><img src={Applogo} alt="" /></Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Register</h3>
              <p className="account-subtitle"></p>
              {/* Account Form */}
              <div>
                <form onSubmit={LoginSubmit}>
                  {successMsg && <div className='task-success'>{successMsg}</div>}
                  <small>{errors?.error?.message}</small>
                  <div className="form-group">
                    <label>Email Address</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input className={`form-control  ${errors?.email ? "error-input" : ""}`} type="text" value={value} onChange={(e) => setEmailId(e.target.value)} autoComplete={true} />

                      )}
                    />
                    <small>{errors?.email?.message}</small>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Role</label>
                      </div>
                    </div>
                    <Controller
                      name="role"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">

                          <select className={`form-control2  ${errors?.email ? "error-input" : ""}`} type="text" value={value} onChange={(e) => setRole(e.target.value)}>select
                            <option value="" disabled selected>Select</option>
                            <option value="HR qBotica">Admin</option>
                            <option value="Interviewer">Interviewer</option>
                            <option value="External">External</option>
                            <option value="External">Internal Panel</option>
                          </select>

                          {/* <input type={eye ? "password" : "text"} className={`form-control  ${errors?.password ? "error-input" : ""}`} value={value} onChange={(e) => setPassword(e.target.value)} autoComplete="false" /> */}
                        </div>
                      )}

                    />
                    <small>{errors?.password?.message}</small>
                  </div>

                  <div className="form-group text-center">
                    <button className="btn btn-info"  onClick={showModal}>
                      Create a Random Password
                    </button>
                    <Modal
                      title="Password"
                      open={open}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={[
                        <button  key="submit" type="button" className='btn btn-info me-1' confirmLoading={confirmLoading} copyable onClick={handleOk}>
                          Copy
                        </button>, 
                        <button key="back" type="button" className='btn btn-dark me-1'  onClick={handleCancel} >
                        Cancel
                      </button>

                      ]}
                    >
                      <p>{modalText}</p>
                    </Modal>
                  </div>

                  {/* <div className="form-group text-center">
                    <button
                      className="btn btn-info"
                      type='primary'
                    >
                      Create Random Password
                    </button>

                  </div> */}
                </form>
                {/* <div className="account-footer">
                  <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                </div> */}
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default RegistrationPageDemo;
