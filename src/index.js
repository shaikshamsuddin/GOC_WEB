/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Redux/reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Redux/sagas/rootSaga";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import LoginContainer from "components/login/LoginContainer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const sagaMiddleware = createSagaMiddleware();
import RegisterContainer from "components/register/registerContainer";
const middleware = [sagaMiddleware];

const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

sagaMiddleware.run(rootSaga);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path= "/" component={LoginContainer} />
        <Route path = "/register" component = {RegisterContainer} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
      </Switch>
    </BrowserRouter>
  </Provider>
);
