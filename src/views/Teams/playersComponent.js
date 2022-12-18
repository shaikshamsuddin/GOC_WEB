import React, { useState, useRef, useEffect } from "react";
import './teams.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
import Select from 'react-select';
import { Hint } from 'react-autocomplete-hint';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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

const PlayersComponent = ({
    teamsDataFiltered,
    teamsData,
    setTeamsData,
    fetchTeams,
    getTeams,
    teamPlayers,
    mergeTeamResponse,
    mergeTeam,
    deletePlayerResponse,
    deletePlayer,
    wildSearchPlayers,
    wildSearchPlayersResponse,
    getUsersForCreateTeam,
    UsersForCreateTeamResponse
}) => {
    const [teamPlayerFiltered, setTeamPlayerFiltered] = useState([]);
    const [playersArray, setPlayersArray] = useState([])
    const [value, setValue] = React.useState('');
    const [indexValue, setIndexValue] = React.useState('');
    const [editedPlayers, setEditedPlayers] = useState([]);
    const [state, setState] = useState({
        gameName: "",
        teamName: '',
        gameId: "",
        status: "",
        setActive: '',
        userId: '630b34e788714500169e657e',
        userName: '',
        teamLogo: '',
        players: [],
        uploadLogoResponse: '',
        teamId: '',
        playerId: '',
        captain: '',
        ViceCaptain: '',
        mobile: '',
        roleName: '',
        index: '',
        captainIndex: '',
        focus : false

    });

    const wildsearchCopy = wildSearchPlayersResponse && [...wildSearchPlayersResponse]

    const valuesSearched = wildsearchCopy && wildsearchCopy.map((data) => {
        return data.firstName
    })
    console.log(valuesSearched, "valuesSearched")
    useEffect(() => {
        if(value && state.focus){
            wildSearchPlayers({ "searchText": value })
        }
  
    }, [])

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

    const saveEditPlayer = () => {
        const teamCopy = [...teamPlayerFiltered]
        mergeTeam({ "_id": teamCopy[0]._id, "teamName": teamCopy[0].teamName, "teamLogo": teamCopy[0].uploadLogoResponse, "createdBy": teamCopy[0].createdBy, "players": playersArray })

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

    // console.log(state.captainIndex,"captainedIndex")
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
                                    {

                                        playersArray && playersArray.map((player, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Autocomplete
                                                            value={player.playerName}
                                                            onChange={(e) => {
                                                                e.preventDefault();
                                                                setValue(e.target.value);
                                                                setIndexValue(index);


                                                            }}
                                                            inputValue={value}
                                                            onInputChange={(event, newInputValue) => {

                                                                {
                                                                    newInputValue && wildSearchPlayers({ "searchText": newInputValue })
                                                                    // wildSearchPlayers({ "searchText": newInputValue })

                                                                }
                                                                
                                                                console.log(wildSearchPlayersResponse, "wildSearchPlayersResponse")
                                                            }}
                                                            onFocus={()=>{
                                                                setState({...state, focus : true})
                                                            }}                                                
                                                                        id="controllable-states-demo"
                                                            options={valuesSearched}
                                                            style={{ width: 300 }}
                                                           renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
                                                        />

                                                    </td>
                                                    {/* <td>{player.playerName}</td> */}
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
                            <Button variant="primary" >
                                Close
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default PlayersComponent;