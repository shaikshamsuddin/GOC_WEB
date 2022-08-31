import React, { useState, useRef, useEffect } from "react";
import './teams.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
import Select from 'react-select';
import Form from 'react-bootstrap/Form';

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

const EditComponent = ({ state,
    setAddPlayersPage,
    setEditShow,
    editShow,
    mergeTeam,




}) => {

    const saveEditTeam = (() => {
        mergeTeam({})
        setEditShow(false)
    })
    const handleClose = (() => {
        setEditShow(false)

    })
    const handleStatusChange = ((e) => {
        console.log(e.target.checked, "statusChange")
        setState({ ...state, status: e.target.checked })
        //  e.preventDefault();

    })
    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                            <Card.Title as="h4">Players</Card.Title>
                            <p className="card-category">
                                Players list
                            </p>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Team Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Team Name"
                                        autoFocus
                                        defaultValue={state.teamName}
                                        onChange={(e) => {
                                            e.preventDefault()
                                            setState({ ...state, teamName: e.target.value })
                                        }
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Team Id</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Team Id"
                                        autoFocus
                                        defaultValue={state.teamId}
                                        onChange={(e) => {
                                            e.preventDefault()
                                            setState({ ...state, teamId: e.target.value })
                                        }
                                        }
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="status.ControlInput2">
                                    <Form.Label>Status</Form.Label>
                                    <input
                                        type="checkbox"
                                        autoFocus
                                        defaultChecked={state.status}
                                        // ref={statusChange}
                                        onChange={handleStatusChange}
                                    />
                                </Form.Group>
                                <Button variant="secondary" onClick={handleClose} >
                                    Close
                                </Button>
                                <Button variant="primary" onClick={saveEditTeam}>
                                    Save Changes
                                </Button>
                                <div>
                                    <Button variant="primary" onClick={() => {
                                        setAddPlayersPage(true);
                                        setEditShow(!editShow)
                                    }}>
                                        Next
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default EditComponent;