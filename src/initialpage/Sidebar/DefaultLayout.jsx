/**
 * App Routes
 */
 import React, {useEffect,useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// router service
import routerService from "../../router_service";

import Header from './header.jsx';
import SidebarContent from './sidebar';

const DefaultLayout = (props) => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
		const { match } = props;
		return (
			<>
		  <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
		  <Header onMenuClick={(value) => toggleMobileMenu()} />
				<div>
					{routerService && routerService.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<SidebarContent/>
			{/* </div> */}
			{/* Delete Employee Modal */}
				<div className="modal custom-modal fade" id="delete_employee" role="dialog">
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
				{/* /Delete Employee Modal */}
				{/* Delete Employee Modal */}
				<div className="modal custom-modal fade" id="delete_employee" role="dialog">
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
				{/* /Delete Employee Modal */}
				{/* Delete Employee Modal */}
				<div className="modal custom-modal fade" id="delete_employee" role="dialog">
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
				{/* /Delete Employee Modal */}
				<div className="modal question-modal" id="free_question_modal" tabIndex={-1} role="dialog">
					<div className="modal-dialog modal-dialog-centered	" role="document">
						<div className="modal-content">
						<div className="modal-header">
							<h3 className="mb-0">Result for Your Questions</h3>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						</div>
						<div className="modal-body">
							<div className="form-horzontal">
							<div className="col-md-12">
								<div className="text-left mb-3">
								<h3 className="mb-0">Correct Answers : <span className="text-success"><b>5</b></span></h3>
								</div>
								<div className="text-left">
								<h3 className="mb-0">Wrong Answer : <span className="text-danger"><b>1</b></span></h3>
								</div>
							</div>
							</div>
							<div className="mt-3">
							<p>Please click Next to move main menu.</p>
							<Link to="/app/administrator/job-aptitude" className="btn btn-primary btn-lg submit-btn d-block">Next</Link>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			</>
		);
	
}
export default withRouter(DefaultLayout);