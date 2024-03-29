import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import AdminPage from './AdminPage';
import Login from './Login';


const routing = ( 
    <BrowserRouter>
        <div>
        <Route exact path="/" component={App} />
        <Route path="/Signup" component={Signup} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/AdminPage" component={AdminPage} />
        <Route path="/Login" component={Login} />
        </div>
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
