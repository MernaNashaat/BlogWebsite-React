import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import { BrowserRouter ,Route} from 'react-router-dom';

import axios from 'axios'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import "../node_modules/@fortawesome/react-fontawesome";
import NavBar from './Components/Shared/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Shared/Header';
import ErrorPage from './Components/ErrorPage';


window.$name = 'Not Authenticated'
window.$login=false;
window.$signup=true;

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
    <NavBar/>
    <App />
    </BrowserRouter>
    {/* {
      window.$name==='Not Authenticated'?
      <BrowserRouter >
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     {window.$signup? <Signup/>:null } 
    </BrowserRouter> : <BrowserRouter><NavBar /><App/></BrowserRouter>
    }
   
     */}


  </React.Fragment> 
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
