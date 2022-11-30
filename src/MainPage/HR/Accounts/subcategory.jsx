
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

const SubCategory = () => {

    const [data, setData] = useState([
        {id:1,category:"Hardware",subcategory:"Hardware Expenses"},
        {id:2,category:"Material",subcategory:"Material Expenses"},
        {id:3,category:"Vehicle",subcategory:"Company Vehicle Information"},
    ]);
 
    const columns = [
           
      {
        title: '#',
        dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
      },  
      {
        title: 'Category Name',
        dataIndex: 'category',
        sorter: (a, b) => a.category.length - b.category.length,
      },     
      {
        title: 'Sub-Category Name',
        dataIndex: 'subcategory',
        sorter: (a, b) => a.subcategory.length - b.subcategory.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action">
                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_categories"><i className="fa fa-pencil m-r-5" /> Edit</a>
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            </div>
          ),
      },
    ]
      return (         
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <Helmet>
                    <title>Sub Categories - qBotica</title>
                    <meta name="description" content="Login page"/>					
                </Helmet>
                {/* Page Content */}
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                        <h3 className="page-title">Sub Categories</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Accounts</li>
                        </ul>
                        </div>
                        <div className="col-auto float-end ml-auto">
                        <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_categories"><i className="fa fa-plus" /> Add Sub Categories</a>
                        </div>
                    </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                        <Table className="table-striped"
                            pagination= { {total : data.length,
                                showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                            style = {{overflowX : 'auto'}}
                            columns={columns}                 
                            // bordered
                            dataSource={data}
                            rowKey={record => record.id}
                            // onChange={this.handleTableChange}
                        />
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
                        <h5 className="modal-title">Add Sub Categories</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                            <label>Categories Name <span className="text-danger">*</span></label>
                            <select className="form-control select">
                                <option>Select</option>
                                <option>Hardware</option>
                                <option>Material</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Sub Categories Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                            </div>
                            <div className="submit-section">
                            <button className="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
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
                        <h5 className="modal-title">Add Categories</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                            <label>Categories Name <span className="text-danger">*</span></label>
                            <select className="form-control select">
                                <option>Select</option>
                                <option>Hardware</option>
                                <option>Material</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Sub Categories Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                            </div>
                            <div className="submit-section">
                            <button className="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
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

export default SubCategory;
