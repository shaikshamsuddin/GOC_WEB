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
import TeamsComponent from "./teamsComponent";
import { useLocation, Route, Switch, useParams, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Autocomplete from 'react-autocomplete';

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
const Imgurl = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL : ""

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
  uploadTeamLogoResponse,
  deleteTeam,
  deletePlayer,
  deleteTeamResponse,
  deletePlayerResponse,
  wildSearchPlayersResponse,
  wildSearchPlayers,


}) => {

  const [teamsData, setTeamsData] = useState([]);
  const newTeam = useRef();
  const [addnewTeam, setAddnewTeam] = useState(false);
  const [editShow, setEditShow] = useState(false)
  const [addPlayersPage, setAddPlayersPage] = useState(false)
  const [addRow, setAddRow] = useState(0);
  const [showTeams, setShowTeams] = useState(true);
  const [logoResponse, setLogoResponse] = useState('');
  const [teamPlayers, setTeamPlayers] = useState([])

  const [inputValue, setInputValue] = useState('');


  const [teamPlayerFiltered, setTeamPlayerFiltered] = useState([]);
  const [playersArray, setPlayersArray] = useState([])
  const [value, setValue] = React.useState('');
  const [indexValue, setIndexValue] = React.useState('');
  const [deleteStatus, setDeleteStatus] = useState()
  const [ifPlayersSaved, setIfPlayersSaved] = useState(false);


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
    index: '',
    captainIndex: '',
    focus: false,
    teamSlogan: ''
  });

  const history = useHistory();
  const parms = useParams();
  const location = useLocation();

  useEffect(() => {
    getTeams(),
      getGames(),
      getUsers(),
      getUsersForCreateTeam()
  }, []);

  useEffect(() => {
    setTeamsData(fetchTeams)
  }, [fetchTeams])


  const handleClose = (() => {
    getTeams();
    setAddnewTeam(false)
    setEditShow(false)
    setState({ ...state, "teamId": '' })

    setShowTeams(true)

  })


  const addPlayersThroughTeam = ((data) => {
    setState({ ...state, "teamId": teamIdReq })
  })
  const saveEditTeam = ((e) => {
    e.preventDefault();
    e.stopPropagation();
    mergeTeam({ "teamName": state.teamName, "teamLogo": state.uploadLogoResponse, "teamSlogan": state.teamSlogan, "createdBy": state.userId, "players": state.players, "_id": state.teamId })
    // console.log()
    // setState({ ...state, "teamId": '' })
    // setEditShow(false)
  })
  // to get particular team Details


  useEffect(() => {
    setTeamPlayers(fetchTeams)
  }, [fetchTeams]);

  useEffect(() => {
    getTeams()
  }, [deleteTeamResponse, deleteStatus, mergeTeamResponse])

  const handleShow = () => setAddnewTeam(true);
  // const teamIdReq = new URLSearchParams(document.location.search).get('teamId') ? new URLSearchParams(document.location.search).get('teamId') : '';
  const teamIdReq = new URLSearchParams(document.location.search).get('teamId');
  console.log(teamIdReq, "teamIdReq")


  const usersForTeam =
    UsersForCreateTeamResponse && UsersForCreateTeamResponse.map((data) => {
      return (
        {
          userId: data._id, userName: data.firstName + " " + data.lastName
        }
      )
    }
    )

  const selectedUser = ((value) => {
    setState({ ...state, userId: value.userId, userName: value.userName })
  })

  useEffect(() => {
    if (mergeTeamResponse) {

    }
  }, [mergeTeamResponse])

  useEffect(() => {
    // if(editShow && state.teamId!==''){
    getTeams({
      "_id": state.teamId
    })
    // }

  }, [state.teamId, editShow])
  const handleStatusChange = ((e) => {
    setState({ ...state, status: e.target.checked })
  })
  useEffect(() => {
    // console.log(deletePlayerResponse, "deletePlayerResponse")
    getTeams({ "_id": state.teamId });
  }, [deletePlayerResponse])

  const closeAddTeam = (() => {
    setAddnewTeam(false)

  })
  const saveNewTeam = ((e) => {
    e.preventDefault();
    console.log("createdBy", state.userId)
    mergeTeam({ "teamName": state.teamName, "teamLogo": state.uploadLogoResponse, "createdBy": state.userId, "players": state.players, "teamSlogan": state.teamSlogan })
    setAddnewTeam(false)
    // setAddPlayersPage(true)
  });
  const uploadTeamLogoFunc = ((e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file)
    fetch(`${Imgurl}/api/games/uploadImage`, {
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







  // console.log(valuesSearched, "valuesSearched")

  useEffect(() => {
    if (value) {
      wildSearchPlayers({ "searchText": value })
    }

  }, [value])

  // useEffect(() => {
  //   if (inputValue) {
  //     wildSearchPlayers({ "searchText": inputValue })
  //   }

  // }, [inputValue])
  const wildsearchCopy = wildSearchPlayersResponse && [...wildSearchPlayersResponse]

  const valuesSearched = wildsearchCopy && wildsearchCopy.map((data) => {
    return data.firstName
  })
  console.log(playersArray, "Players Array");

  useEffect(() => {
    setTeamPlayerFiltered(teamPlayers)
  }, [teamPlayers])

  const addRowFunc = ((e) => {
    e.preventDefault();
    // const playersData = teamsData && teamsData.filter((data) => data._id === state.teamId)
    const playerDataArray = [...teamPlayerFiltered]
    const playerArray = playerDataArray && playerDataArray.filter((data) => {
      return data.players.push(
        {
          // _id: '',
          captain: '',
          viceCaptain: '',
          status: '',
          playerName: '',
          playerRole: '',
          mobile: ''
        }
      )
    })
    setTeamPlayerFiltered(playerArray)

  })

  useEffect(() => {
    teamPlayerFiltered ? teamPlayerFiltered.map((data, i) => {
      setPlayersArray(data.players)
    })
      : ''
  }, [teamPlayerFiltered])

  const saveEditPlayer = (e) => {
    e.preventDefault();
    const teamCopy = [...teamPlayerFiltered]
    mergeTeam({ "_id": teamCopy[0]._id, "teamName": teamCopy[0].teamName, "teamLogo": teamCopy[0].teamLogo, "createdBy": teamCopy[0].createdBy, "teamSlogan": teamCopy[0].teamSlogan, "players": playersArray })
    setIfPlayersSaved(mergeTeamResponse)

  }
  const closeEditPlayers = () => {
    setAddPlayersPage(false)
    getTeams();
    setAddnewTeam(false)
    setEditShow(false)

    setShowTeams(true)
  }
  useEffect(() => {
    if (wildSearchPlayersResponse && indexValue && value) {
      const playersAddedCopy = playersArray && [...playersArray]
      const wildSearchPlayersResponseCopy = [...wildSearchPlayersResponse]
      console.log(wildSearchPlayersResponse, "wildSearchPlayersResponseCopy")
      playersAddedCopy[indexValue].playerName = wildSearchPlayersResponseCopy[0].firstName;
      playersAddedCopy[indexValue].mobile = wildSearchPlayersResponseCopy[0].mobile;
      playersAddedCopy[indexValue].viceCaptain = false;
      playersAddedCopy[indexValue].captain = false;
      playersAddedCopy[indexValue].status = true;
      setPlayersArray(playersAddedCopy)
    }
  }, [wildSearchPlayersResponse, value, indexValue])

  useEffect(() => {
    playersArray.map((values, i) => {
      if (values.captain == true) {
        setState({ ...state, captainIndex: i })
      }
    })
  }, [])

  // const teamsDataFiltered = teamsData && teamsData.filter((data) => data._id === state.teamId)
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
                    {/* <Button className="primary float-right">Add new game</Button> */}
                    <Button className="primary float-right" variant="primary" onClick={handleShow}>
                      Add New Team
                    </Button>


                    <Table className="table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="border-0">Sl.No</th>
                          <th className="border-0">Team Name</th>
                          <th className="border-0">Team Slogan</th>

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
                                // history.push("/teams?teamId="+data._id+"")
                                setState({ ...state, "teamName": data.teamName, "uploadLogoResponse": data.teamLogo, "teamId": data._id, "userId": data.createdBy, "players": data.players, "teamSlogan": data.teamSlogan })
                                setEditShow(!editShow);
                                console.log(parms, "params")

                              })}>
                                {data.teamName}
                              </span></td>
                              <td>
                                {data.teamSlogan}
                              </td>

                              <td><img src={`${Imgurl}/images/userUploads/${data.teamLogo}`} className="teamLogoName" /></td>
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
                                    onClick={(e) => {
                                      // e.preventDefault();
                                      // setState({ ...state, "teamId": data._id })
                                      deleteTeam({ "teamId": data._id })
                                      e.preventDefault();
                                    }}
                                  >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
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
              <Container fluid>
                <Row>
                  <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                      <Card.Header>
                        <Card.Title as="h4">Edit Data</Card.Title>

                      </Card.Header>
                      <Card.Body className="table-full-width table-responsive">
                        <Form>
                          <Form.Group className="mb-3" >
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

                          <Form.Group className="mb-3" >
                            <Form.Label>Team Slogan</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Team Slogan"
                              autoFocus
                              defaultValue={state.teamSlogan}
                              onChange={(e) => {
                                e.preventDefault()
                                setState({ ...state, teamSlogan: e.target.value })
                              }
                              }
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>
                              Upload Team Logo
                            </Form.Label>
                            <div className="upload-block">
                              <img src={`${Imgurl}/images/userUploads/${state.uploadLogoResponse}`} className="teamLogoEdit" />
                              <input id="image" type="file" accept="image/*" onChange={uploadTeamLogoFunc} />
                            </div>
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
              :
              addPlayersPage ?

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
                              {

                                playersArray && playersArray.map((player, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      {/* <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="playerSearch"
                                          name="playerSearch"
                                          aria-describedby="playerSearch"
                                          placeholder="search player"
                                          value={player.playerName}
                                          onChange={(event) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setValue(event.target.value);
                                            setIndexValue(index);

                                         
                                            setState({ ...state, mobile: event.target.value })
                                          }}

                                        />

                                      </td> */}
                                      {/* <td>
                                        <Autocomplete
                                          value={this.state.val}
                                          items={MoviesData()}
                                          getItemValue={item => item.title}
                                          shouldItemRender={renderMovieTitle}
                                          renderMenu={item => (
                                            <div className="dropdown">
                                              {item}
                                            </div>
                                          )}
                                          renderItem={(item, isHighlighted) =>
                                            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                              {item.title}
                                            </div>
                                          }
                                          onChange={(e) => {
                                            e.preventDefault();
                                            setValue(e.target.value);
                                            setIndexValue(index);
                                          }}
                                         onSelect={val => setValue(val)}
                                        />
                                      </td> */}
                                      {/* <td>
                                        <Autocomplete
                                          value={player.playerName ? player.playerName : ''}
                                          onChange={(e) => {
                                            e.preventDefault();
                                            setValue(e.target.value);
                                            setIndexValue(index);
                                          }}
                                          inputValue={value}
                                          onInputChange={(event) => {
                                            {
                                              setInputValue(event.target.value);

                                              newInputValue && wildSearchPlayers({ "searchText": 'Shubham' })
                                              wildSearchPlayers({ "searchText": newInputValue })

                                            }
                                            console.log(wildSearchPlayersResponse, "wildSearchPlayersResponse")
                                          }}
                                          onFocus={() => {
                                            setState({ ...state, focus: true })
                                          }}
                                          options={valuesSearched}
                                          renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
                                        />

                                      </td> */}
                                      <td> { player.playerName } </td>
                                      <td>
                                        <input
                                          type="number"
                                          className="form-control"
                                          id="MobileInput"
                                          name="MobileInput"
                                          aria-describedby="MobileInput"
                                          placeholder="Enter Mobile Number"
                                          value={player.mobile}
                                          onChange={(event) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const playerArrayIndex = [...playersArray];
                                            let obj = playerArrayIndex[index]
                                            obj.playerRole = e.target.value;
                                            setPlayersArray([...playerArrayIndex])

                                            // setState({ ...state, roleName: e.target.value }
                                            // )
                                            setState({ ...state, mobile: event.target.value })
                                          }}

                                        /></td>
                                      <td>
                                        <select
                                          className="form-control"
                                          defaultValue={player.playerRole}
                                          onChange={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            const playerArrayIndex = [...playersArray];
                                            let obj = playerArrayIndex[index]
                                            obj.playerRole = e.target.value;
                                            setPlayersArray([...playerArrayIndex])

                                            // setState({ ...state, roleName: e.target.value }
                                            // )

                                          }}  >
                                          <option value='' disabled>{state.roleName == '' ? 'Select Game' : player.playerRole}</option>

                                          <option value='Wk/Batsman' > Wicket Keeper/Batsman </option>
                                          <option value='Bowler' > Bowler</option>
                                          <option value='Batsman' > Batsman </option>
                                          <option value='All rounder' > All Rounder </option>
                                        </select></td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="Captain"
                                          value='captain'
                                          defaultChecked={player.captain}
                                          onChange={
                                            (event) => {
                                              let playerArrayModified = [...playersArray]
                                              playerArrayModified.map((playerValue, i) => {
                                                if (index === i) {
                                                  if (event.target.checked) {
                                                    playerValue.captain = true
                                                    playerValue.viceCaptain = false
                                                    setState({ ...state, captainIndex: i })
                                                  }
                                                }
                                                else {
                                                  playerValue.captain = false
                                                }
                                              })
                                              setPlayersArray(playerArrayModified);
                                            }
                                          }
                                        />

                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="Vice Captain"
                                          value='viceCaptain'
                                          defaultChecked={player.viceCaptain}
                                          onChange={
                                            (event) => {
                                              let playerArrayModified = [...playersArray]
                                              playerArrayModified.map((playerValue, i) => {
                                                if (index === i && state.captainIndex !== index) {
                                                  if (event.target.checked) {
                                                    playerValue.viceCaptain = true
                                                    playerValue.captain = false

                                                  }
                                                }
                                                else {
                                                  playerValue.viceCaptain = false

                                                }

                                              })
                                              setPlayersArray(playerArrayModified)

                                            }
                                          }
                                        />
                                      </td>
                                      <td><div>
                                        <span style={{ cursor: 'pointer', marginRight: '4px' }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                                            onClick={() => {
                                              // setState({ ...state, "playerId": player._id })
                                              // console.log(player._id ,"delete player")
                                              deletePlayer({ "playerId": player._id })
                                              // console.log(state.teamId, "ïd")
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
                                })

                              }




                            </tbody>
                          </Table>
                          <Button variant="primary" onClick={saveEditPlayer}>
                            Save Changes
                          </Button>
                          <Button variant="primary" onClick={closeEditPlayers}>
                            Close
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                  </Row>

                </Container>
                :
                addnewTeam ?
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

                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Team Slogan</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Team Slogan"
                                  autoFocus
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setState({ ...state, teamSlogan: e.target.value })
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
                            <Button variant="secondary" onClick={closeAddTeam} >
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
                  :
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
                                  <th className="border-0">Team Slogan</th>

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
                                        // history.push("/teams?teamId="+data._id+"")
                                        setState({ ...state, "teamName": data.teamName, "uploadLogoResponse": data.teamLogo, "teamId": data._id, "userId": data.createdBy, "players": data.players, "teamSlogan": data.teamSlogan })
                                        setEditShow(!editShow);
                                        console.log(parms, "params")

                                      })}>
                                        {data.teamName}
                                      </span></td>
                                      <td>
                                        {data.teamSlogan}
                                      </td>

                                      <td><img src={`${Imgurl}/images/userUploads/${data.teamLogo}`} className="teamLogoName" /></td>
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
                                            onClick={(e) => {
                                              //  e.preventDefault();
                                              // setState({ ...state, "teamId": data._id })
                                              deleteTeam({ "teamId": data._id })
                                              setDeleteStatus(true)
                                            }}
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
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
