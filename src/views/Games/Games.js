import React, { useEffect } from "react";
import './games.css';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Games = ({
    getGames,
    games
})=> {
useEffect(()=>{
    getGames();
},[])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Games</Card.Title>
                <p className="card-category">
                  Games list
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Button className="primary float-right">Add new game</Button>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Serial</th>
                      <th className="border-0">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {games && games.map(data=>{
                        return(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.game}</td>
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

export default Games;
