  
  import React from 'react';
  import {Avatar_10,Avatar_05,Avatar_11,Avatar_09} from '../../Entryfile/imagepath'
  
  const Editticket= () => {
    
    return ( 
  <>
        {/* Edit Ticket Modal */}
        <div id="edit_ticket" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Ticket</h5>
                 <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Subject</label>
                         <input className="form-control" type="text" defaultValue="Laptop Issue" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Id</label>
                         <input className="form-control" type="text" readOnly defaultValue="TKT-0001" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Assign Staff</label>
                         <select className="select">
                           <option>-</option>
                           <option >Mike Litorus</option>
                           <option>John Smith</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Client</label>
                         <select className="select">
                           <option>-</option>
                           <option>Delta Infotech</option>
                           <option >International Software Inc</option>
                         </select>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Priority</label>
                         <select className="select">
                           <option>High</option>
                           <option >Medium</option>
                           <option>Low</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>CC</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Assign</label>
                         <input type="text" className="form-control" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Assignee</label>
                         <div className="project-members">
                           <a title="John Smith" data-bs-toggle="tooltip" href="#">
                             <img src={Avatar_10} alt="" />
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Add Followers</label>
                         <input type="text" className="form-control" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Followers</label>
                         <div className="project-members">
                           <a title="Richard Miles" data-bs-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_09} alt="" />
                           </a>
                           <a title="John Smith" data-bs-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_10} alt="" />
                           </a>
                           <a title="Mike Litorus" data-bs-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_05} alt="" />
                           </a>
                           <a title="Wilmer Deluna" data-bs-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_11} alt="" />
                           </a>
                           <span className="all-team">+2</span>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-12">
                       <div className="form-group">
                         <label>Description</label>
                         <textarea className="form-control" rows={4} defaultValue={""} />
                       </div>
                       <div className="form-group">
                         <label>Upload Files</label>
                         <input className="form-control" type="file" />
                       </div>
                     </div>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Save</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Edit Ticket Modal */}

</>
)
}

export default Editticket