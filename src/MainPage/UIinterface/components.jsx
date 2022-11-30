/**
 * Signin Firebase
 */

 import React, { useEffect,useState} from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {headerlogo,lnEnglish,lnFrench,lnSpanish,lnGerman,Avatar_02,Avatar_03,Avatar_17,Avatar_06,
    Avatar_13,Avatar_09,Avatar_05,Avatar_08,Avatar_21,Img_01} from '../../Entryfile/imagepath';
import Header from '../../initialpage/Sidebar/header';
import Cards from "../../_components/cards/cards"
import Dropdown from "../../_components/dropdown/Dropdown"
import Progressbar from "../../_components/progressbar/progressbar"
import Tabs from "../../_components/tabs/tabs"
import Typography from "../../_components/typography/typography"
import Pagination from "../../_components/pagination/pagination"

const UIComponents = () => {
	
	 
  const handlesidebar=()=>{
    document.body.classList.toggle('mini-sidebar');
  }
  const onMenuClik = () => {
    props.onMenuClick()
  }
  const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
	  
    return (
         <div className='component'>
            <Helmet>
               <title>Components - qBotica</title>
               <meta name="description" content="Login page"/>					
            </Helmet> 
			<div className={`main-wrapper ${menu ? 'slide-nav': ''}`}>  
            
            <Header onMenuClick={(value) => toggleMobileMenu()} />

            
            
          {/* Sidebar */}
            <div className="sidebar stickyside" id="sidebar">
              <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                  <ul>
                    <li className="menu-title"> 
                      Components
                    </li>
                    <li> 
                      <a href="#comp_alerts" className="active">Alerts</a>
                    </li>
                    <li> 
                      <a href="#comp_breadcrumbs">Breadcrumbs</a>
                    </li>
                    <li> 
                      <a href="#comp_buttons">Buttons</a>
                    </li>
                    <li> 
                      <a href="#comp_cards">Cards</a>
                    </li>
                    <li> 
                      <a href="#comp_dropdowns">Dropdowns</a>
                    </li>
                    <li> 
                      <a href="#comp_pagination">Pagination</a>
                    </li>
                    <li> 
                      <a href="#comp_progress">Progress</a>
                    </li>
                    <li> 
                      <a href="#comp_tabs">Tabs</a>
                    </li>
                    <li> 
                      <a href="#comp_typography">Typography</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          {/* /Sidebar */}
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Components</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                      <li className="breadcrumb-item active">Components</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              {/* Alerts */}
              <section className="comp-section" id="comp_alerts">
                <h3 className="section-title">Alerts</h3>
                <div>
                  <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Warning!</strong> There was a problem with your <a href="#" className="alert-link">network connection</a>.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> A <a href="#" className="alert-link">problem</a> has been occurred while submitting your data.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your <a href="#" className="alert-link">message</a> has been sent successfully.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Note!</strong> Please read the <a href="#" className="alert-link">comments</a> carefully.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-light alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="alert alert-dark alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                </div>
              </section>
              {/* /Alerts */}
              {/* Breadcrumbs */}
              <section className="comp-section" id="comp_breadcrumbs">
                <h3 className="section-title">Breadcrumbs</h3>
                <div>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item"><a href="#">Products</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Accessories</li>
                    </ol>
                  </nav>
                </div>
              </section>
              {/* /Breadcrumbs */}
              {/* Buttons */}
              <section className="comp-section comp-buttons" id="comp_buttons">
                <h3 className="section-title">Buttons</h3>
                <div>
                  <h4 className="card-title">Default Button</h4>
                  <button type="button" className="btn btn-primary me-1">Primary</button>
                  <button type="button" className="btn btn-secondary me-1">Secondary</button>
                  <button type="button" className="btn btn-success me-1">Success</button>
                  <button type="button" className="btn btn-danger me-1">Danger</button>
                  <button type="button" className="btn btn-warning me-1">Warning</button>
                  <button type="button" className="btn btn-info me-1">Info</button>
                  <button type="button" className="btn btn-light me-1">Light</button>
                  <button type="button" className="btn btn-dark me-1">Dark</button>
                  <button type="button" className="btn btn-link me-1">Link</button>
                  <hr />
                  <h4 className="card-title">Button Sizes</h4>
                  <p>
                    <button type="button" className="btn btn-primary btn-lg me-1">Primary</button>
                    <button type="button" className="btn btn-secondary btn-lg me-1">Secondary</button>
                    <button type="button" className="btn btn-success btn-lg me-1">Success</button>
                    <button type="button" className="btn btn-danger btn-lg me-1">Danger</button>
                    <button type="button" className="btn btn-warning btn-lg me-1">Warning</button>
                    <button type="button" className="btn btn-info btn-lg me-1">Info</button>
                    <button type="button" className="btn btn-light btn-lg me-1">Light</button>
                    <button type="button" className="btn btn-dark btn-lg me-1">Dark</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary me-1">Primary</button>
                    <button type="button" className="btn btn-secondary me-1">Secondary</button>
                    <button type="button" className="btn btn-success me-1">Success</button>
                    <button type="button" className="btn btn-danger me-1">Danger</button>
                    <button type="button" className="btn btn-warning me-1">Warning</button>
                    <button type="button" className="btn btn-info me-1">Info</button>
                    <button type="button" className="btn btn-light me-1">Light</button>
                    <button type="button" className="btn btn-dark me-1">Dark</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary btn-sm me-1">Primary</button>
                    <button type="button" className="btn btn-secondary btn-sm me-1">Secondary</button>
                    <button type="button" className="btn btn-success btn-sm me-1">Success</button>
                    <button type="button" className="btn btn-danger btn-sm me-1">Danger</button>
                    <button type="button" className="btn btn-warning btn-sm me-1">Warning</button>
                    <button type="button" className="btn btn-info btn-sm me-1">Info</button>
                    <button type="button" className="btn btn-light btn-sm me-1">Light</button>
                    <button type="button" className="btn btn-dark btn-sm me-1">Dark</button>
                  </p>
                  <hr />
                  <h4 className="card-title">Button Groups</h4>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Buttons */}
              {/* Cards */}
                <Cards/>
              {/* /Cards */}
              {/* Dropdowns */}
                <Dropdown/>
              {/* /Dropdowns */}
              {/* Pagination */}
              <Pagination/>
              {/* /Pagination */}
              {/* Progress */}
              < Progressbar/>
              {/* /Progress */}
              {/* Tabs */}
              <Tabs/>
              {/* /Tabs */}
              {/* Typography */}
              <Typography/>
              {/* /Typography */}
            </div>
            {/* /Page Content */}
          </div>
          
          {/* /Page Wrapper */}
        </div>
		</div>	
      );
   }


export default UIComponents;
