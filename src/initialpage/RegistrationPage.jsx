import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { alphaNumericPattern, emailrgx } from '../constant'
import { Modal } from 'antd';
import { Alert } from 'reactstrap';
import { faCopy } from '@fortawesome/free-regular-svg-icons';




// const schema = yup
//   .object({

//     email: yup
//       .string()
//       .matches(emailrgx, 'Email is required')
//       .required('Email is required')
//       .trim(),
//     password: yup.string().min(6)
//       .max(6).required('Password is required')
//       .trim(),

//     repeatPassword: yup.string().required('ConfirmPassword is required').trim(),
//   })
//   .required()

  const Registrationpage = (props) => {
    
    const [emailId, setEmailId] = useState("")
    const [role, setRole] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalText, setModalText] = useState();
  
    const {
      control,
      setError,
      clearErrors,
      formState: { errors },
    } = useForm()
  
    // const regsiterApi = async (e) => {
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

    
  
    
  
    async function regsiterApi() {
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
  
  
  
    const RegsiterSubmit = async (e) => {
      e.preventDefault();
      if (emailId === "") {
        return setError('error', {
          message: "The required field is empty"
        })
  
      }
  
      if (!role) {
        return setError('error', {
          message: "The role is empty"
        })
  
      }
  
      
  
      const { times, msg } = await regsiterApi();
      if (!emailrgx.test(emailId)) {
        setError('email', {
          message: "Invalid email"
        })
      }
      else if (times === 4  ) {
        clearErrors(['email'])
        setError('error', {
          message: msg
        })
      }
      else{
      clearErrors(['email'])
      setOpen(true)
      setModalText(msg)
    }
  }
  
   
  
    const showModal = () => {
      setOpen(false);
    };
  
  
    const handleOk = () => {
      setModalText("Copied!")
      setLoading(true);
      setTimeout(() => {
        setOpen(false);
        setLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false)
    };
  
  
    return (
  
  
      //format: shift+Alt+F
      <>
        <Helmet>
          <title>Regsiter - qBotica</title>
          <meta name="description" content="Regsiter page" />
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
                  <form onSubmit={RegsiterSubmit}>
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
  
                          </div>
                        )}
  
                      />
                      <small>{errors?.password?.message}</small>
                    </div>
  
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" onClick={showModal}>
                        Generate Password
                      </button>
                      <Modal
                        title="Password"
                        open={open}
                        onOk={handleOk}
                        loading={loading}
                        onCancel={handleCancel}
                        footer={[
                          <button  key="submit" id='copy' type="button" className='btn btn-info me-1' loading={loading} onClick={handleOk}>
                            Copy
                          </button>, 
                          <button key="back" type="button" className='btn btn-dark me-1'  onClick={handleCancel} >
                          Cancel
                        </button>
                        ]}
                      >
                        <p><strong>{modalText}</strong></p>
                      </Modal>
                    </div>
                  </form>
                  <div className="account-footer">
                    <p>Click on <Link to="/login">Login</Link></p>
                  </div>
                </div>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Registrationpage;