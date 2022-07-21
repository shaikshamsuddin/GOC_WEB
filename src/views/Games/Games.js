import React, { useEffect,useState } from "react";
import './games.css';

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

const Games = ({
    getGames,
    games
})=> {
useEffect(()=>{
    getGames();
},[])
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
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
                {/* <Button className="primary float-right">Add new game</Button> */}
                <Button className="primary float-right" variant="primary" onClick={handleShow}>
        Add New Game
      </Button>
      <Modal show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm"
>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
