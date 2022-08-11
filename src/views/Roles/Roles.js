import React, { useEffect, useRef, useState } from "react";
// import './games.css';
import moment from "moment";
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
import './role.css';

const Roles = ({
  getRoles,
  roles,
  mergeRoles,
  mergeRoleResponse
}) => {
  useEffect(() => {
    getRoles();
  }, [])
  useEffect(() => {
    console.log(roles, "roles")

  }, [roles]);
  // const mergeResponseStatus = mergeRoleResponse == 1 ? true : false;

  const newRole = useRef();
  const [show, setShow] = useState(false);
  const [state, setState] = React.useState({
    role: "",
    id: "",
    status: 1,
    setActive: ''
  });
  const [editShow, setEditShow] = useState(false)

  const handleClose = ((e) => {
    setShow(false)
    setEditShow(false)
  }
  )

  const saveEditRole = ((e) => {
    e.preventDefault();
    mergeRoles({ "_id": state.id, "role": state.role })
    setEditShow(false)
  })
  const handleSave = ((e) => {
    e.preventDefault();
    mergeRoles({
      "role": newRole.current.value
    });
    setShow(false)
  });
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (mergeRoleResponse) {
      getRoles();

    }

  }, [mergeRoleResponse])
  useEffect(() => {
    if (mergeRoleResponse && mergeRoleResponse.data.status == true) {
      getRoles();
      // console.log(mergeRoleResponse.data.status , "mergeRoleResponse")

    }

  }, [mergeRoleResponse])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Roles</Card.Title>
                <p className="card-category">
                  Roles list
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive">
                {/* <Button className="primary float-right">Add new game</Button> */}
                <Button className="primary float-right" variant="primary" onClick={handleShow}>
                  Add New Role
                </Button>
                <Modal show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                          type="test"
                          placeholder="Add Role"
                          autoFocus
                          ref={newRole}
                        />
                      </Form.Group>
                  
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={editShow} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Roles</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Game"
                          autoFocus
                          defaultValue={state.role}
                          onChange={(e) => {
                            e.preventDefault()
                            setState({ ...state, role: e.target.value })
                          }
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={saveEditRole}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Serial</th>
                      <th className="border-0">Role</th>
                      <th className="border-0">Action</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Created On</th>


                    </tr>
                  </thead>
                  <tbody>
                    {roles && roles.map((data, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{data.role}</td>
                          <td><div>
                            <span style={{ cursor: 'pointer', marginRight: '4px' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"
                                onClick={() => {
                                  setState({ ...state, "id": data._id, "role": data.role })
                                  console.log(state.id, "ïd")
                                  setEditShow(true)

                                }}>
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                              </svg>
                            </span>

                            <span className="switch-button">
                            <BootstrapSwitchButton
                              checked={data.status}
                              onlabel='In'
                              offlabel='A'
                              size="xs"
                              height={15} width={15}
                              onstyle="outline-secondary" offstyle="outline-success"
                            onChange={(checked) => {

                                checked ?
                                  mergeRoles({ "_id": data._id, "role": data.role, "status": true })
                                  :
                                  mergeRoles({ "_id": data._id, "role": data.role, "status": false })
                                checked.preventDefault();

                              }
                              }
                            />
                            </span>
                          </div>
                          </td>
                          <td>
                            {data.status ? "Active" : "In Active"}
                          </td>
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

export default Roles;
