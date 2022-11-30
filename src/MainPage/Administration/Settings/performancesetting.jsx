/**
 * Signin Firebase
 */

 import React, { useEffect } from 'react';
 import { Helmet } from "react-helmet";
import  Compentency from "../../Administration/performance_confic/Compentency"
import  Smartgoals from "../../Administration/performance_confic/Smartgoals"

 const PerformanceSetting = () => {
  useEffect( ()=>{
    if($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });  
 
       return ( 
        <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <Helmet>
                <title>Performance Setting - qBotica</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          <div className="content container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <h4 className="page-title">Performance Configuration	
                  <button className="btn btn-success m-t-5 btn-sm" type="submit">OKRs  Activated</button>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-box">
                  <p><b>Click the tabs below for more information on each Performance Management module.
                      Only one Performance module can be activated at a time.
                    </b>
                  </p>
                  <ul className="nav nav-tabs nav-tabs-bottom">
                    <li className="nav-item active"><a className="nav-link active" href="#okr_tab" data-bs-toggle="tab">OKRs</a></li>
                    <li className="nav-item "><a className="nav-link" href="#compentency_tab" data-bs-toggle="tab">Competency-based</a></li>
                    <li className="nav-item "><a className="nav-link" href="#smart_goals_tab" data-bs-toggle="tab">SMART Goals</a></li>
                  </ul>
                  <div className="tab-content">
                    {/* OKR Config */}
                    <div className="tab-pane active" id="okr_tab">
                      <div className="row">
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label>OKRs Description</label>
                            <textarea rows={5} cols={5} className="form-control" name="description" defaultValue={"Objectives and Key Results (OKR) is a framework for defining and tracking organizations objectives and their outcomes. OKRs comprise an Objective—a clearly defined goal—and one or more Key Results—specific measures used to track the achievement of that goal. The goal of OKR is to define how to achieve objectives through concrete, specific and measurable actions. Key Results can be measured on a sliding scale from 0.0 - 1.0 or 0-100%. Objectives should also be supported by initiatives, which are the plans and activities that help to achieve the objective and move forward the key results. Once objectives and key results have been established, regular and quarterly check-ins are required to make sure OKRs is progressing"} />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="rating-list m-t-20">
                            <span className="rating-bad">
                              <span className="rating-count">
                                <a className="mr-1">0.0</a>
                                <a className="mr-1">0.1</a>
                                <a className="mr-1">0.2</a>
                                <a>0.3</a>
                              </span><br />
                              <span className="rating-text">We failed to make real progress</span>
                            </span>
                            <span className="rating-normal">
                              <span className="rating-count">
                                <a className="mr-1">0.4</a>
                                <a className="mr-1">0.5</a>
                                <a>0.6</a>
                              </span><br />
                              <span className="rating-text">We made progress, but fell short of completion</span>
                            </span>
                            <span className="rating-good">
                              <span className="rating-count">
                                <a className="mr-1">0.7</a>
                                <a className="mr-1">0.8</a>
                                <a className="mr-1">0.9</a>
                                <a>1.0</a>
                              </span><br />
                              <span className="rating-text">We delivered</span>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="submit-section my-3">
                            <button className="btn btn-primary submit-btn performance_status red_circle" data-status="okr" title="Admin can’t activate it again">Activate OKR</button>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <hr style={{marginTop: 0}} />
                          <div className="form-group m-b-0">
                            <label>Choose Your Rating Scale</label>
                            <div className="radio_input" id="rating_scale_select_okr">
                              <label className="radio-inline custom_radio">
                                <input type="radio" name="rating_scale" defaultValue="rating_01_010" required className="rating_scale" defaultChecked />0.1 - 1.0 <span className="checkmark" />
                              </label>
                              <label className="radio-inline custom_radio">
                                <input type="radio" name="rating_scale" defaultValue="rating_1_5" required className="rating_scale" />1 - 5 <span className="checkmark" />
                              </label>
                              <label className="radio-inline custom_radio">
                                <input type="radio" name="rating_scale" defaultValue="rating_1_10" className="rating_scale" />1 - 10 <span className="checkmark" />
                              </label>
                              <label className="radio-inline custom_radio">
                                <input type="radio" name="rating_scale" defaultValue="custom_rating" className="rating_scale" />Custom <span className="checkmark" />
                              </label> 
                            </div>
                          </div>
                          {/*0.1 to  1.0 Ratings Content */}
                          <div className="form-group" id="01ratings_cont_okr" style={{display: 'block'}}>
                            <div className="table-responsive">
                              <form>
                                <table className="table setting-performance-table">
                                  <thead>
                                    <tr>
                                      <th>Rating</th>
                                      <th>Short Descriptive Word</th>
                                      <th>Definition</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td style={{width: 50}}> 0.1 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.1" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="dsdsd" placeholder="Short word to describe rating of 0.1" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"dfsdfa"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.2 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.2" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdfdsf" placeholder="Short word to describe rating of 0.2" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"sdfdsf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.3 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.3" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdfds" placeholder="Short word to describe rating of 0.3" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"fsdf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.4 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.4" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdfds" placeholder="Short word to describe rating of 0.4" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"fsdf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.5 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.5" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdfdsf" placeholder="Short word to describe rating of 0.5" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"sdf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.6 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.6" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdfds" placeholder="Short word to describe rating of 0.6" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"fsdsdf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.7 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.7" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="dsfd" placeholder="Short word to describe rating of 0.7" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"fsdf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.8 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.8" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdfsdf" placeholder="Short word to describe rating of 0.8" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"sdfds"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 0.9 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue="0.9" />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="sdf" placeholder="Short word to describe rating of 0.9" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"sdfsdsf"} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 1.0 </td>
                                      <td style={{width: 300}}>
                                        <input type="hidden" name="rating_no[]" className="form-control" defaultValue={1.0} />
                                        <input type="text" name="rating_value_ten[]" className="form-control" defaultValue="dg" placeholder="Short word to describe rating of 1.0" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"fg"} />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="submit-section m-b-0">
                                  <button className="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* 0.1 to  1.0  Ratings Content */}
                          {/* 5 Ratings Content */}
                          <div className="form-group" id="5ratings_cont_okr" style={{display: 'none'}}>
                            <div className="table-responsive">
                              <form>
                                <table className="table setting-performance-table">
                                  <thead>
                                    <tr>
                                      <th>Rating</th>
                                      <th>Short Descriptive Word</th>
                                      <th>Definition</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td style={{width: 50}}> 1 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value[]" className="form-control" placeholder="Short word to describe rating of 1" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 2 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value[]" className="form-control" placeholder="Short word to describe rating of 2" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 3 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value[]" className="form-control" placeholder="Short word to describe rating of 3" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 4 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value[]" className="form-control" placeholder="Short word to describe rating of 4" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 5 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value[]" className="form-control" placeholder="Short word to describe rating of 5" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="submit-section m-b-0">
                                  <button className="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* /5 Ratings Content */}
                          {/* 10 Ratings Content */}
                          <div className="form-group" id="10ratings_cont_okr" style={{display: 'none'}}>
                            <div className="table-responsive">
                              <form>
                                <table className="table setting-performance-table">
                                  <thead>
                                    <tr>
                                      <th>Rating</th>
                                      <th>Short Descriptive Word</th>
                                      <th>Definition</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td style={{width: 50}}> 1 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 1" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 2 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 2" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 3 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 3" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 4 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 4" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 5 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 5" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 6 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 6" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 7 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 7" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 8 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 8" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 9 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 9" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{width: 50}}> 10 </td>
                                      <td style={{width: 300}}>
                                        <input type="text" name="rating_value_ten[]" className="form-control" placeholder="Short word to describe rating of 10" required />
                                      </td>
                                      <td>
                                        <textarea rows={3} name="definition_ten[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={""} />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="submit-section">
                                  <button className="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* 10 Ratings Content */}
                          {/* Custom Ratings Content */}
                          <div className="form-group" id="custom_rating_cont_okr" style={{display: 'none'}}>
                            <label>Custom Rating Count</label>
                            <div className="form-group">
                              <input type="text" className="form-control custom_rating_input" data-type="okr" id="custom_rating_input3" name="custom_rating_count" defaultValue placeholder={20} style={{width: 160}} />
                            </div>
                            <div className="table-responsive">
                              <form>
                                <table className="table setting-performance-table">
                                  <thead>
                                    <tr>
                                      <th>Rating</th>
                                      <th>Short Descriptive Word</th>
                                      <th>Definition</th>
                                    </tr>
                                  </thead>
                                  <tbody className="custom-value_okr">
                                  </tbody>
                                </table>
                                <div className="submit-section">
                                  <button className="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* /Custom Ratings Content */}
                        </div>
                      </div>
                    </div>
                    {/* Compentency Config */}
                   <Compentency/>
                    {/* /Compentency Config */}
                    {/* Smart Goal Config */}
                    <Smartgoals/>
                    {/* /Smart Goal Config */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
        {/* /Page Wrapper */}
        </>
       );
   }
 
 export default PerformanceSetting;
 