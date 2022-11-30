/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ExpenseReport from './expensereport';
import Invoicereport from './invoicereport';
import PaymentReport from './paymentreport';
import ProjectReport from './projectreport';
import TaskReport from './taskreport';
import UserReport from './userreport';
import EmployeeReport from './employeereport';
import PayslipReport from './payslipreport';
import AttendanceReport from './attendancereport';
import LeaveReport from './leavereport';
import DailyReport from './dailyreport';

const ReportsRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/expense-reports`} />
      <Route path={`${match.url}/expense-reports`} component={ExpenseReport} />
      <Route path={`${match.url}/invoice-reports`} component={Invoicereport} />
      <Route path={`${match.url}/payments-reports`} component={PaymentReport} />
      <Route path={`${match.url}/project-reports`} component={ProjectReport} />
      <Route path={`${match.url}/task-reports`} component={TaskReport} />
      <Route path={`${match.url}/user-reports`} component={UserReport} />
      <Route path={`${match.url}/employee-reports`} component={EmployeeReport} />
      <Route path={`${match.url}/payslip-reports`} component={PayslipReport} />
      <Route path={`${match.url}/attendance-reports`} component={AttendanceReport} />
      <Route path={`${match.url}/leave-reports`} component={LeaveReport} />
      <Route path={`${match.url}/daily-reports`} component={DailyReport} />
   </Switch>
);

export default ReportsRoute;
