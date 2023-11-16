import React, { useEffect, useState, useRef } from "react";
import './league.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
// import { useNavigate } from "react-router-dom";

import {
    Badge,
    Button,
    Modal,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
const Imgurl = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL : ""

const Leagues = ({
    getLeagues,
    leagues,
    addTeamsToLeague,
    addTeamsToleagueResponse,
    fetchTeams,
    getTeams,
    getTeamsFromLeague,
    teamsInLeague
}) => {

    useEffect(() => {
        getLeagues();
        getTeams();
    }, []);

    const [leaguesData, setLeaguesData] = useState([]);
    const [teamOptions, setTeamOptions] = useState([]);

    const newLeague = useRef();
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false)
    // let navigate = useNavigate();

    useEffect(() => {
        setTeamOptions(fetchTeams)
    }, [fetchTeams]);
    const [state, setState] = React.useState({
        leagueName: "",
        id: "",
        status: 1,
        setActive: '',
        leagueDesc: '',
        leaguePoster: '',
        numberOfPlayers: '',
        numberOfOvers: '',
        entryFees: '',
        leagueAddress: '',
        startDate: '',
        endDate: '',
        league1Prices: '',
        league2Prices: '',
        leagueMom: '',
        leagueMot: '',
        leagueRules: '',
        addTeamsToThisLeague: false,
        openTeamsModal: false,
        teamsInSelectedLeague : [],
        leagueId : ''
    });

    const {teamsInSelectedLeague , addTeamsToThisLeague, leagueId} = state;
    useEffect(() => {
        if(!addTeamsToThisLeague){
            setLeaguesData(leagues)
        }
    }, [leagues]);

    useEffect(()=>{
        getTeamsFromLeague({ "_id" : leagueId})
    
    },[leagueId,addTeamsToThisLeague])
    useEffect(()=>{
        console.log(teamsInLeague,state.leagueId,addTeamsToThisLeague,"teamsInSelectedLeague")
        if(leagueId){
            setState({...state, teamsInSelectedLeague : teamsInLeague})
        }
    },[teamsInLeague,addTeamsToleagueResponse]);

    const addTeamsToleagueClick = ((e) => {
        addTeamsToLeague({
            "leagueId": state.leagueId,
            "teamId": state.teamId,
            "teamName": state.teamName
        })
        setState({...state, leagueId:'' , addTeamsToThisLeague: false, openTeamsModal : false})
    })

    const closeModal = (() => {
        setState({ ...state, openTeamsModal: false})
    })
    const openModal = (() => {
        setState({ ...state, openTeamsModal: true })
    })
    return (
        <>
            {!addTeamsToThisLeague ?
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <Card className="strpied-tabled-with-hover">
                                <Card.Header>
                                    <Card.Title as="h4">Leagues</Card.Title>
                                    <p className="card-category">
                                        Leagues list
                                    </p>
                                </Card.Header>
                                <Card.Body className="table-full-width table-responsive">
                                    <Table className="table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th className="border-0">Sl.No</th>
                                                <th className="border-0">Name</th>
                                                <th className="border-0">League Poster</th>
                                                <th className="border-0">league Desc</th>
                                                <th className="border-0">Number Of Players</th>
                                                <th className="border-0">numberOfOvers</th>
                                                <th className="border-0">entryFees</th>
                                                <th className="border-0">leagueAddress</th>
                                                <th className="border-0">startDate</th>
                                                <th className="border-0">endDate</th>
                                                <th className="border-0">Rules</th>
                                                <th className="border-0">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {leaguesData && leaguesData.map((data, i) => {
                                                return (
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td style={{ cursor: 'pointer' }}
                                                            onClick={(e) => {
                                                                setState({ ...state, addTeamsToThisLeague: true, leagueId: data._id })
                                                            }}
                                                        >{data.leagueName}</td>
                                                        <td><img src={`${Imgurl}/images/userUploads/${data.leaguePoster}`} className="leagueLogoName" /></td>
                                                        <td>{data.leagueDesc}</td>
                                                        <td>{data.numberOfPlayers}</td>
                                                        <td>{data.numberOfOvers}</td>
                                                        <td>{data.entryFees}</td>
                                                        <td>{data.leagueAddress}</td>
                                                        <td>
                                                            {moment(data.startDate).format("YYYY MMM DD")}
                                                        </td>
                                                        <td>
                                                            {moment(data.endDate).format("YYYY MMM DD")}
                                                        </td>
                                                        <td>{data.leagueRules}</td>
                                                        <td>{data.status ? 'Active' : 'Inactive'}</td>
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
                :
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <Card className="strpied-tabled-with-hover">
                                <Card.Header>
                                    <Card.Title as="h4">Leagues</Card.Title>
                                    <p className="card-category">
                                        Add Teams To League
                                    </p>
                                </Card.Header>
                                <Modal show={state.openTeamsModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-sm">
                                    <Modal.Header closeButton>
                                        <Modal.Title> Add Team to League</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <form className="form" onSubmit={addTeamsToleagueClick} >
                                                <div className="form-groups width-input">
                                                    <label>Team Name</label>
                                                    <div>
                                                        <select
                                                            className="form-control"
                                                            name="teamName"
                                                            value={state.teamName}
                                                            onChange={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                               const selectedTeam = teamOptions && teamOptions.find( id => e.target.value == id._id);
                                                               console.log(selectedTeam, "teamname")
                                                               setState({ ...state, teamId: selectedTeam._id, teamName: selectedTeam.teamName}
                                                                )
                                                            }}  >
                                                            <option value=''>{state.teamName == '' ? 'Select Team' : state.teamName}</option>
                                                            {teamOptions && teamOptions.map((data, i) =>
                                                                <option value={data._id} > {data.teamName} </option>
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className=" col text-center mt-3">
                                                    <button type="submit" className=" btn btn-primary" onClick={addTeamsToleagueClick}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <Card.Body className="table-full-width table-responsive">
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <button className="btn btn-primary" onClick={openModal}>
                                                Add Teams
                                            </button>
                                        </div>
                                        <div>
                                            <Table className="table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th className="border-0">Sl.No</th>
                                                        <th className="border-0">Team Name</th>
                                                        {/* <th className="border-0">Team Id</th> */}

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        teamsInSelectedLeague && teamsInSelectedLeague.map((teamData,index)=>{
                                                            return(
                                                                <tr>
                                                                <td>
                                                                    {index+1}
                                                                </td>
                                                                <td>
                                                                    {teamData.teamName}
                                                                </td>

                                                            </tr>
                                                            )

                                                        
                                                        })
                                                    }
                                               
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row md="12">

                    </Row>
                    <Row md="12">
                        <button type="submit" className=" btn btn-primary" onClick={() => {
                            setState({ ...state, addTeamsToThisLeague: false })
                        }}>
                            Back to Leagues
                        </button>

                    </Row>
                </Container>
            }
        </>
    );
}

export default Leagues;
