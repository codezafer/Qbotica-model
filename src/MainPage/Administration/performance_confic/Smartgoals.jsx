import React from 'react';

const Smartgoals = () => {
  
  return ( 

     <>   
        {/* Smart Goal Config */}
        <div className="tab-pane" id="smart_goals_tab">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Smart Goals Configuration</label>
                            <textarea rows={4} cols={5} className="form-control" name="smart_goals" defaultValue={"A 360-degree assessment can also be added to capture ratings and feedback"} />
                          </div>
                          <div className="submit-section my-3">														
                            <button className="btn btn-primary submit-btn performance_status " data-status="smart_goals">Activate SMART Goals</button>
                          </div>
                        </div>
                      </div>
                      <hr style={{marginTop: 0}} />
                      <div className="form-group m-b-0">
                        <label>Choose Your Rating Scale</label>
                        <div className="radio_input" id="rating_scale_select">
                          <label className="radio-inline custom_radio">
                            <input type="radio" name="rating_scale_smart_goal" defaultValue="rating_1_5" required className="rating_scale" defaultChecked />1 - 5 <span className="checkmark" />
                          </label>
                          <label className="radio-inline custom_radio">
                            <input type="radio" name="rating_scale_smart_goal" defaultValue="rating_1_10" className="rating_scale" />1 - 10 <span className="checkmark" />
                          </label>
                          <label className="radio-inline custom_radio">
                            <input type="radio" name="rating_scale_smart_goal" defaultValue="custom_rating" className="rating_scale" />Custom <span className="checkmark" />
                          </label> 
                        </div>
                      </div>
                      {/* 5 Ratings Content */}
                      <div className="form-group" id="5ratings_cont" style={{display: 'block'}}>
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
                                    <input type="text" name="rating_value[]" className="form-control" defaultValue="very bad" placeholder="Short word to describe rating of 1" required />
                                  </td>
                                  <td>
                                    <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"very bad"} />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{width: 50}}> 2 </td>
                                  <td style={{width: 300}}>
                                    <input type="text" name="rating_value[]" className="form-control" defaultValue="bad" placeholder="Short word to describe rating of 2" required />
                                  </td>
                                  <td>
                                    <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"bad"} />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{width: 50}}> 3 </td>
                                  <td style={{width: 300}}>
                                    <input type="text" name="rating_value[]" className="form-control" defaultValue="Average" placeholder="Short word to describe rating of 3" required />
                                  </td>
                                  <td>
                                    <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"Average"} />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{width: 50}}> 4 </td>
                                  <td style={{width: 300}}>
                                    <input type="text" name="rating_value[]" className="form-control" defaultValue="Good" placeholder="Short word to describe rating of 4" required />
                                  </td>
                                  <td>
                                    <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"Good"} />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{width: 50}}> 5 </td>
                                  <td style={{width: 300}}>
                                    <input type="text" name="rating_value[]" className="form-control" defaultValue="Very Good" placeholder="Short word to describe rating of 5" required />
                                  </td>
                                  <td>
                                    <textarea rows={3} name="definition[]" className="form-control" placeholder="Descriptive Rating Definition" required defaultValue={"Very Good"} />
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
                      <div className="form-group" id="10ratings_cont" style={{display: 'none'}}>
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
                            <div className="submit-section m-b-0">
                              <button className="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* 10 Ratings Content */}
                      {/* Custom Ratings Content */}
                      <div className="form-group" id="custom_rating_cont" style={{display: 'none'}}>
                        <label>Custom Rating Count</label>
                        <div className="form-group">
                          <input type="text" className="form-control custom_rating_input" data-type="smart_goal" id="custom_rating_input2" name="custom_rating_count" defaultValue placeholder={20} style={{width: 160}} />
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
                              <tbody className="custom-value_smart_goal">
                              </tbody>
                            </table>
                            <div className="submit-section m-b-0">
                              <button className="btn btn-primary submit-btn create_goal_configuration_submit" type="submit">Save</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* /Custom Ratings Content */}
                    </div>
                    {/* /Smart Goal Config */}
   </>
  )
}

export default Smartgoals