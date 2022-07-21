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

function RegisterPage() {
    const history = useHistory();
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
    const OnLoginClick = ()=>{
        history.push('/admin')
    }
    const RegisterSubmit =  e => {
        e.preventDefault();
        const token =  {
          username,
          password
        };
        console.log(token,"token")
        history.push('/')

        // setToken(token);
      }
    
    return (
        <Container fluid className="login-container-fluid logo-background">
            <Row> 
                <Col lg= {6}>
                <div className="logo-img-tag">
                <img src={require("assets/img/goc2.png")} alt="..." />
                </div>
                </Col>
                <Col className="ml-auto mr-auto d-flex align-items-center justify-content-center" lg= {6}>
                    <div className="form-block" style={{width : '60%'}}>
                        <h4>
                            Register In Gangs of Cricket
                        </h4>
                     <Card style={{padding : '30px'}}> 
                     <form id="loginform" onSubmit={RegisterSubmit}>
                     <div className="form-group">
                <label>Email Id</label>
                <input
                  type="mail"
                  className="form-control"
                  id="EmailInput"
                  name="NumbaerInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address"
                  onChange={(event) => setUserName(event.target.value)}
                />

              </div>
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
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
             
              </div>
          
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <div style={{display : 'flex', justifyContent:'space-between',marginTop:'30px'}}>
                <span>
                    Already a user!?
                </span>
              <button  className="btn btn-secondary" onClick={()=>{history.push('/')}}>
                Login
              </button>
              </div>
            </form>
                            </Card> 
                     </div>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;