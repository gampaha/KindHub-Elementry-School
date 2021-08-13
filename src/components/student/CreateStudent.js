import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ListStudent from './ListStudent';
import Swal from 'sweetalert2';


export default class CreateStudent extends Component {

  initialStudent = {
    firstName: '',
    lastName: '',
    gender: '',
    joinedYear: '',
    classId: '',
    teacherId: ''
  };

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      student: this.initialStudent
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let student = { ...this.state.student };
    student[name] = value;
    this.setState({ student });

  }


  onSubmit(e) {
    e.preventDefault()
    const { student } = this.state
    console.log(student)
    axios.post('http://localhost:8000/api/students/',student)
      .then(res => console.log(res.data))
      .catch(
        error => console.log(error)
    )
    Swal.fire(
      'Good job!',
      'Student Added Successfully',
      'success'
    )
    
  }

  render() {
    const { student } = this.state
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={student.firstName || ''} onChange={this.handleChange} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={student.lastName} onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" defaultValue="Choose..." name="gender" value={student.gender} onChange={this.handleChange}>
                <option>Choose...</option>
                <option  value="F">Female</option>
                <option  value="M">Male</option>
                </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="JoinedYear">
              <Form.Label>Joined Year</Form.Label>
              <Form.Control type="number" name="joinedYear" maxLength={4} value={student.joinedYear} onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="ClassId">
              <Form.Label>Class Id</Form.Label>
              <Form.Control type="number" name="classId" value={student.classId || ''} onChange={this.handleChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="TeacherId">
              <Form.Label>Teacher Id</Form.Label>
              <Form.Control type="number" name="teacherId" value={student.teacherId} onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" size="lg" block="block" type="submit">
          Add Student
        </Button>
      </Form>
      <br></br>
      <br></br>

      <ListStudent> </ListStudent>

    </div>);
  }
}

