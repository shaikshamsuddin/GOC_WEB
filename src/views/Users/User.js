import React, { useEffect, useState, useRef } from "react";
import './User.css';
// react-bootstrap components
import {
    Badge,
    Modal,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { data } from "jquery";

import moment from "moment";
const Users = ({
    getUsers,
    UsersResponse,
    setRegisterResponse,
    registerEditResponse,
    getRoles,
    registerUser,
    getGames,
    games,
    roles
}) => {

    const [state, setState] = React.useState({
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
        gameName: '',
        roleName: ''
    });
    const [editShow, setEditShow] = useState(false)
    const [UsersData, setUsersData] = useState([]);

    const [gamesOptions, setGamesOptions] = useState([])
    const [rolesOptions, setRolesOptions] = useState([])
    useEffect(() => {
        setUsersData(UsersResponse)
        console.log(UsersResponse, "Users")
    }, [UsersResponse]);


    // const [show, setShow] = useState(false);

    // const handleSave = ((e) => {
    //   e.preventDefault();

    //   mergeUsers({"gameName" : newGame.current.value})
    //   setShow(false)}
    // )
    const handleClose = (() => {
        setEditShow(false)

        setShow(false)

    }
    )
    useEffect(() => {
        getUsers()
    }, [])

  
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

    const saveRegisterUser = ((e) => {
        registerUser({ "_id": state.id, "firstName": state.firstName, "lastName": state.lastName, "gender": state.gender, "mobile": state.mobile, "gameId": state.gameId, "roleId": state.roleId, "password": state.password })
        setEditShow(false)
        console.log(registerEditResponse, "registerEditResponse")

        e.preventDefault();

    })
    useEffect(() => {
        if (registerEditResponse === 1) {
            getUsers();

        }
    }, [registerEditResponse])
    // const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Users</Card.Title>
                                <p className="card-category">
                                    Users list
                                </p>
                            </Card.Header>
                            <Card.Body >
                                {/* <Button className="primary float-right">Add new game</Button> */}
                                <Modal show={editShow} onHide={handleClose} className='modal-styles-goc'>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit User</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="userForm.ControlInput1">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Game"
                                                    autoFocus
                                                    defaultValue={state.firstName}
                                                    onChange={(e) => {
                                                        e.preventDefault()
                                                        setState({ ...state, firstName: e.target.value })
                                                    }
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="userForm.ControlInput2">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter last Name"
                                                    autoFocus
                                                    defaultValue={state.lastName}
                                                    onChange={(e) => {
                                                        e.preventDefault()
                                                        setState({ ...state, lastName: e.target.value })
                                                    }
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="userForm.ControlInput3">
                                                <Form.Label>Gender</Form.Label>
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

                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="userForm.ControlInput4">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter mobile"
                                                    autoFocus
                                                    defaultValue={state.mobile}
                                                    onChange={(e) => {
                                                        e.preventDefault()
                                                        setState({ ...state, mobile: e.target.value })
                                                    }
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="userForm.ControlInput4">
                                                <Form.Label>Game Name</Form.Label>
                                                <div>
                                                    <select
                                                        className="form-control"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            setState({ ...state, gameId: e.target.value }
                                                            )
                                                            console.log(state.gameId, "selected game id")

                                                        }}
                                                        value={state.gameId}
                                                    >
                                                        <option value=''>{state.gameId == '' ? 'Select Game' : state.gameName}</option>
                                                        {gamesOptions && gamesOptions.map((data, i) =>
                                                            <option value={data._id} > {data.gameName} </option>

                                                        )}


                                                    </select>
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="userForm.ControlInput4">
                                                <Form.Label>Role Name</Form.Label>
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
                                            </Form.Group>


                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={saveRegisterUser}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Sl.No</th>
                                            <th className="border-0">First Name</th>
                                            <th className="border-0">Last Name</th>
                                            <th className="border-0">Gender</th>
                                            <th className="border-0">Mobile Nmmber</th>
                                            <th className="border-0">Action</th>
                                            <th className="border-0">Status</th>


                                            <th className="border-0">Created On</th>




                                        </tr>
                                    </thead>
                                    <tbody>
                                        {UsersData && UsersData.map((data, i) => {
                                            return (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{data.firstName}</td>
                                                    <td>{data.lastName}</td>

                                                    <td>{data.gender}</td>

                                                    <td>{data.mobile}</td>

                                                    <td>
                                                        <span style={{ cursor: 'pointer', marginRight: '4px' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"
                                                                onClick={() => {
                                                                    setState({ ...state, "id": data._id, "firstName": data.firstName, "lastName": data.lastName, "gender": data.gender, "mobile": data.mobile, "gameId": data.gameId, "roleId": data.roleId, "password": data.password, })
                                                                    console.log(state.id, "ïd")
                                                                    setEditShow(true)

                                                                }}>
                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                            </svg>
                                                        </span>

                                                    </td>

                                                    <td>{data.status ? 'Active' : 'Inactive'}</td>
                                                    <td>
                                                        {moment(data.createdAt).format("YYYY MMM DD")}
                                                        {/* {data.createdAt} */}
                                                    </td>
                                                </tr>
                                            )
                                        })}


                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </>
    );
}

export default Users;
