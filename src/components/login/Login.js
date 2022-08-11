import React, { useEffect, useRef, useState } from "react";
import './login.css';
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
  Spinner
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation, Route, Switch } from "react-router-dom";
import Form from 'react-bootstrap/Form';

// const myStyle={
//     background-image: 
// "url(../assets/img/goc2.png)",
//     height:'100vh',
//     marginTop:'0px',
//     fontSize:'50px',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };

const LoginPage = ({
  loginUser,
  getGames,
  loginResponse
})=> {
  const history = useHistory();
  // const [username, setUserName] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const [state,setState]= useState({
    loading:false
  })
  const OnLoginClick = () => {
    history.push('/admin')
  }
  const mobileNumber = useRef();
  const password = useRef();
  const loginSubmit = e => {
    e.preventDefault();
    setState({...state,loading:true})
    loginUser({
      "mobile":mobileNumber.current.value,
      "password":password.current.value,
      "platform":"w"
  
  })
    }

  useEffect(()=>{
    if(loginResponse && loginResponse === 1) {
      history.push('/admin')
  
    }
  },[loginResponse])
  useEffect(()=>{
    getGames()
  },[])
  return (
    <div className="container-fluid-block w-100">

      <div>
        <h3 className="text-center text-color">
          Welcome to Gangs of Cricket
        </h3>
        {state.loading &&
        <Spinner animation="border" />
        }
        <Container fluid className="login-container-fluid logo-background mt-5">
        <Row className="d-flex"> 
                <Col lg= {6} className="col" style={{width:'100%'}}>
                <div className="logo-img-tag image-position">
                <img src={require("assets/img/goc2.png")} alt="..." />
                </div>
                </Col>
            <Col className="ml-auto mr-auto d-flex justify-content-end" lg={6}>
              <div className="form-block" style={{width:'70%'}}>
              <Card style={{padding : '30px'}}> 
                  <form id="loginform" onSubmit={loginSubmit}>
                    <div className="form-group">
                      <label>UserName</label>
                      <input
                        type="number"
                        className="form-control"
                        id="EmailInput"
                        name="NumbaerInput"
                        aria-describedby="emailHelp"
                        placeholder="Enter Number"
                        // onChange={(event) => setUserName(event.target.value)}
                        ref={mobileNumber}
                      />

                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        // onChange={(event) => setPassword(event.target.value)}
                        ref={password}
                      />

                    </div>

                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>

                  </form>
                  <div style={{ marginTop: '30px' }}>
                    <span>
                      Not a User!?
                    </span>
                    <a className="condition-styles" onClick={() => {
                      history.push('/register')
                    }}>
                      Register
                    </a>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LoginPage;