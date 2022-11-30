import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../initialpage/App';
import config from 'config';
import 'bootstrap'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';

import '../assets/css/font-awesome.min.css';
import '../assets/css/line-awesome.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/bootstrap.min.css";

// Custom Style File
import '../assets/js/bootstrap.bundle.js';
import '../assets/css/select2.min.css';

 import '../assets/js/popper.min.js';
import '../assets/js/app.js';
import '../assets/js/select2.min.js';


import "../assets/js/bootstrap-datetimepicker.min.js";

import "../assets/js/multiselect.min.js";
import "../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css";
import "../assets/css/bootstrap-datetimepicker.min.css";
import '../assets/css/style.css';
window.Popper = require("popper.js").default;

const MainApp = () => (
   <Router basename={`${config.publicPath}`}>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
);

export default MainApp;