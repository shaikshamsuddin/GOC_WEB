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
  const [state,setState] = React.useState({
    firstName: '',
    lastName : '',
    PhoneNumber : '',
    GameId : '',
    roleId : '',
    password : '',
    errors : ''
  }) ;


     const RegisterSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        let firstName = state.firstName;
        let lastName = state.lastName;
        let PhoneNumber = state.PhoneNumber;
        let GameId = state.GameId;
        let roleId = state.roleId;
        let password = state.password;

      if(
        state.firstName == "" || state.lastName == "" || state.PhoneNumber == "" || state.GameId == "" || state.roleId == "" || state.password == ""
      ){

        setState({...state, errors : 'true'
        })

      }
      else {
        setState({...state, errors : 'false'
        })      }
      
        const data = {
          firstName, lastName, PhoneNumber,GameId,roleId,password
        };
    console.log(data,state.errors,"registered data")
        //dispatch(registerUserAction(data));
      }
    
    return (
      <div className="container-fluid-block w-100">
        
        <div>
      <h3 className="text-center text-color">
                            Register In Gangs of Cricket
                        </h3>
        <Container fluid className="login-container-fluid logo-background">
            <Row className="d-flex"> 
            <Col lg={6} className="col" style={{width:'100%'}}>
                <div className="logo-img-tag image-position">
                <img src={require("assets/img/goc2.png")} alt="..." />
                </div>
                </Col>
                
                <Col className="ml-auto mr-auto d-flex justify-content-end" lg= {6}>
                <div className="form-block" style={{width:'70%'}}>
                     <Card style={{padding : '30px'}}> 
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
                  onChange={(event) => setState({...state, firstName: event.target.value})}
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
                  onChange={(event) => setState({...state, lastName: event.target.value})}

                />
           
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
                  onChange={(event) => setState({...state, PhoneNumber: event.target.value})}

                />
           
              </div><div className="form-groups">
                <label>Game Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="gameID"
                  name="gameID"
                  aria-describedby="gameID"
                  placeholder="Enter Game Id"
                  onChange={(event) => setState({...state, GameId: event.target.value})}

                />
           
              </div>
              <div className="form-groups">
                <label>Role Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="roleID"
                  name="roleID"
                  aria-describedby="roleID"
                  placeholder="Enter Role Id"
                  onChange={(event) => setState({...state, roleId: event.target.value})}

                />
           
              </div>
              
              <div className="form-groups">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setState({...state, password: event.target.value})}

                />
             
              </div>
          
             <div className=" col text-center mt-3">
              <button type="submit" className=" btn btn-primary">
                Register
              </button>
              </div>
              <div style={{display : 'flex',marginTop:'30px'}}>
                <span>
                    Already a user!?
                </span>
              <a  className="condition-styles" onClick={()=>{history.push('/')}}>
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