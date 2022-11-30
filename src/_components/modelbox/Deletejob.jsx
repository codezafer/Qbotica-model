  
  import React from 'react';

  const  Deletejob = () => {
    
    return ( 
  <>
       {/* Delete Job Modal */}
       <div className="modal custom-modal fade" id="delete_job" role="dialog">
             <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                 <div className="modal-body">
                   <div className="form-header">
                     <h3>Delete</h3>
                     <p>Are you sure want to delete?</p>
                   </div>
                   <div className="modal-btn delete-action">
                     <div className="row">
                       <div className="col-6">
                         <a className="btn btn-primary continue-btn">Delete</a>
                       </div>
                       <div className="col-6">
                         <a data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* /Delete Job Modal */}
</>
)
}

export default Deletejob