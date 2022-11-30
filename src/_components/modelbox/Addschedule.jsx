  
  import React from 'react';

  const Addschedule = () => {
    
    return ( 
  <>
        {/* Add Schedule Modal */}
        <div id="add_schedule" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Schedule</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Department <span className="text-danger">*</span></label>
                        <select className="select">
                          <option value>Select</option>
                          <option value>Development</option>
                          <option value={1}>Finance</option>
                          <option value={2}>Finance and Management</option>
                          <option value={3}>Hr &amp; Finance</option>
                          <option value={4}>ITech</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Employee Name <span className="text-danger">*</span></label>
                        <select className="select">
                          <option value>Select </option>
                          <option value={1}>Richard Miles </option>
                          <option value={2}>John Smith</option>
                          <option value={3}>Mike Litorus </option>
                          <option value={4}>Wilmer Deluna</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Date</label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Shifts <span className="text-danger">*</span></label>
                        <select className="select">
                          <option value>Select </option>
                          <option value={1}>10'o clock Shift</option>
                          <option value={2}>10:30 shift</option>
                          <option value={3}>Daily Shift </option>
                          <option value={4}>New Shift</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Min Start Time  <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Start Time  <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Max Start Time  <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Min End Time  <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">End Time   <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Max End Time <span className="text-danger">*</span></label>
                        <div className="input-group time timepicker">
                          <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Break Time  <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Accept Extra Hours </label>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked />
                          <label className="custom-control-label" htmlFor="customSwitch1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="col-form-label">Publish </label>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked />
                          <label className="custom-control-label" htmlFor="customSwitch2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Schedule Modal */}
</>
)
}

export default Addschedule