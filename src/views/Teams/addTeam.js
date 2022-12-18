import React, { useEffect, useState, useRef } from "react";
import './teams.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
import Select from 'react-select';
import PlayersComponent from "./playersComponent";
import EditComponent from "./editTeamComponent";
import { useLocation, Route, Switch, useParams, useHistory } from "react-router-dom";
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

const AddTeamComponent = ({
    mergeTeam,
    setShow,
    fetchTeams,
    setAddPlayersPage,
    addPlayersPage,
    usersForTeam



 }) => {

    const [state, setState] = useState({
        gameName: "",
        teamName: '',
        gameId: "",
        status: "",
        setActive: '',
        userId: '',
        userName: '',
        teamLogo: '',
        players: [],
        uploadLogoResponse: '',
        teamId: '',
        captain: false,
        ViceCaptain: '',
        mobile: '',
        roleName: '',

    });
    const params = useParams();
    const saveNewTeam = ((e) => {
        e.preventDefault();
        console.log(createdBy, "state.userId")
        mergeTeam({ "teamName": state.teamName, "teamLogo": state.uploadLogoResponse, "createdBy": state.userId, "players": state.players })
        setShow(false)
    
        // const dataFetched = fetchTeams && fetchTeams.data.map((fetchedData) => {
        //   fetchedData.players.map((player) => {
        //     return (
        //       player._id === state.userId
        //     )
        //   })
        // })
        setAddPlayersPage(true)
      });
  console.log(params,"params")
    const uploadTeamLogoFunc = ((e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file)
        fetch('https://goc-service.herokuapp.com/api/games/uploadImage', {
            method: 'POST',
            body: formData,
        }).then(response => response.json()).then(data => {
            const logosData = data.data.filename
            setState({ ...state, uploadLogoResponse: logosData })
        })
            .catch(error => {
                message.error('There was an error!', error);
            });
    })
    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                            <Card.Title as="h4">Teams</Card.Title>
                            <p className="card-category">
                                Add New Team
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
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setState({ ...state, teamName: e.target.value })
                                        }}
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>
                                        Select User
                                    </Form.Label>
                                    <Select
                                        isSearchable
                                        options={usersForTeam}
                                        getOptionLabel={(option) => option.userName}
                                        getOptionValue={(option) => option.userName}
                                        className="diMultiSelect"
                                        classNamePrefix="diSelect"
                                        value={usersForTeam && usersForTeam.userName}
                                        label="Select User"
                                        maxMenuHeight={140}
                                        onChange={(option) => setState({ ...state, userId: option.userId, userName: option.userName })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Upload Team Logo
                                    </Form.Label>
                                    <div className="upload-block">
                                        <input type="file" accept="image/*" onChange={uploadTeamLogoFunc} />
                                    </div>
                                </Form.Group>
                            </Form>
                            <Button variant="secondary" >
                                Close
                            </Button>
                            <Button variant="primary" onClick={saveNewTeam}>
                                Save Changes
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default AddTeamComponent;