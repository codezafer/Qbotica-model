/**
 * App Header
 */
 import React, { useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
 
const Sidebar = (props) => {

  
const [isSideMenu, setSideMenu] = useState("")
const [level2Menu, setLevel2Menu] = useState("")
const [level3Menu, setLevel3Menu] = useState("")

const toggleSidebar = (value) => {
  console.log (value);
  setSideMenu(value);
 
}

const toggleLvelTwo = (value) => {
  setLevel2Menu(value)
}
const toggleLevelThree = (value) => {
  setLevel3Menu(value)
}


    let pathname = props.location.pathname
    return (
        <div className="sidebar" id="sidebar">
          <Scrollbars      
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax="95vh"
                    thumbMinSize={30}
                    universal={false}
                    hideTracksWhenNotNeeded={true}
                    >
            <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
          <ul>  
          <li className="menu-title"> 
                <span>Administration</span>
              </li>
              {/* <li className={pathname.includes('assets') ?"active" :""}> 
                <Link to = "/app/administrator/assets"><i className="la la-object-ungroup" /> <span>Assets</span></Link>
              </li> */}
              <li className="submenu">
                <a href="#" className={isSideMenu == "jobs" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="jobs" ? "": "jobs")}><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
                { isSideMenu == "jobs" ? 
                <ul>
                  <li><Link className={pathname.includes('user-dashboard') || pathname.includes('user-all-jobs')|| pathname.includes('saved-jobs')
                      || pathname.includes('applied-jobs')|| pathname.includes('interviewing')|| pathname.includes('offered-jobs')|| 
                      pathname.includes('visited-jobs') || pathname.includes('archived-jobs')
                      || pathname.includes('job-aptitude') || pathname.includes('questions') ?"active" :""} 
                      to="/app/administrator/user-dashboard"> User Dasboard </Link></li>
                  <li><Link className={pathname.includes('jobs-dashboard') ?"active" :""} to="/app/administrator/jobs-dashboard"> Jobs Dasboard </Link></li>
                  <li><Link className={pathname === ('/app/administrator/jobs') ?"active" :""} to="/app/administrator/jobs"> Manage Jobs </Link></li>
                  <li><Link className={pathname.includes('manage-resumes') ?"active" :""} to="/app/administrator/manage-resumes"> Manage Resumes </Link></li>
                  <li><Link className={pathname.includes('shortlist-candidates') ?"active" :""} to="/app/administrator/shortlist-candidates"> Shortlist Candidates </Link></li>
                  {/* <li><Link className={pathname === ('/app/administrator/interview-questions') ?"active" :""} to="/app/administrator/interview-questions"> Interview Questions </Link></li>
                  <li><Link className={pathname.includes('offer_approvals') ?"active" :""} to="/app/administrator/offer_approvals"> Offer Approvals </Link></li>
                  <li><Link className={pathname.includes('experiance-level') ?"active" :""} to="/app/administrator/experiance-level"> Experience Level </Link></li> */}
                  <li><Link className={pathname === ('/app/administrator/candidates') ?"active" :""} to="/app/administrator/candidates"> Candidates List </Link></li>
                  {/* <li><Link className={pathname.includes('schedule-timing') ?"active" :""} to="/app/administrator/schedule-timing"> Schedule timing </Link></li>
                  <li><Link className={pathname.includes('apptitude-result') ?"active" :""} to="/app/administrator/apptitude-result"> Aptitude Results </Link></li> */}
                  
                </ul>
                  :"" 
                }
              </li>
              {/* <li className={pathname.includes('knowledgebase') ?"active" :""}> 
                <Link to = "/app/administrator/knowledgebase"><i className="la la-question" /> <span>Knowledgebase</span></Link>
              </li>
              <li className={pathname.includes('activities') ?"active" :""}> 
                <Link to = "/app/administrator/activities"><i className="la la-bell" /> <span>Activities</span></Link>
              </li>
              <li className={pathname.includes('administrator/users') ?"active" :""}> 
                <Link to = "/app/administrator/users"><i className="la la-user-plus" /> <span>Users</span></Link>
              </li> */}
              <li> 
                <Link to = "/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></Link>
              </li>

              {/* <li className="menu-title"> 
                <span>UI Interface</span>
              </li>
              <li> 
                <Link to = "/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></Link>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "forms" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="forms" ? "": "forms")}><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
                { isSideMenu == "forms" ?
                <ul>
                  <li><Link className={pathname.includes('basicinputs') ?"active" :""}
                      to="/app/ui-interface/forms/basicinputs">Basic Inputs </Link></li>
                  <li><Link className={pathname.includes('inputgroups') ?"active" :""} 
                      to="/app/ui-interface/forms/inputgroups">Input Groups </Link></li>
                  <li><Link className={pathname.includes('horizontalform') ?"active" :""}
                     to="/app/ui-interface/forms/horizontalform">Horizontal Form </Link></li>
                  <li><Link className={pathname.includes('verticalform') ?"active" :""} 
                    to="/app/ui-interface/forms/verticalform"> Vertical Form </Link></li>
                  <li><Link className={pathname.includes('formmask') ?"active" :""}
                      to="/app/ui-interface/forms/formmask"> Form Mask </Link></li>
                  <li><Link className={pathname.includes('formvalidation') ?"active" :""}
                      to="/app/ui-interface/forms/formvalidation"> Form Validation </Link></li>
                </ul>
                 :"" 
                }
              </li>
              <li className="submenu">
                <Link to = "/app/ui-interface/tables/basic" className={isSideMenu == "tables" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="tables" ? "": "tables")}><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></Link>
                { isSideMenu == "tables" ?
                <ul>
                  <li><Link className={pathname.includes('tables/basic') ?"active" :""} to="/app/ui-interface/tables/basic">Basic Tables </Link></li>
                  <li><Link className={pathname.includes('tables/data-table') ?"active" :""} to="/app/ui-interface/tables/data-table">Data Table </Link></li>
                </ul>
                 :"" 
                }
              </li> */}

              </ul> 
          </div>  
        </div> 
            
        {/* <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "dashboard" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="dashboard" ? "": "dashboard")}><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                { isSideMenu == "dashboard" ? 
                <ul >
                  <li><Link className={pathname.includes('main/dashboard') ?"active" :""} to="/app/main/dashboard">Admin Dashboard</Link></li>
                  <li><Link className={pathname.includes('main/employee-') ?"active" :""} 
                        to="/app/main/employee-dashboard">Employee Dashboard</Link></li>
                </ul>
                	:"" 
                }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "apps" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="apps" ? "": "apps")} ><i className="la la-cube" /> <span> Apps</span> <span className="menu-arrow" /></a>
                { isSideMenu == "apps" ? 
                <ul>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to="/conversation/chat">Chat</Link></li>
                  <li className="submenu">
                    <a href="#" className={level2Menu == "calls" ? "subdrop" : ""} onClick={()=> toggleLvelTwo(level2Menu =="calls" ? "": "calls")}><span> Calls</span> <span className="menu-arrow" /></a>
                    { level2Menu == "calls" ?  
                    <ul>
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/voice-call">Voice Call</Link></li>
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/video-call">Video Call</Link></li>
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/outgoing-call">Outgoing Call</Link></li>
                      <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/conversation/incoming-call">Incoming Call</Link></li>
                    </ul>
                    :"" 
                  }
                  </li>
                  <li><Link className={pathname.includes('apps/calendar') ?"active" :""} to="/app/apps/calendar">Calendar</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} className={pathname.includes('contacts') ?"active" :""} to="/app/apps/contacts">Contacts</Link></li>
                  <li><Link to = "/email/inbox">Email</Link></li>
                  <li><Link className={pathname.includes('file-manager') ?"active" :""} to="/app/apps/file-manager">File Manager</Link></li>
                </ul>
                	:"" 
                }
              </li>            
              <li className="submenu" >             
                <a href="#" className= {isSideMenu == "employee" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="employee" ? "": "employee")}><i className="la la-user" /> <span className="noti-dot"> Employees</span> <span className="menu-arrow" /></a>
                { isSideMenu == "employee" ? 
                
                <ul >
                  <li><Link className={pathname.includes('allemployees') ?"active" :pathname.includes('employees-list') ?"active" :""} 
                        to="/app/employee/allemployees">All Employees</Link></li>
                  <li><Link className={pathname.includes('holidays') ?"active" :""} to="/app/employee/holidays">Holidays</Link></li>
                  <li><Link className={pathname.includes('es-admin') ?"active" :""} to="/app/employee/leaves-admin">Leaves (Admin) <span className="badge badge-pill bg-primary float-end">1</span></Link></li>
                  <li><Link className={pathname.includes('ves-employee') ?"active" :""} to="/app/employee/leaves-employee">Leaves (Employee)</Link></li>
                  <li><Link className={pathname.includes('e-settings') ?"active" :""} to="/app/employee/leave-settings">Leave Settings</Link></li>
                  <li><Link className={pathname.includes('nce-admin') ?"active" :""} to="/app/employee/attendance-admin">Attendance (Admin)</Link></li>
                  <li><Link className={pathname.includes('ce-employee') ?"active" :""} to="/app/employee/attendance-employee">Attendance (Employee)</Link></li>
                  <li><Link className={pathname.includes('departments') ?"active" :""} to="/app/employee/departments">Departments</Link></li>
                  <li><Link className={pathname.includes('designations') ?"active" :""} to="/app/employee/designations">Designations</Link></li>
                  <li><Link className={pathname.includes('timesheet') ?"active" :""} to="/app/employee/timesheet">Timesheet</Link></li>
                  <li><Link className={pathname.includes('shift-scheduling') || pathname.includes('shift-list') ?"active" :""} 
                        to="/app/employee/shift-scheduling">Shift &amp; Schedule</Link></li>
                  <li><Link className={pathname.includes('overtime') ?"active" :""} to="/app/employee/overtime">Overtime</Link></li>
                </ul>
                	:"" 
                }
              </li>
              <li className={pathname.includes('clients') ?"active" :""}> 
                <Link to = "/app/employees/clients"><i className="la la-users" /> <span>Clients</span></Link>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "projects" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="projects" ? "": "projects")}><i className="la la-rocket" /> <span> Projects</span> <span className="menu-arrow" /></a>
                { isSideMenu == "projects" ? 
                <ul>
                  <li><Link className={pathname.includes('t_dashboard' ) ?"active" : pathname.includes('projects-list' ) ?
                  "active" : pathname.includes('cts-view' ) ? "active" : ""} 
                      to="/app/projects/project_dashboard">Projects</Link></li>
                  <li><Link onClick={()=>localStorage.setItem("minheight","true")} to = "/tasks/tasks">Tasks</Link></li>
                  <li><Link className={pathname.includes('task-board') ?"active" :""} to="/app/projects/task-board">Task Board</Link></li>
                </ul>
                	:"" 
                }
              </li>
              <li className={pathname.includes('leads') ?"active" :""}> 
                <Link to = "/app/employees/leads"><i className="la la-user-secret" /> <span>Leads</span></Link>
              </li>
              <li className={pathname.includes('tickets') ?"active" : pathname.includes('ticket-view') ?"active" : ""}> 
                <Link to = "/app/employees/tickets"><i className="la la-ticket" /> <span>Tickets</span></Link>
              </li>
              <li className="menu-title"> 
                <span>HR</span>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "sales" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="sales" ? "": "sales")}><i className="la la-files-o" /> <span> Sales </span> <span className="menu-arrow" /></a>
                { isSideMenu == "sales" ? 
                <ul>
                  <li><Link className={pathname.includes('estimates') ?"active" :""} to="/app/sales/estimates">Estimates</Link></li>
                  <li><Link className={pathname.includes('invoices') ?"active" :""} to="/app/sales/invoices">Invoices</Link></li>
                  <li><Link className={pathname.includes('payments') ?"active" :""} to="/app/sales/payments">Payments</Link></li>
                  <li><Link className={pathname.includes('expenses') ?"active" :""} to="/app/sales/expenses">Expenses</Link></li>
                  <li><Link className={pathname.includes('provident-fund') ?"active" :""} to="/app/sales/provident-fund">Provident Fund</Link></li>
                  <li><Link className={pathname.includes('taxes') ?"active" :""} to="/app/sales/taxes">Taxes</Link></li>
                </ul>
                :"" 
              }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "accounting" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="accounting" ? "": "accounting")}><i className="la la-files-o" /> <span> Accounting </span> <span className="menu-arrow" /></a>
                { isSideMenu == "accounting" ? 
                <ul>
                  <li><Link className={pathname.includes('categories') || pathname.includes('sub-category') ?"active" :""} to="/app/accounts/categories">Categories</Link></li>
                  <li><Link className={pathname.includes('budgets') ?"active" :""} to="/app/accounts/budgets">Budgets</Link></li>
                  <li><Link className={pathname.includes('budget-expenses') ?"active" :""} to="/app/accounts/budget-expenses">Budget Expenses</Link></li>
                  <li><Link className={pathname.includes('budget-revenues') ?"active" :""} to="/app/accounts/budget-revenues">Budget Revenues</Link></li>
                </ul>
                :"" 
                }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "payroll" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="payroll" ? "": "payroll")}><i className="la la-money" /> <span> Payroll </span> <span className="menu-arrow" /></a>
                { isSideMenu == "payroll" ? 
                <ul>
                  <li><Link className={pathname.includes('_salary') ?"active" :""} to="/app/payroll/_salary"> Employee Salary </Link></li>
                  <li><Link className={pathname.includes('y-view') ?"active" :""} to="/app/payroll/salary-view"> Payslip </Link></li>
                  <li><Link className={pathname.includes('payroll-items') ?"active" :""} to="/app/payroll/payroll-items"> Payroll Items </Link></li>
                </ul>
                :"" 
                }
              </li>
              <li className={pathname.includes('policies') ?"active" :""}> 
                <Link to = "/app/hr/policies"><i className="la la-file-pdf-o" /> <span>Policies</span></Link>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "reports" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="reports" ? "": "reports")}><i className="la la-pie-chart" /> <span> Reports </span> <span className="menu-arrow" /></a>
                { isSideMenu == "reports" ? 
                <ul>
                  <li><Link className={pathname.includes('expense-') ?"active" :""} to="/app/reports/expense-reports"> Expense Report </Link></li>
                  <li><Link className={pathname.includes('invoice-') ?"active" :""} to="/app/reports/invoice-reports"> Invoice Report </Link></li>
                  <li><Link className={pathname.includes('payments-') ?"active" :""} to="/app/reports/payments-reports"> Payments Report </Link></li>
                  <li><Link className={pathname.includes('project-') ?"active" :""} to="/app/reports/project-reports"> Project Report </Link></li>
                  <li><Link className={pathname.includes('task-') ?"active" :""} to="/app/reports/task-reports"> Task Report </Link></li>
                  <li><Link className={pathname.includes('user-') ?"active" :""} to="/app/reports/user-reports"> User Report </Link></li>
                  <li><Link className={pathname.includes('employee-') ?"active" :""} to="/app/reports/employee-reports"> Employee Report </Link></li>
                  <li><Link className={pathname.includes('payslip-') ?"active" :""} to="/app/reports/payslip-reports"> Payslip Report </Link></li>
                  <li><Link className={pathname.includes('attendance-') ?"active" :""} to="/app/reports/attendance-reports"> Attendance Report </Link></li>
                  <li><Link className={pathname.includes('leave-') ?"active" :""} to="/app/reports/leave-reports"> Leave Report </Link></li>
                  <li><Link className={pathname.includes('daily-') ?"active" :""} to="/app/reports/daily-reports"> Daily Report </Link></li>
                </ul>
                :"" 
              }
              </li>
              <li className="menu-title"> 
                <span>Performance</span>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "performance" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="performance" ? "": "performance")}><i className="la la-graduation-cap" /> <span> Performance </span> <span className="menu-arrow" /></a>
                { isSideMenu == "performance" ? 
                <ul>
                  <li><Link className={pathname.includes('-indicator') ?"active" :""} to="/app/performances/performance-indicator"> Performance Indicator </Link></li>
                  <li><Link className={pathname.includes('-review') ?"active" :""} to="/app/performances/performance-review"> Performance Review </Link></li>
                  <li><Link className={pathname.includes('-appraisal') ?"active" :""} to="/app/performances/performance-appraisal"> Performance Appraisal </Link></li>
                </ul>
                :"" 
              }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "goals" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="goals" ? "": "goals")}><i className="la la-crosshairs" /> <span> Goals </span> <span className="menu-arrow" /></a>
                { isSideMenu == "goals" ? 
                <ul>
                  <li><Link className={pathname.includes('-tracking') ?"active" :""} to="/app/goals/goal-tracking"> Goal List </Link></li>
                  <li><Link className={pathname.includes('l-type') ?"active" :""} to="/app/goals/goal-type"> Goal Type </Link></li>
                </ul>
                :"" 
              }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "training" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="training" ? "": "training")}><i className="la la-edit" /> <span> Training </span> <span className="menu-arrow" /></a>
                { isSideMenu == "training" ? 
                <ul>
                  <li><Link className={pathname.includes('training-list') ?"active" :""} to="/app/training/training-list"> Training List </Link></li>
                  <li><Link className={pathname.includes('trainer') ?"active" :""} to="/app/training/trainer"> Trainers</Link></li>
                  <li><Link className={pathname.includes('training-type') ?"active" :""} to="/app/training/training-type"> Training Type </Link></li>
                </ul>
                :"" 
              }
              </li>
              <li className={pathname.includes('promotion') ?"active" :""}><Link to = "/app/performance/promotion"><i className="la la-bullhorn" /> <span>Promotion</span></Link></li>
              <li className={pathname.includes('resignation') ?"active" :""}><Link to = "/app/performance/resignation"><i className="la la-external-link-square" /> <span>Resignation</span></Link></li>
              <li className={pathname.includes('termination') ?"active" :""}><Link to = "/app/performance/termination"><i className="la la-times-circle" /> <span>Termination</span></Link></li>
              <li className="menu-title"> 
                <span>Administration</span>
              </li>
              <li className={pathname.includes('assets') ?"active" :""}> 
                <Link to = "/app/administrator/assets"><i className="la la-object-ungroup" /> <span>Assets</span></Link>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "jobs" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="jobs" ? "": "jobs")}><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
                { isSideMenu == "jobs" ? 
                <ul>
                  <li><Link className={pathname.includes('user-dashboard') || pathname.includes('user-all-jobs')|| pathname.includes('saved-jobs')
                      || pathname.includes('applied-jobs')|| pathname.includes('interviewing')|| pathname.includes('offered-jobs')|| 
                      pathname.includes('visited-jobs') || pathname.includes('archived-jobs')
                      || pathname.includes('job-aptitude') || pathname.includes('questions') ?"active" :""} 
                      to="/app/administrator/user-dashboard"> User Dasboard </Link></li>
                  <li><Link className={pathname.includes('jobs-dashboard') ?"active" :""} to="/app/administrator/jobs-dashboard"> Jobs Dasboard </Link></li>
                  <li><Link className={pathname === ('/app/administrator/jobs') ?"active" :""} to="/app/administrator/jobs"> Manage Jobs </Link></li>
                  <li><Link className={pathname.includes('manage-resumes') ?"active" :""} to="/app/administrator/manage-resumes"> Manage Resumes </Link></li>
                  <li><Link className={pathname.includes('shortlist-candidates') ?"active" :""} to="/app/administrator/shortlist-candidates"> Shortlist Candidates </Link></li>
                  <li><Link className={pathname === ('/app/administrator/interview-questions') ?"active" :""} to="/app/administrator/interview-questions"> Interview Questions </Link></li>
                  <li><Link className={pathname.includes('offer_approvals') ?"active" :""} to="/app/administrator/offer_approvals"> Offer Approvals </Link></li>
                  <li><Link className={pathname.includes('experiance-level') ?"active" :""} to="/app/administrator/experiance-level"> Experience Level </Link></li>
                  <li><Link className={pathname === ('/app/administrator/candidates') ?"active" :""} to="/app/administrator/candidates"> Candidates List </Link></li>
                  <li><Link className={pathname.includes('schedule-timing') ?"active" :""} to="/app/administrator/schedule-timing"> Schedule timing </Link></li>
                  <li><Link className={pathname.includes('apptitude-result') ?"active" :""} to="/app/administrator/apptitude-result"> Aptitude Results </Link></li>
                  
                </ul>
                  :"" 
                }
              </li>
              <li className={pathname.includes('knowledgebase') ?"active" :""}> 
                <Link to = "/app/administrator/knowledgebase"><i className="la la-question" /> <span>Knowledgebase</span></Link>
              </li>
              <li className={pathname.includes('activities') ?"active" :""}> 
                <Link to = "/app/administrator/activities"><i className="la la-bell" /> <span>Activities</span></Link>
              </li>
              <li className={pathname.includes('administrator/users') ?"active" :""}> 
                <Link to = "/app/administrator/users"><i className="la la-user-plus" /> <span>Users</span></Link>
              </li>
              <li> 
                <Link to = "/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></Link>
              </li>
              <li className="menu-title"> 
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "profile" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="profile" ? "": "profile")}><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
                { isSideMenu == "profile" ? 
                <ul>
                  <li><Link className={pathname.includes('profile/employee-') ?"active" :""} to="/app/profile/employee-profile"> Employee Profile </Link></li>
                  <li><Link className={pathname.includes('client-') ?"active" :""} to="/app/profile/client-profile"> Client Profile </Link></li>
                </ul>
                  :"" 
                }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "authentication" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="authentication" ? "": "authentication")} ><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                { isSideMenu == "authentication" ? 
                <ul>
                  <li><Link to = "/login"> Login </Link></li>
                  <li><Link to = "/register"> Register </Link></li>
                  <li><Link to = "/forgotpassword"> Forgot Password </Link></li>
                  <li><Link to = "/otp"> OTP </Link></li>
                  <li><Link to = "/lockscreen"> Lock Screen </Link></li>
                </ul>
                 :"" 
                }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "error pages" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="error pages" ? "": "error pages")}><i className="la la-exclamation-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
                { isSideMenu == "error pages" ? 
                <ul>
                  <li><Link to = "/error-404">404 Error </Link></li>
                  <li><Link to = "/error-500">500 Error </Link></li>
                </ul>
                 :"" 
                }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "subscriptions" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="subscriptions" ? "": "subscriptions")}><i className="la la-hand-o-up" /> <span> Subscriptions </span> <span className="menu-arrow" /></a>
                { isSideMenu == "subscriptions" ?
                <ul>
                  <li><Link className={pathname.includes('subscriptionadmin') ?"active" :""} to="/app/subscription/subscriptionadmin"> 
                  Subscriptions (Admin) </Link></li>
                  <li><Link className={pathname.includes('subscriptioncompany') ?"active" :""} to="/app/subscription/subscriptioncompany">
                     Subscriptions (Company) </Link></li>
                  <li><Link className={pathname.includes('subscribedcompanies') ?"active" :""} to="/app/subscription/subscribedcompanies">
                     Subscribed Companies</Link></li>
                </ul>
                 :"" 
                }
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "pages" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pages" ? "": "pages")}><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
                { isSideMenu == "pages" ?
                <ul>
                  <li><Link className={pathname.includes('pages/search') ?"active" :""} to="/app/pages/search"> Search </Link></li>
                  <li><Link className={pathname.includes('pages/faq') ?"active" :""} to="/app/pages/faq"> FAQ </Link></li>
                  <li><Link className={pathname.includes('pages/terms') ?"active" :""} to="/app/pages/terms"> Terms </Link></li>
                  <li><Link className={pathname.includes('privacypolicy') ?"active" :""} to="/app/pages/privacypolicy"> Privacy Policy </Link></li>
                  <li><Link className={pathname.includes('pages/blank') ?"active" :""} to="/app/pages/blank"> Blank Page </Link></li>
                </ul>
                :"" 
              }
              </li>
              <li className="menu-title"> 
                <span>UI Interface</span>
              </li>
              <li> 
                <Link to = "/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></Link>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "forms" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="forms" ? "": "forms")}><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
                { isSideMenu == "forms" ?
                <ul>
                  <li><Link className={pathname.includes('basicinputs') ?"active" :""}
                      to="/app/ui-interface/forms/basicinputs">Basic Inputs </Link></li>
                  <li><Link className={pathname.includes('inputgroups') ?"active" :""} 
                      to="/app/ui-interface/forms/inputgroups">Input Groups </Link></li>
                  <li><Link className={pathname.includes('horizontalform') ?"active" :""}
                     to="/app/ui-interface/forms/horizontalform">Horizontal Form </Link></li>
                  <li><Link className={pathname.includes('verticalform') ?"active" :""} 
                    to="/app/ui-interface/forms/verticalform"> Vertical Form </Link></li>
                  <li><Link className={pathname.includes('formmask') ?"active" :""}
                      to="/app/ui-interface/forms/formmask"> Form Mask </Link></li>
                  <li><Link className={pathname.includes('formvalidation') ?"active" :""}
                      to="/app/ui-interface/forms/formvalidation"> Form Validation </Link></li>
                </ul>
                 :"" 
                }
              </li>
              <li className="submenu">
                <Link to = "/app/ui-interface/tables/basic" className={isSideMenu == "tables" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="tables" ? "": "tables")}><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></Link>
                { isSideMenu == "tables" ?
                <ul>
                  <li><Link className={pathname.includes('tables/basic') ?"active" :""} to="/app/ui-interface/tables/basic">Basic Tables </Link></li>
                  <li><Link className={pathname.includes('tables/data-table') ?"active" :""} to="/app/ui-interface/tables/data-table">Data Table </Link></li>
                </ul>
                 :"" 
                }
              </li>
              <li className="menu-title"> 
                <span>Extras</span>
              </li>
              <li> 
                <a href="#"><i className="la la-file-text" /> <span>Documentation</span></a>
              </li>
              <li> 
                <a href=""><i className="la la-info" /> <span>Change Log</span> <span className="badge badge-primary ml-auto">v3.4</span></a>
              </li>
              <li className="submenu">
                <a href="#" className={isSideMenu == "multi Level" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="multi Level" ? "": "multi Level")}><i className="la la-share-alt" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                { isSideMenu == "multi Level" ?
                <ul>
                  <li className="submenu">
                    <a href="#" className={level2Menu == "level 1" ? "subdrop" : ""} onClick={()=> toggleLvelTwo(level2Menu =="level 1" ? "": "level 1")}> <span>Level 1</span> <span className="menu-arrow" /></a>
                    { level2Menu == "level 1" ?
                    <ul>
                      <li><a href="#" ><span>Level 2</span></a></li>
                      <li className="submenu">
                        <a href="#" className={level3Menu == "level 2" ? "subdrop" : ""} onClick={()=> toggleLevelThree( level3Menu =="level 2" ? "": "level 2")}> <span> Level 2</span> <span className="menu-arrow" /></a>
                        {level3Menu == "level 2" ?
                        <ul>
                          <li><a href="">Level 3</a></li>
                          <li><a href="">Level 3</a></li>
                        </ul>
                             :"" 
                            }
                      </li>
                      <li><a href=""> <span>Level 2</span></a></li>
                    </ul>
                      :"" 
                      }
                  </li>
                  <li>
                    <a href=""> <span>Level 1</span></a>
                  </li>
                </ul>
                :"" 
              }
              </li>
            </ul>
          </div>
        </div> */}
        </Scrollbars>
      </div>
       
      );
   
}

export default withRouter(Sidebar);
