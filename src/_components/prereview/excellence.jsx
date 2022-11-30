import React from 'react';

const Excellence = () => {
  
  return ( 

     <>   
                {/*Professional Excellence */}
                 <section className="review-section professional-excellence">
                   <div className="review-header text-center">
                     <h3 className="review-title">Professional Excellence</h3>
                     <p className="text-muted">Lorem ipsum dollar</p>
                   </div>
                   <div className="row">
                     <div className="col-md-12">
                       <div className="table-responsive">
                         <table className="table table-bordered review-table mb-0">
                           <thead>
                             <tr>
                               <th style={{width: '40px'}}>#</th>
                               <th>Key Result Area</th>
                               <th>Key Performance Indicators</th>
                               <th>Weightage</th>
                               <th>Percentage achieved <br />( self Score )</th>
                               <th>Points Scored <br />( self )</th>
                               <th>Percentage achieved <br />( RO's Score )</th>
                               <th>Points Scored <br />( RO )</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td rowSpan={2}>1</td>
                               <td rowSpan={2}>Production</td>
                               <td>Quality</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={30} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>TAT (turn around time)</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={30} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>2</td>
                               <td>Process Improvement</td>
                               <td>PMS,New Ideas</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={10} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>3</td>
                               <td>Team Management</td>
                               <td>Team Productivity,dynaics,attendance,attrition</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={5} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>4</td>
                               <td>Knowledge Sharing</td>
                               <td>Sharing the knowledge for team productivity </td>
                               <td><input type="text" className="form-control" readOnly defaultValue={5} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>5</td>
                               <td>Reporting and Communication</td>
                               <td>Emails/Calls/Reports and Other Communication</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={5} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td colSpan={3} className="text-center">Total </td>
                               <td><input type="text" className="form-control" readOnly defaultValue={85} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
                 </section>
                  {/*/Professional Excellence */}

                   {/*Personal Excellence */}
                 <section className="review-section personal-excellence">
                   <div className="review-header text-center">
                     <h3 className="review-title">Personal Excellence</h3>
                     <p className="text-muted">Lorem ipsum dollar</p>
                   </div>
                   <div className="row">
                     <div className="col-md-12">
                       <div className="table-responsive">
                         <table className="table table-bordered review-table mb-0">
                           <thead>
                             <tr>
                               <th style={{width: '40px'}}>#</th>
                               <th>Personal Attributes</th>
                               <th>Key Indicators</th>
                               <th>Weightage</th>
                               <th>Percentage achieved <br />( self Score )</th>
                               <th>Points Scored <br />( self )</th>
                               <th>Percentage achieved <br />( RO's Score )</th>
                               <th>Points Scored <br />( RO )</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td rowSpan={2}>1</td>
                               <td rowSpan={2}>Attendance</td>
                               <td>Planned or Unplanned Leaves</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={2} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>Time Consciousness</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={2} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td rowSpan={2}>2</td>
                               <td rowSpan={2}>Attitude &amp; Behavior</td>
                               <td>Team Collaboration</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={2} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>Professionalism &amp; Responsiveness</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={2} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>3</td>
                               <td>Policy &amp; Procedures </td>
                               <td>Adherence to policies and procedures</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={2} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>4</td>
                               <td>Initiatives</td>
                               <td>Special Efforts, Suggestions,Ideas,etc.</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={2} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td>5</td>
                               <td>Continuous Skill Improvement</td>
                               <td>Preparedness to move to next level &amp; Training utilization</td>
                               <td><input type="text" className="form-control" readOnly defaultValue={3} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td colSpan={3} className="text-center">Total </td>
                               <td><input type="text" className="form-control" readOnly defaultValue={15} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                               <td><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td colSpan={3} className="text-center"><b>Total Percentage(%)</b></td>
                               <td colSpan={5} className="text-center"><input type="text" className="form-control" readOnly defaultValue={0} /></td>
                             </tr>
                             <tr>
                               <td colSpan={8} className="text-center">
                                 <div className="grade-span">
                                   <h4>Grade</h4>
                                   <span className="badge bg-inverse-danger">Below 65 Poor</span> 
                                   <span className="badge bg-inverse-warning">65-74 Average</span> 
                                   <span className="badge bg-inverse-info">75-84 Satisfactory</span> 
                                   <span className="badge bg-inverse-purple">85-92 Good</span> 
                                   <span className="badge bg-inverse-success">Above 92 Excellent</span>
                                 </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
                 </section>
              {/*/Personal Excellence */}
   </>
  )
}

export default Excellence