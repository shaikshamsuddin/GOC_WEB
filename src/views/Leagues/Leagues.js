import React, { useEffect, useState, useRef } from "react";
import './league.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
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
const Imgurl = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL : ""

const Leagues = ({
    getLeagues,
    leagues
}) => {

    useEffect(() => {
        getLeagues();
    }, []);

    const [leaguesData, setLeaguesData] = useState([]);
    const newLeague = useRef();
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false)

    useEffect(() => {
        setLeaguesData(leagues)
    }, [leagues])
    const [state, setState] = React.useState({
        leagueName: "",
        id: "",
        status: 1,
        setActive: '',
        leagueDesc:'',
        leaguePoster :'',
        numberOfPlayers :'',
        numberOfOvers : '',
        entryFees : '',
        leagueAddress : '',
        startDate : '',
        endDate : '',
        league1Prices :'',
        league2Prices : '',
        leagueMom : '',
        leagueMot : '',
        leagueRules : ''
    });



    return (
        <>
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
                                                    <td>{data.leagueName}</td>
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
        </>
    );
}

export default Leagues;
