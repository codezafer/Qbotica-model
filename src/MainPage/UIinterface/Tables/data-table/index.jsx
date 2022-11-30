/**
 * Data Table
 */
import React , {useState} from 'react';
import { Helmet } from "react-helmet";
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../../paginationfunction"
import "../../../antdstyle.css"

// Datatable JS
// import "../../../assets/js/jquery.dataTables.min.js";
// import "../../../assets/js/dataTables.bootstrap4.min.js";	
	
  
const DataTable = () => {
	const [data, setData] = useState([
		{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:"61",salary:'320,800'},
		{id:2,name:"Brenden Wagner",position:	"Software Engineer",office:	"San Francisco"	,age:"28",	salary:"206,850"},
		{id:3,name:"Fiona Green",position:	"Chief Operating Officer (COO)"	,office:"San Francisco"	,age:"48",	salary:"850,000"},
		{id:4,name:"Shou Itou",position:	"Regional Marketing",office:	"Tokyo",	age:"20",	salary:"163,000"},
		{id:5,name:"Garrett Winters",position:"Accountant",office:"Tokyo",age:"63",salary:'170,750'},
		{id:6,name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",age:"66",salary:'86,000'},
		{id:7,name:"Ashton",position:"Support Lead",office:"San",age:"66",salary:'86'},
		{id:8,name:"Jena Gaines",position:"Support Lead",office:"London",age:"30",salary:'90,560'},
		{id:9,name:"Sonya Frost",position:"Office Manager",office:"Edinburgh",age:"23",salary:'103,600'},
		{id:10,name:"Colleen Hurst",position:"Software Engineer",office:"San Francisco",age:"39",salary:'205,500'},
		{id:11,name:"Rhona Davidson",position:"Javascript Developer",office:"Tokyo",age:"55",salary:'327,900'},
		{id:12,name:"Herrod Chandler",position:"Integration Specialist",office:"San Francisco",age:"59",salary:'137,500'},
		{id:13,name:"Brielle Williamson",position:"Integration Specialist",office:"New York",age:"61",salary:'372,000'},
		{id:14,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:"33",salary:'162,700'},
		{id:15,name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",age:"22",salary:'433,060'},        
	]);
	
          const columns = [
            
            {
              title: 'Name',
              dataIndex: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
              title: 'Position',
              dataIndex: 'position',
              sorter: (a, b) => a.position.length - b.position.length,
            },
          
            {
              title: 'Office',
              dataIndex: 'office',
              sorter: (a, b) => a.office.length - b.office.length,
            },

            {
              title: 'Age',
              dataIndex: 'age',
              sorter: (a, b) => a.age.length - b.age.length,
            },

            {
              title: 'Salary',
              dataIndex: 'salary', 
              render: (text, record) => (            
			  <span>$ {text}</span>
                ), 
              sorter: (a, b) => a.salary.length - b.salary.length,
            },
          ]
		return (
			<div className="page-wrapper">
			<Helmet>
				  <title>Data Tables - qBotica</title>
				  <meta name="description" content="Data Tables"/>					
			</Helmet>
			
			<div className="content container-fluid">
			  {/* Page Header */}
			  <div className="page-header">
				<div className="row">
				  <div className="col">
					<h3 className="page-title">Data Tables</h3>
					<ul className="breadcrumb">
					  <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
					  <li className="breadcrumb-item active">Data Tables</li>
					</ul>
				  </div>
				</div>
			  </div>
			  {/* /Page Header */}
			  <div className="row">
				<div className="col-sm-12">
				  <div className="card mb-0">
					<div className="card-header">
					  <h4 className="card-title mb-0">Default Datatable</h4>
					  <p className="card-text">
						This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
					  </p>
					</div>
					<div className="card-body">
					  <div className="table-responsive">
					  <Table
							pagination= { {total : data.length,
								showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
								showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
							style = {{overflowX : 'auto'}}
							columns={columns}                 
							bordered
							dataSource={data}
							rowKey={record => record.id}
							// onChange={this.handleTableChange}
						/>
						
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>			
		  </div>
		);
	}


export default DataTable;
