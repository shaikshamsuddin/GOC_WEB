import React, { useEffect, useState, useRef } from "react";
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown } from "react-bootstrap";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation, Route, Switch } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { data } from "jquery";


const RegisterPage = ({
  getRoles,
  registerUser,
  getGames,
  games,
  roles

}) => {

  const history = useHistory();
  const [gamesOptions, setGamesOptions] = useState([])
  const [rolesOptions, setRolesOptions] = useState([])

  const [state, setState] = useState({
    role: "",
    id: "",
    status: 1,
    setActive: '',
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    password: "",
    gameId: "",
    roleId: "",
    errors: ''
  });

  useEffect(() => {
    getRoles()
  }, [])
  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    setGamesOptions(games);
  }, [games])

  useEffect(() => {
    setRolesOptions(roles);
  }, [roles])

  const RegisterSubmit = ((e) => {
    registerUser({ "_id": state.id, "firstName": state.firstName, "lastName": state.lastName, "gender": state.gender, "mobile": state.mobile, "gameId": state.gameId, "roleId": state.roleId, "password": state.password })
    e.preventDefault();
    
    history.push('/admin')

  })
  const selectGame = (event) => {
    setState({ ...state, gameId: event.target.value });
  };

  return (
    <div className="container-register">
      <div style={{width: '100%' }}> 
        <Container fluid style={{ width: '100%' }}> 
              <div className="form-block" >
                <Card style={{ padding: '30px',width: '100%' }}>
                  <form id="loginform" onSubmit={RegisterSubmit}>
                    <div className="register-rows">
                    <div className="form-groups width-input mr-3">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        name="firstNameInput"
                        aria-describedby="firstName"
                        placeholder="Enter First Name"
                        onChange={(event) => setState({ ...state, firstName: event.target.value })}
                      />

                    </div>
                    <div className="form-groups width-input">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameInput"
                        name="LastNameInput"
                        aria-describedby="LastName"
                        placeholder="Enter Last Name"
                        onChange={(event) => setState({ ...state, lastName: event.target.value })}

                      />

                    </div>
                    </div>
                    <div className="register-rows">

                    <div className="form-groups width-input mr-3">
                      <label>Gender</label>
                      <div>
                        <select
                          className="form-control"
                          onChange={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setState({ ...state, gender: e.target.value }
                            )

                          }}
                          value={state.gender}
                        >
                          <option value=''> {state.gender == '' ? 'Select gender' : state.gender}</option>
                          <option value='Male' > Male </option>

                          <option value='Female' > Female </option>



                        </select>
                      </div>

                    </div>
                    <div className="form-groups width-input">
                      <label>Game Id</label>
                      <div>
                        <select
                          className="form-control"

                          value={state.gameId}
                          onChange={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setState({ ...state, gameId: e.target.value }
                            )

                          }}  >
                          <option value=''>{state.gameId == '' ? 'Select Game' : state.gameName}</option>

                          {gamesOptions && gamesOptions.map((data, i) =>
                            <option value={data._id} > {data.gameName} </option>

                          )}


                        </select>
                      </div>

                    </div>
                    </div>

                    <div className="register-rows">

                    <div className="form-groups width-input mr-3">
                      <label>Mobile Number</label>
                      <input
                        type="number"
                        className="form-control"
                        id="MobileInput"
                        name="MobileInput"
                        aria-describedby="MobileInput"
                        placeholder="Enter Mobile Number"
                        onChange={(event) => setState({ ...state, mobile: event.target.value })}

                      />

                    </div>
                    
                    
                   

                    <div className="form-groups width-input ">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) => setState({ ...state, password: event.target.value })}

                      />

                    </div>
                    </div>
                    <div className="register-rows">

                    <div className="form-groups width-input mr-3">
                      <label>Role Id</label>
                   
                      <div>
                        <select
                          className="form-control"

                          value={state.roleId}
                          onChange={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setState({ ...state, roleId: e.target.value }
                            )

                          }}  >
                          <option value='' disabled>{state.roleId == '' ? 'Select Game' : data.role}</option>

                          {rolesOptions && rolesOptions.map((data, i) =>
                            <option value={data._id} > {data.role} </option>

                          )}


                        </select>
                      </div>
                    </div>
                    <div className="form-groups width-input"></div>
                    </div>
                    <div className=" col text-center mt-3">
                      <button type="submit" className=" btn btn-primary">
                        Register
                      </button>
                    </div>
                    {/* <div style={{ display: 'flex', marginTop: '30px' }}>
                      <span>
                        Already a user!?
                      </span>
                      <a className="condition-styles" onClick={() => { history.push('/') }}>
                        Login
                      </a>
                    </div> */}
                  </form>
                </Card>
              </div>    
        </Container>
      </div>
    </div>
  );
}

export default RegisterPage;