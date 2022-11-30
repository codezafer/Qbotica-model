/**
 * Signin Firebase
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Knowledgebase = () => {

      return ( 
             <div className="page-wrapper">
             <Helmet>
                <title>Knowledgebase - qBotica</title>
                <meta name="description" content="Login page"/>					
             </Helmet>
             {/* Page Content */}
             <div className="content container-fluid">
               {/* Page Header */}
               <div className="page-header">
                 <div className="row">
                   <div className="col-sm-12">
                     <h3 className="page-title">Knowledgebase</h3>
                     <ul className="breadcrumb">
                       <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                       <li className="breadcrumb-item active">Knowledgebase</li>
                     </ul>
                   </div>
                 </div>
               </div>
               {/* /Page Header */}
               <div className="row">
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Installation &amp; Activation <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Premium Members Features <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> API Usage &amp; Guide lines <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Getting Started <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Lorem ipsum dolor <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Lorem ipsum dolor <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Lorem ipsum dolor <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Lorem ipsum dolor <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="col-xl-4 col-md-6 col-sm-6 ">
                   <div className="topics">
                     <h3 className="topic-title"><Link to="/app/administrator/knowledgebase-view"><i className="fa fa-folder-o" /> Lorem ipsum dolor <span>11</span></Link></h3>
                     <ul className="topics-list">
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                       <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
             {/* /Page Content */}
           </div>

      );
  }

export default Knowledgebase;
