import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditStudent from "./components/student/EditStudent";
import ListStudent from "./components/student/ListStudent";
import CreateStudent from "./components/student/CreateStudent";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="black" variant="success">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
              Student Manager System
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <br />
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={ListStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:stuId" component={EditStudent} />
                <Route path="/student-list" component={ListStudent} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;