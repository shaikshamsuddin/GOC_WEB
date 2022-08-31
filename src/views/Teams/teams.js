import React, { useEffect, useState, useRef } from "react";
import './teams.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
import Select from 'react-select';
import PlayersComponent from "./playersComponent";
import EditComponent from "./editTeamComponent";
import AddTeamComponent from "./addTeam";
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

const Teams = ({
  fetchTeams,
  games,
  getTeams,
  getRoles,
  getGames,
  mergeTeam,
  Users,
  getUsers,
  mergeTeamResponse,
  uploadTeamLogo,
  getUsersForCreateTeam,
  UsersForCreateTeamResponse,
  uploadTeamLogoResponse

}) => {

  const [teamsData, setTeamsData] = useState([]);
  const newTeam = useRef();
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false)
  const [addPlayersPage, setAddPlayersPage] = useState(false)
  const [addRow, setAddRow] = useState(0);
  const [showTeams, setShowTeams] = useState(true);
  const [logoResponse, setLogoResponse] = useState('');
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


  useEffect(() => {
    getTeams(),
      getGames(),
      getUsers(),
      getUsersForCreateTeam()
  }, []);

  useEffect(() => {
    console.log(uploadTeamLogoResponse, "uploadTeamLogoResponse")
  }, [])

  useEffect(() => {
    setTeamsData(fetchTeams)
  }, [fetchTeams])

  const handleClose = (() => {
    setShow(false)

  })
  const addPlayersThroughTeam = ((data) => {
    setState({ ...state, teamId: data._id })
    console.log(state.teamId, "selected team")
  })
  const handleShow = () => setShow(true);
  const saveEditTeam = (() => {
    mergeTeam({})
    setEditShow(false)
  })

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
      console.log(logosData, "uploadLogoResponse")
    })
      .catch(error => {
        message.error('There was an error!', error);
      });
  })
  const usersForTeam =
    UsersForCreateTeamResponse && UsersForCreateTeamResponse.map((data) => {
      return (
        {
          userId: data._id, userName: data.lastName + data.firstName
        }
      )
    }
    )

  const selectedUser = ((value) => {
    setState({ ...state, userId: value.userId, userName: value.userName })
    console.log(state.userId, "userId selected")
  })
  

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

  useEffect(() => {
    if (mergeTeamResponse) {

    }
  }, [mergeTeamResponse])

  const teamsDataFiltered = teamsData && teamsData.filter((data) => data._id === state.teamId)
  return (
    <>
      {
        showTeams ?
          <Container fluid>
            <Row>
              <Col md="12">
                <Card className="strpied-tabled-with-hover">
                  <Card.Header>
                    <Card.Title as="h4">Teams</Card.Title>
                    <p className="card-category">
                      Teams list
                    </p>
                  </Card.Header>
                  <Card.Body className="table-full-width table-responsive">
                    <Button className="primary float-right" variant="primary" onClick={handleShow}>
                      Add New Team
                    </Button>
                    

                    <Table className="table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="border-0">Sl.No</th>
                          <th className="border-0">Team Name</th>
                          <th className="border-0">Team Logo</th>
                          <th className="border-0">Captain</th>
                          <th className="border-0">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamsData && teamsData.map((data, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td><span style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  setState({ ...state, "teamName": data.teamName })
                                  console.log(state.id, "ïd")
                                  setEditShow(!editShow);

                                  addPlayersThroughTeam(data);
                                }}>
                                {data.teamName}
                              </span></td>
                              <td><img src={`https://goc-service.herokuapp.com/images/userUploads/${data.teamLogo}`} className="teamLogoName" /></td>
                              <td>
                                {/* {data && data.players.filter((player) =>
                                  player.captain && player.captain === true
                                ).map(players =>
                                  <span>
                                    {players.playerName}
                                  </span>
                                )} */}
                              </td>
                              <td><div>
                                <span style={{ cursor: 'pointer', marginRight: '4px' }}>
                                  <i className="nc-icon nc-simple-delete"></i>

                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                                    onClick={() => {
                                      setState({ ...state, "teamName": data.teamName })
                                      console.log(state.id, "ïd")
                                      setEditShow(!editShow)
                                    }}>
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                  </svg>
                                </span>
                              </div>
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

            ?


            editShow ?
<EditComponent 
state={state}
setAddPlayersPage={setAddPlayersPage}
setEditShow={setEditShow}
editShow={editShow}
mergeTeam={mergeTeam}
/>
              :
              addPlayersPage ?
                <PlayersComponent
                  teamsDataFiltered={teamsDataFiltered}
                  teamsData={teamsData}
                  setTeamsData={setTeamsData}
                  state={state} />
                :
                show ?
                <AddTeamComponent 
                state={state}
                mergeTeam={mergeTeam}
                setShow={setShow}
                fetchTeams={fetchTeams}
                setAddPlayersPage={setAddPlayersPage}
                addPlayersPage={addPlayersPage}




                /> :
                <Container fluid>
                  <Row>
                    <Col md="12">
                      <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                          <Card.Title as="h4">Teams</Card.Title>
                          <p className="card-category">
                            Teams list
                          </p>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive">
                          {/* <Button className="primary float-right">Add new game</Button> */}
                          <Button className="primary float-right" variant="primary" onClick={handleShow}>
                            Add New Team
                          </Button>
                          

                          <Table className="table-hover table-striped">
                            <thead>
                              <tr>
                                <th className="border-0">Sl.No</th>
                                <th className="border-0">Team Name</th>
                                <th className="border-0">Team Logo</th>
                                <th className="border-0">Captain</th>
                                <th className="border-0">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {teamsData && teamsData.map((data, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><span style={{ cursor: 'pointer' }} onClick={((e) => {
                                      e.preventDefault();
                                      setState({ ...state, "teamName": data.teamName, "teamId": data._id })
                                      setEditShow(!editShow);
                                      console.log(state, "selected team")
                                    })}>
                                      {data.teamName}
                                    </span></td>
                                    <td><img src={`https://goc-service.herokuapp.com/images/userUploads/${data.teamLogo}`} className="teamLogoName" /></td>
                                    <td>
                                      {data.players.filter((player) =>
                                        player.captain === true
                                      ).map(players =>
                                        <span>
                                          {players.playerName}
                                        </span>
                                      )}
                                    </td>
                                    <td><div>
                                      <span style={{ cursor: 'pointer', marginRight: '4px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                                          onClick={() => {
                                            setState({ ...state, "teamName": data.teamName })
                                            console.log(state.id, "ïd")
                                            setEditShow(!editShow)
                                          }}
                                        >
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                      </span>
                                    </div>
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

                </Container> : '' : '' 
      }





    </>
  );
}

export default Teams;
