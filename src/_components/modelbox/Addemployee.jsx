  
  import React from 'react';

  const Addemployee = () => {
    
    return ( 
  <>
       {/* Add Employee Modal */}
       <div id="add_employee" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Employee</h5>
                 <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Username <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Email <span className="text-danger">*</span></label>
                         <input className="form-control" type="email" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-sm-6">  
                       <div className="form-group">
                         <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                         <input type="text" className="form-control" />
                       </div>
                     </div>
                     <div className="col-sm-6">  
                       <div className="form-group">
                         <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
                         <div><input className="form-control datetimepicker" type="date" /></div>
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Company</label>
                         <select className="select">
                           <option value>Global Technologies</option>
                           <option value={1}>Delta Infotech</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Department <span className="text-danger">*</span></label>
                         <select className="select">
                           <option>Select Department</option>
                           <option>Web Development</option>
                           <option>IT Management</option>
                           <option>Marketing</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Designation <span className="text-danger">*</span></label>
                         <select className="select">
                           <option>Select Designation</option>
                           <option>Web Designer</option>
                           <option>Web Developer</option>
                           <option>Android Developer</option>
                         </select>
                       </div>
                     </div>
                   </div>
                   <div className="table-responsive m-t-15">
                     <table className="table table-striped custom-table">
                       <thead>
                         <tr>
                           <th>Module Permission</th>
                           <th className="text-center">Read</th>
                           <th className="text-center">Write</th>
                           <th className="text-center">Create</th>
                           <th className="text-center">Delete</th>
                           <th className="text-center">Import</th>
                           <th className="text-center">Export</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr key={1}>
                           <td>Holidays</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={2}>
                           <td>Leaves</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={3}>
                           <td>Clients</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={4}>
                           <td>Projects</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={5}>
                           <td>Tasks</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={6}>
                           <td>Chats</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={7}>
                           <td>Assets</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={8}>
                           <td>Timing Sheets</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Submit</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Add Employee Modal */}
</>
)
}

export default Addemployee