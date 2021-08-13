import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Col from 'react-bootstrap/Col';

export default class EditStudent extends Component {

  initialStudent = {
    firstName:'',
    lastName:'',
    gender:'',
    joinedYear:'',
    classId:'',
    teacherId:''
  };

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      student: this.initialStudent
    }
  }

  componentDidMount() {

    
    axios.get('http://localhost:8000/api/students/' + this.props.match.params.id)
      .then(res => {
        const firstName = 'firstName'
        this.setState({
            student:res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
    const {student} = this.state
    axios.put('http://localhost:8000/api/expenses/' + this.props.match.params.id, student)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    this.props.history.push('/expenses-listing')
  }


  render() {

    const {student} = this.state
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
     
            <Col>
             <Form.Group controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={student.firstName} onChange={this.handleChange}/>
             </Form.Group>
            </Col>
            
            <Col>
             <Form.Group controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={student.lastName} onChange={this.handleChange}/>
             </Form.Group>
            </Col>

            <Col>
             <Form.Group controlId="Gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" value={student.gender} onChange={this.handleChange}/>
             </Form.Group>
            </Col>
           
            <Col>
             <Form.Group controlId="JoinedYear">
                <Form.Label>Joined Year</Form.Label>
                <Form.Control type="text" value={student.joinedYear} onChange={this.handleChange}/>
             </Form.Group>
            </Col>

            <Col>
             <Form.Group controlId="ClassId">
                <Form.Label>Class Id</Form.Label>
                <Form.Control type="text" value={student.classId} onChange={this.handleChange}/>
             </Form.Group>
            </Col>

            <Col>
             <Form.Group controlId="TeacherId">
                <Form.Label>Teacher Id</Form.Label>
                <Form.Control type="text" value={student.teacherId} onChange={this.handleChange}/>
             </Form.Group>
            </Col>
       
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}