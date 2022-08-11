import React, { useEffect, useState, useRef } from "react";
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
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


  // const RegisterSubmit = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   let firstName = state.firstName;
  //   let lastName = state.lastName;
  //   let PhoneNumber = state.PhoneNumber;
  //   let GameId = state.GameId;
  //   let roleId = state.roleId;
  //   let password = state.password;

  //   // if(
  //   //   state.firstName == "" || state.lastName == "" || state.PhoneNumber == "" || state.GameId == "" || state.roleId == "" || state.password == ""
  //   // ){

  //   //   setState({...state, errors : 'true'
  //   //   })

  //   // }
  //   // else {
  //   //   setState({...state, errors : 'false'
  //   //   })      }


  //   const data = {
  //     firstName, lastName, PhoneNumber, password
  //   };
  //   console.log(data, state.errors, "registered data")
  //   // registerUser(data)
  // } 

  //   useEffect(()=>{
  //     getGames();
  // },[])
  useEffect(() => {
    getRoles()
    console.log(state, "state")
  }, [])
  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    setGamesOptions(games);
    console.log(gamesOptions, "gamesOptions")
  }, [games])

  useEffect(() => {
    setRolesOptions(roles);
    console.log(rolesOptions, "gamesOptions")
  }, [roles])

  const RegisterSubmit = ((e) => {
    registerUser({ "_id": state.id, "firstName": state.firstName, "lastName": state.lastName, "gender": state.gender, "mobile": state.mobile, "gameId": state.gameId, "roleId": state.roleId, "password": state.password })
    e.preventDefault();
    
    history.push('/')

  })
  const selectGame = (event) => {
    setState({ ...state, gameId: event.target.value });
    console.log(state.gameId)
  };


  return (
    <div className="container-fluid-block w-100">

      <div>
        <h3 className="text-center text-color">
          Register In Gangs of Cricket
        </h3>
        <Container fluid className="login-container-fluid logo-background">
          <Row className="d-flex">
            <Col lg={6} className="col" style={{ width: '100%' }}>
              <div className="logo-img-tag image-position">
                <img src={require("assets/img/goc2.png")} alt="..." />
              </div>
            </Col>

            <Col className="ml-auto mr-auto d-flex justify-content-end" lg={6}>
              <div className="form-block" style={{ width: '70%' }}>
                <Card style={{ padding: '30px' }}>
                  <form id="loginform" onSubmit={RegisterSubmit}>
                    <div className="form-groups">
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
                    <div className="form-groups">
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
                    <div className="form-groups">
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
                    <div className="form-groups">
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
                    <div className="form-groups">
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
                            console.log(state.gameId, "selected game id")

                          }}  >
                          <option value=''>{state.gameId == '' ? 'Select Game' : state.gameName}</option>

                          {gamesOptions && gamesOptions.map((data, i) =>
                            <option value={data._id} > {data.gameName} </option>

                          )}


                        </select>
                      </div>
                      {/* <DropdownButton
                        alignRight
                        title={state.gameId ? state.gameName : "Select Game"}
                        id="dropdown-menu-align-right"
                        onSelect={
                          selectGame
                        }
                      >
                        {gamesOptions && gamesOptions.map((value, i) =>
                          <Dropdown.Item
                            eventKey={value._id} > {value.gameName} </Dropdown.Item>

                        )}
                      </DropdownButton> */}

                    </div>
                    <div className="form-groups">
                      <label>Role Id</label>
                      {/* <input
                        type="text"
                        className="form-control"
                        id="roleID"
                        name="roleID"
                        aria-describedby="roleID"
                        placeholder="Enter Role Id"
                        onChange={(event) => setState({ ...state, roleId: event.target.value })}

                      /> */}
                      <div>
                        <select
                          className="form-control"

                          value={state.roleId}
                          onChange={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setState({ ...state, roleId: e.target.value }
                            )
                            console.log(state.roleId, "selected game id")

                          }}  >
                          <option value='' disabled>{state.roleId == '' ? 'Select Game' : state.roleName}</option>

                          {rolesOptions && rolesOptions.map((data, i) =>
                            <option value={data._id} > {data.role} </option>

                          )}


                        </select>
                      </div>
                    </div>

                    <div className="form-groups">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) => setState({ ...state, password: event.target.value })}

                      />

                    </div>

                    <div className=" col text-center mt-3">
                      <button type="submit" className=" btn btn-primary">
                        Register
                      </button>
                    </div>
                    <div style={{ display: 'flex', marginTop: '30px' }}>
                      <span>
                        Already a user!?
                      </span>
                      <a className="condition-styles" onClick={() => { history.push('/') }}>
                        Login
                      </a>
                    </div>
                  </form>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default RegisterPage;