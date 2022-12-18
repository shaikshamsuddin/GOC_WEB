import React, { useEffect, useState, useRef } from "react";
import './teams.css';
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
const TeamsComponent = ({ setShow,
    teamsData,
    setEditShow,
    editShow,
    

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
    const handleShow = () => setShow(true);

    return (
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
                                                <td><span style={{ cursor: 'pointer' }} onClick={((e) => {
                                                    e.preventDefault();
                                                    setState({ ...state, "teamName": data.teamName, "teamId": data._id })
                                                    setEditShow(!editShow);
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

        </Container>
    )
}

export default TeamsComponent;