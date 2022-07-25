import React from "react";
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

function LoginPage() {
  const history = useHistory();
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const OnLoginClick = () => {
    history.push('/admin')
  }
  const loginSubmit = e => {
    e.preventDefault();
    const token = {
      username,
      password
    };
    console.log(token, "token")
    history.push('/admin')

    // setToken(token);
  }

  return (
    <div className="container-fluid-block w-100">

      <div>
        <h3 className="text-center text-color">
          Welcome to Gangs of Cricket
        </h3>
        <Container fluid className="login-container-fluid logo-background mt-5">
        <Row className="d-flex"> 
                <Col lg= {6} className="col d-flex justify-content-center align-items-center">
                <div className="logo-img-tag">
                <img src={require("assets/img/goc2.png")} alt="..." />
                </div>
                </Col>
            <Col className="ml-auto mr-auto d-flex align-items-center justify-content-center" lg={6}>
              <div className="form-block" style={{ width: '50%' }}>
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
                        onChange={(event) => setUserName(event.target.value)}
                      />

                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
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