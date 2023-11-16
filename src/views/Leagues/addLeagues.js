import React, { useEffect, useState, useRef } from "react";
import './league.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import moment from "moment";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

const AddLeague = ({
  getLeagues,
  leagues,
  mergeLeaguesResponse,
  mergeLeague

}) => {

  useEffect(() => {
    getLeagues();
  }, []);

  const [leaguesData, setLeaguesData] = useState([]);
  const newLeague = useRef();
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false)
  // const [startDate, setStartDate] = useState < Dayjs | null > (null);
  // const [endDate, setEndDate] = useState < Dayjs | null > (null);



  const Imgurl = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL : ""

  useEffect(() => {
    setLeaguesData(leagues)
  }, [leagues])
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
    uploadLogoResponse: ''

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
  const LeagueDataSubmit = ((e) => {
    mergeLeague({
      "leagueName": state.leagueName, "leagueDesc": state.leagueDesc, "numberOfPlayers": state.numberOfPlayers,
      "numberOfOvers": state.numberOfOvers, "entryFees": state.entryFees, "leagueAddress": state.leagueAddress, "league1Prices": state.league1Prices,
      "league2Prices": state.league2Prices, "leagueMom": state.leagueMom, "leagueMot": state.leagueMot,
      "leagueRules": state.leagueRules, "startDate": state.startDate, "endDate": state.endDate, "leaguePoster": state.uploadLogoResponse
    })
    e.preventDefault();

  })

  return (
    <>
      <div className="container-register">
        <Container fluid style={{ width: '100%' }}>

          <div className="form-block" >
            <Card style={{ padding: '30px', width: '100%' }}>
              <form id="loginform" onSubmit={LeagueDataSubmit}>
                <div className="register-rows row">
                  <div className="form-groups width-input col-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="leagueName"
                      name="leagueName"
                      aria-describedby="leagueName"
                      placeholder="Enter League Name"
                      onChange={(event) => setState({ ...state, leagueName: event.target.value })}
                    />

                  </div>
                  <div className="form-groups width-input col-6">
                    <label>league Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="leagueDesc"
                      name="leagueDesc"
                      aria-describedby="leagueDesc"
                      placeholder="Enter league Description"
                      onChange={(event) => setState({ ...state, leagueDesc: event.target.value })}

                    />

                  </div>
                </div>

                <div className="register-rows row">
                  <div className="form-groups width-input col-6">
                    <label>Number Of Players</label>
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfPlayers"
                      name="numberOfPlayers"
                      aria-describedby="numberOfPlayers"
                      placeholder="Enter Number Of Players"
                      onChange={(event) => setState({ ...state, numberOfPlayers: event.target.value })}

                    />

                  </div>
                  <div className="form-groups width-input col-6">
                    <label>Number Of Overs</label>
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfOvers"
                      name="numberOfOvers"
                      aria-describedby="numberOfOvers"
                      placeholder="Enter Number Of Overs"
                      onChange={(event) => setState({ ...state, numberOfOvers: event.target.value })}

                    />

                  </div>
                </div>
                <div className="register-rows row">
                  <div className="form-groups width-input col-6">
                    <label>Entry Fees</label>
                    <input
                      type="number"
                      className="form-control"
                      id="entryFees"
                      name="entryFees"
                      aria-describedby="entryFees"
                      placeholder="Enter entryFees"
                      onChange={(event) => setState({ ...state, entryFees: event.target.value })}

                    />

                  </div>
                  <div className="form-groups width-input col-6">
                    <label>League Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="leagueAddress"
                      name="leagueAddress"
                      aria-describedby="leagueAddress"
                      placeholder="Enter leagueAddress"
                      onChange={(event) => setState({ ...state, leagueAddress: event.target.value })}

                    />

                  </div>
                </div>
                <div className="register-rows row">
                  <div className="form-groups width-input col-6">
                    <label>League1 Prices</label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      id="league1Prices"
                      name="league1Prices"
                      aria-describedby="league1Prices"
                      placeholder="Enter league1Prices"
                      onChange={(event) => setState({ ...state, league1Prices: event.target.value })}

                    />

                  </div>
                  <div className="form-groups width-input col-6">
                    <label>league2 Price</label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      id="league2Prices"
                      name="league2Prices"
                      aria-describedby="league2Prices"
                      placeholder="Enter league2Price"
                      onChange={(event) => setState({ ...state, league2Prices: event.target.value })}

                    />

                  </div>
                </div>
                <div className="register-rows row">
                  <div className="form-groups width-input col-6">
                    <label>league man of the Match</label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      id="leagueMom"
                      name="leagueMom"
                      aria-describedby="leagueMom"
                      placeholder="Enter league Mom"
                      onChange={(event) => setState({ ...state, leagueMom: event.target.value })}

                    />

                  </div>
                  <div className="form-groups width-input col-6">
                    <label>league man of the Tournment</label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      id="leagueMot"
                      name="leagueMot"
                      aria-describedby="leagueMot"
                      placeholder="Enter league Mot"
                      onChange={(event) => setState({ ...state, leagueMot: event.target.value })}
                    />
                  </div>
                </div>
                <div className="register-rows row">
                  <div className="form-groups width-input col-6">
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      // value={moment(state.startDate).format("DD-MMM-YYYY")}
                      id="startDate"
                      name="startDate"
                      aria-describedby="startDate"
                      onChange={(event) => setState({ ...state, startDate: event.target.value })}
                    />
                  </div>
                  <div className="form-groups width-input col-6">
                    <label>End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      // value={moment(state.endDate).format("DD-MMM-YYYY")}
                      disabled= {state.startDate ? false :true}

                      id="endDate"
                      name="endDate"
                      aria-describedby="endDate"
                      onChange={(event) => {
                        {state.startDate ? 
                        setState({ ...state, endDate: event.target.value }) : "" }
                    console.log(event.target.value,"date")
                      }}

                    />

                  </div>
                </div>
                <div className="register-rows row">

                  <div className="form-groups width-input col-12">
                    <label>league Poster</label>
                    <div className="upload-block">
                      <input type="file" accept="image/*" onChange={uploadTeamLogoFunc} />

                    </div>


                  </div>

                </div>
                <div className="register-rows row">
                  <div className="form-groups width-input col-12">
                    <label>leagueRules</label>
                    <textarea className="form-control"
                      id="leagueRules"
                      name="leagueRules"
                      aria-describedby="leagueRules"
                      placeholder="Enter leagueRules" rows="4" cols="50"
                      onChange={(event) => setState({ ...state, leagueRules: event.target.value })}
                    >

                    </textarea>




                  </div>
                </div>


                <div className=" col text-center mt-3">
                  <button type="submit" className=" btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </Card>
          </div>

        </Container>
      </div>

    </>
  )

}

export default AddLeague;
