
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_11, Avatar_09, Avatar_02, Avatar_10, Avatar_05, Avatar_12, Avatar_01, Avatar_13, Avatar_16 } from "../../Entryfile/imagepath"
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

const Leads = () => {

    const [data, setData] = useState([
      {id:1,image:Avatar_11,name:"John Doe", email :"barrycuda@example.com",mobile:"9876543210",project:"Hospital Administration",status:"Working",created:"10 hours ago"}
    ]);

    const columns = [
      {
        title: '#',
        dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: 'Lead Name',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
              <Link to="/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></Link>
              <Link to="/app/profile/employee-profile">{text}</Link>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
      },

      {
        title: 'Mobile',
        dataIndex: 'mobile', 
        sorter: (a, b) => a.mobile.length - b.mobile.length,
      },
    
      {
        title: 'Project',
        dataIndex: 'project',
        render: (text, record) => (
        <Link to="/app/projects/projects-view">{text}</Link>
          ),
        sorter: (a, b) => a.project.length - b.project.length,
      },
    
      {
        title: 'Assigned Staff',
        dataIndex: 'assignedstaff',
        render: (text, record) => (
          <ul className="team-members">
          <li>
            <a href="#" title="John Doe" data-bs-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
          </li>
          <li>
            <a href="#" title="Richard Miles" data-bs-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
          </li>
          <li className="dropdown avatar-dropdown">
            <a href="#" className="all-users dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">+15</a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="avatar-group">
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_02} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_09} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_10} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_05} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_11} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_12} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_13} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_01} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_16} />
                </a>
              </div>
              <div className="avatar-pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li> 
        </ul>
          ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
        <span className={text==="Working" ? "badge bg-inverse-success" : "badge bg-inverse-info"}>{text}</span>
          ),
      },
      {
        title: 'Created',
        dataIndex: 'created', 
        sorter: (a, b) => a.created.length - b.created.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
              <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
          ),
      },     
    ]
      return ( 
         <div className="page-wrapper">
         <Helmet>
             <title>Leads - qBotica</title>
             <meta name="description" content="Login page"/>					
         </Helmet>
         {/* Page Content */}
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row">
               <div className="col-sm-12">
                 <h3 className="page-title">Leads</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                   <li className="breadcrumb-item active">Leads</li>
                 </ul>
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
                    onChange={console.log("change value")}
                  />
               </div>
             </div>
           </div>
         </div>
         {/* /Page Content */}
       </div>
      );
  }

export default Leads;
