import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class StudentTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8000/api/students/' + this.props.obj.stuId)
            .then((res) => {
                console.log('Student removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.stuId}</td>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.joinedYear}</td>
                <td>{this.props.obj.classId}</td>
                <td>{this.props.obj.teacherId}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj.StuId}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}