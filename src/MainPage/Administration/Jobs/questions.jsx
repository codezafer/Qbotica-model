/**
 * Signin Firebase
 */

 import React, { useEffect } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import UserDashboardHeader from "./userdashboardheader"

 
 const Questions = () => {

        useEffect( ()=>{
            $('.next').click(function(){
                var nextId = $(this).parents('.tab-pane').next().attr("id");
                $('[href="#' + nextId + '"]').tab('show');
                return false;
            })
            
            
            $('.first').click(function(){
                $('#myWizard a:first').tab('show')
            });
        });
        
       return ( 
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <Helmet>
                  <title>Aptitude - qBotica</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                    <h3 className="page-title">Aptitude</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item ">Jobs</li>
                        <li className="breadcrumb-item">Interviewing</li>
                        <li className="breadcrumb-item active">Aptitude</li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* /Page Header */}
                {/* Content Starts */}
                <UserDashboardHeader/>
                <div className="quiz-wizard">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                        <div className="" id="myWizard">
                            <div style={{display: 'none'}} className="navbar">
                            <div className="navbar-inner">
                                <ul className="nav nav-pills">
                                <li className="active"><a href="#step1" data-bs-toggle="tab" data-step={1}>Step 1</a></li>
                                <li className=""><a href="#step2" data-bs-toggle="tab" data-step={2}>Step 2</a></li>
                                <li className=""><a href="#step3" data-bs-toggle="tab" data-step={3}>Step 3</a></li>
                                <li className=""><a href="#step4" data-bs-toggle="tab" data-step={4}>Step 4</a></li>
                                <li className=""><a href="#step5" data-bs-toggle="tab" data-step={5}>Step 5</a></li>
                                <li className=""><a href="#step6" data-bs-toggle="tab" data-step={6}>Step 6</a></li>
                                <li className=""><a href="#step7" data-bs-toggle="tab" data-step={7}>Step 7</a></li>
                                <li className=""><a href="#step8" data-bs-toggle="tab" data-step={8}>Step 8</a></li>
                                <li className=""><a href="#step9" data-bs-toggle="tab" data-step={9}>Step 9</a></li>
                                <li className=""><a href="#step10" data-bs-toggle="tab" data-step={10}>Step 10</a></li>
                                </ul>
                            </div>
                            </div>
                            <form method="post" id="quiz_answer">
                            <div className="tab-content pt-0">
                                <div className="tab-pane active" id="step1">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <h4 className="mb-4 text-dark"><span>1.</span> IS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?</h4>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[10]" className="mr-1" />
                                            <span className="checkmark" />
                                            Inadequate screen/report design facilities
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[10]" className="mr-1" />
                                            <span className="checkmark" />
                                            Complex programming language subsets
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[10]" className="mr-1" />
                                            <span className="checkmark" />
                                            Lack of portability across operating systems
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[10]" className="mr-1" />
                                            <span className="checkmark" />
                                            Inability to perform data intensive operations
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-left mt-3">
                                        <a className="btn btn-primary btn-lg next submit-btn" href="#">Next</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade" id="step2">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <h4 className="mb-4 text-dark"><span>2.</span> Which of the following would be the BEST method for ensuring that critical fields in a master record have been updated properly?</h4>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[11]" className="mr-1" />
                                            <span className="checkmark" />
                                            Inadequate screen/report design facilities
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[11]" className="mr-1" />
                                            <span className="checkmark" />
                                            Complex programming language subsets
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[11]" className="mr-1" />
                                            <span className="checkmark" />
                                            Lack of portability across operating systems
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[11]" className="mr-1" />
                                            <span className="checkmark" />
                                            Inability to perform data intensive operations
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-left mt-3">
                                        <a className="btn btn-primary btn-lg next submit-btn" href="#">Next</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade in " id="step3">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <h4 className="mb-4 text-dark"><span>3.</span> Which of the following is a dynamic analysis tool for the purpose of testing software modules?</h4>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[12]" className="mr-1" />
                                            <span className="checkmark" />
                                            Blackbox test
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[12]" className="mr-1" />
                                            <span className="checkmark" />
                                            Desk checking
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[12]" className="mr-1" />
                                            <span className="checkmark" />
                                            Structured walk-through
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[12]" className="mr-1" />
                                            <span className="checkmark" />
                                            Design and code
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-left mt-3">
                                        <a className="btn btn-primary btn-lg next submit-btn" href="#">Next</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade in " id="step4">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <h4 className="mb-4 text-dark"><span>4.</span> Which of the following is MOST likely to result from a business process reengineering (BPR) project?</h4>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[13]" className="mr-1" />
                                            <span className="checkmark" />
                                            An increased number of people using technology
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[13]" className="mr-1" />
                                            <span className="checkmark" />
                                            Significant cost savings, through a reduction in the complexity of information technology
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[13]" className="mr-1" />
                                            <span className="checkmark" />
                                            A weaker organisational structures and less accountability
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[13]" className="mr-1" />
                                            <span className="checkmark" />
                                            Increased information protection (IP) risk will increase
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-left mt-3">
                                        <a className="btn btn-primary btn-lg next submit-btn" href="#">Next</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade in " id="step5">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <h4 className="mb-4 text-dark"><span>5.</span> Which of the following devices extends the network and has the capacity to store frames and act as a storage and forward device?</h4>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[14]" className="mr-1" />
                                            <span className="checkmark" />
                                            Gateway
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[14]" className="mr-1" />
                                            <span className="checkmark" />
                                            Repeater
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[14]" className="mr-1" />
                                            <span className="checkmark" />
                                            Bridge
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[14]" className="mr-1" />
                                            <span className="checkmark" />
                                            Router
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-left mt-3">
                                        <a className="btn btn-primary btn-lg next submit-btn" href="#">Next</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade in " id="step10">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div>
                                        <h4 className="mb-4 text-dark"><span>6.</span> An offsite information processing facility having electrical wiring, air conditioning and flooring, but no computer or communications equipment is a:</h4>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[15]" className="mr-1" />
                                            <span className="checkmark" />
                                            Cold site
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[15]" className="mr-1" />
                                            <span className="checkmark" />
                                            Warm site
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[15]" className="mr-1" />
                                            <span className="checkmark" />
                                            Dial-up site
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="question-radio text-secondary">
                                            <input type="radio" name="answer[15]" className="mr-1" />
                                            <span className="checkmark" />
                                            Duplicate processing facility
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success btn-lg submit-btn mt-3" data-bs-toggle="modal" data-bs-target="#free_question_modal" type="button">Finish</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* /Content End */}
            </div>
            {/* /Page Content */}
            </div>
            {/* /Page Wrapper */}
        </>
       );
 }
 
 export default Questions;
 