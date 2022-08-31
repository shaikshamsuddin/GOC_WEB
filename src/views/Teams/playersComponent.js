import React, { useState, useRef, useEffect } from "react";
import './teams.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
import Select from 'react-select';

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

const PlayersComponent = ({ teamsDataFiltered,
    teamsData,
    setTeamsData,
    state




}) => {

    const addRowFunc = ((e) => {
        e.preventDefault();
        const playersData = teamsData && teamsData.filter((data) => data._id === state.teamId)
        const playerDataArray = [...playersData]
        const playersArray = playerDataArray.filter((data) => {
            return data.players.push(
                {
                    _id: '',
                    captain: '',
                    viceCaptain: '',
                    status: '',
                    playerName: '',
                    playerRole: '',
                    mobile: ''
                }
            )
        })
        console.log(playersArray, "playersData")
        setTeamsData(playersArray)

    })
    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Body className="table-full-width table-responsive">
                            <Button className="primary float-right" variant="primary" onClick={addRowFunc}>
                                Add New Player
                            </Button>
                            <Table className="table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th className="border-0">Sl.No</th>
                                        <th className="border-0">Player Name</th>
                                        <th className="border-0">Mobile Number</th>
                                        <th className="border-0">Player Role</th>
                                        <th className="border-0">Captain</th>
                                        <th className="border-0">Vice Captain</th>
                                        <th className="border-0">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teamsDataFiltered ? teamsDataFiltered.map((data, i) => {
                                        return (

                                            data.players.map((player, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{player.playerName}</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="MobileInput"
                                                                name="MobileInput"
                                                                aria-describedby="MobileInput"
                                                                placeholder="Enter Mobile Number"
                                                                defaultValue={player.mobile}
                                                                onChange={(event) => setState({ ...state, mobile: event.target.value })}

                                                            /></td>
                                                        <td>
                                                            <select
                                                                className="form-control"

                                                                value={player.playerRole}
                                                                onChange={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    setState({ ...state, roleName: e.target.value }
                                                                    )
                                                                    console.log(state.roleName, "selected game id")

                                                                }}  >
                                                                <option value='' disabled>{state.roleName == '' ? 'Select Game' : player.playerRole}</option>

                                                                <option value='Wicket Keeper/Batsman' > Wicket Keeper/Batsman </option>
                                                                <option value='bowler' > Bowler</option>
                                                                <option value='Batsman' > Batsman </option>
                                                                <option value='All Rounder' > All Rounder </option>






                                                            </select></td>
                                                        <td>
                                                            <input
                                                                type="radio"
                                                                name="Captain"
                                                                value='captain'
                                                                checked={player.captain}
                                                                onChange={(e) => setState({ ...state, captain: e.target.value })
                                                                } />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="radio"
                                                                name="Vice Captain"
                                                                value='viceCaptain'
                                                                checked={player.viceCaptain}
                                                                onChange={(e) => setState({ ...state, viceCaptain: e.target.value })
                                                                } />
                                                        </td>
                                                        <td><div>
                                                            <span style={{ cursor: 'pointer', marginRight: '4px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"
                                                                    onClick={() => {
                                                                        setState({ ...state, "teamName": data.teamName })
                                                                        setEditShow(true)
                                                                    }}>
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        )
                                    })
                                        : <></>}



                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default PlayersComponent;