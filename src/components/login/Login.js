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
}) => {
  const history = useHistory();
  // const [username, setUserName] = React.useState('');
  const [incorrectPassword, setIncorrectPassword] = React.useState(false);
  const [state, setState] = useState({
    loading: false,
    loginClick: false
  })
  const OnLoginClick = () => {
    history.push('/admin')
  }
  const mobileNumber = useRef();
  const password = useRef();
  const loginSubmit = e => {
    e.preventDefault();
    setState({ ...state, loading: true, loginClick: true })
    loginUser({
      "mobile": mobileNumber.current.value,
      "password": password.current.value,
      "platform": "w"

    })
  }

  useEffect(() => {
    if (loginResponse && loginResponse === 1) {
      history.push('/admin')
      setIncorrectPassword(false)

    }
    else {
      setIncorrectPassword(true)
    }
  }, [loginResponse, state.loginClick])

  useEffect(() => {
    getGames()
  }, [])
  return (
    <div className="container-fluid-block w-100">

      <div>
        <div>
          <h3 className="text-center text-color">
            Welcome to Gangs of Cricket
          </h3>
        </div>

        {/* {state.loading &&
          <Spinner animation="border" />
        } */}
        <Container fluid className="login-container-fluid logo-background">
          <Row>
            <Col className="col-lg-6 col-sm-12 col-m-12" style={{ width: '100%' }}>
              <div className="logo-img-tag image-position">
                <img src={require("assets/img/goc2.png")} alt="..." />
              </div>
            </Col>
            <Col className="d-flex justify-content-end col-lg-6 col-sm-12 col-m-12 " >
              <div className="form-block container-card">
                <Card style={{ padding: '50px' }}>
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
                    <div>
                      {
                        !state.loginClick && incorrectPassword ?
                          <span></span>
                          :
                          <span className="incorrectStyles">
                            please enter correct credentials
                          </span>}
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>

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

export default LoginPage;