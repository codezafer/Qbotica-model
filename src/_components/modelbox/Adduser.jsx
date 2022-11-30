  
  import React from 'react';

  const Adduser = () => {
    
    return ( 
  <>
            {/* Add User Modal */}
            <div id="add_user" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add User</h5>
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>First Name <span className="text-danger">*</span></label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Username <span className="text-danger">*</span></label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Email <span className="text-danger">*</span></label>
                              <input className="form-control" type="email" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select">
                                <option>Admin</option>
                                <option>Client</option>
                                <option>Employee</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Company</label>
                              <select className="select">
                                <option>Global Technologies</option>
                                <option>Delta Infotech</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">  
                            <div className="form-group">
                              <label>Employee ID <span className="text-danger">*</span></label>
                              <input type="text" className="form-control floating" />
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
                              <tr>
                                <td>Employee</td>
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
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Holidays</td>
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
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
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
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Events</td>
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
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
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
              {/* /Add User Modal */}
</>
)
}

export default Adduser