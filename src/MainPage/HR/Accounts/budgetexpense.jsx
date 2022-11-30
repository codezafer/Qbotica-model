
import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const BudgetExpense = () => {
  
      return (         
        <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
                <Helmet>
                    <title>Budgets Expenses - qBotica</title>
                    <meta name="description" content="Login page"/>					
                </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Budgets Expenses</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Accounts</li>
                  </ul>
                </div>
                <div className="col-auto float-end ml-auto">
                  <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_categories"><i className="fa fa-plus" /> Add Expenses</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Notes</th>                    
                        <th>Category Name</th>
                        <th>SubCategory Name</th>
                        <th>Amount</th>
                        <th>Revenue Date</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Hardware</td>
                        <td>Hardware Expenses</td>
                        <td>1000.00</td>
                        <td>06 Jan 2020</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_categories"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Test</td>
                        <td>Project</td>
                        <td>Project Expenses</td>
                        <td>1000.00</td>
                        <td>06 Jan 2020</td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_categories"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>								
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Add Modal */}
          <div className="modal custom-modal fade" id="add_categories" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Expenses</h5>
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Amount <span className="text-danger">*</span></label>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder={800.00} name="amount" />
                    </div>
                    <div className="col-lg-6">
                      <select name="currency_symbol" className="form-control">
                        <option value="$ - AUD">$ - Australian Dollar</option>
                        <option value="Bs. - VEF">Bs. - Bolívar Fuerte</option>
                        <option value="R$ - BRL">R$ - Brazilian Real</option>
                        <option value="£ - GBP">£ - British Pound</option>
                        <option value="$ - CAD">$ - Canadian Dollar</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Notes <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <textarea className="form-control ta" name="notes" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Expense Date <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <input className="datepicker-input form-control" type="text" defaultValue="07-05-2021" name="expense_date" data-date-format="dd-mm-yyyy" />
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Category <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <select name="category" className="form-control m-b" id="main_category">
                        <option value disabled>Choose Category</option>
                        <option value={1}>project1</option>
                        <option value={3}>test category</option>
                        <option value={4}>Hardware</option>
                        <option value={5}>Material</option>
                        <option value={6}>Vehicle</option>
                        <option value={8}>TestctrE</option>
                        <option value={9}>Twocatr</option>
                        <option value={10}>fesferwf</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Sub Category <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <select name="sub_category" className="form-control m-b" id="sub_category">
                        <option value>Choose Sub-Category</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row  position-relative">
                    <label className="col-lg-12 control-label">Attach File</label>
                    <div className="col-lg-12">
                      <input type="file" className="form-control" data-buttontext="Choose File" data-icon="false" data-classbutton="btn btn-default" data-classinput="form-control inline input-s" name="receipt" />
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Modal */}
          {/* Edit Modal */}
          <div className="modal custom-modal fade" id="edit_categories" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Expenses</h5>
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Amount <span className="text-danger">*</span></label>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder={800.00} name="amount" />
                    </div>
                    <div className="col-lg-6">
                      <select name="currency_symbol" className="form-control">
                        <option value="$ - AUD">$ - Australian Dollar</option>
                        <option value="Bs. - VEF">Bs. - Bolívar Fuerte</option>
                        <option value="R$ - BRL">R$ - Brazilian Real</option>
                        <option value="£ - GBP">£ - British Pound</option>
                        <option value="$ - CAD">$ - Canadian Dollar</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Notes <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <textarea className="form-control ta" name="notes" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Expense Date <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <input className="datepicker-input form-control" type="text" defaultValue="07-05-2021" name="expense_date" data-date-format="dd-mm-yyyy" />
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Category <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <select name="category" className="form-control m-b" id="main_category1">
                        <option value disabled>Choose Category</option>
                        <option value={1}>project1</option>
                        <option value={3}>test category</option>
                        <option value={4}>Hardware</option>
                        <option value={5}>Material</option>
                        <option value={6}>Vehicle</option>
                        <option value={8}>TestctrE</option>
                        <option value={9}>Twocatr</option>
                        <option value={10}>fesferwf</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row">
                    <label className="col-lg-12 control-label">Sub Category <span className="text-danger">*</span></label>
                    <div className="col-lg-12">
                      <select name="sub_category" className="form-control m-b" id="sub_category1">
                        <option value>Choose Sub-Category</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row  position-relative">
                    <label className="col-lg-12 control-label">Attach File</label>
                    <div className="col-lg-12">
                      <input type="file" className="form-control" data-buttontext="Choose File" data-icon="false" data-classbutton="btn btn-default" data-classinput="form-control inline input-s" name="receipt" />
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Edit Modal */}
          {/* Delete Holiday Modal */}
          <div className="modal custom-modal fade" id="delete" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Delete </h3>
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
          {/* /Delete Holiday Modal */}
        </div>
        {/* /Page Wrapper */}
        </>
      );
}

export default BudgetExpense;
