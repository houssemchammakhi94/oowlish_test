import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, FormGroup, Label, Input,Button, Table } from 'reactstrap';

export default class Admin extends Component {
    state = {
      days: []
    }
    componentWillMount(){
      axios.get('http://localhost:3000/days').then((Response) => {
        this.setState({
          days: Response.data
        })
      });
    }
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null)
        {
            loggedIn=false
        }
            this.state ={
                loggedIn
            }
        
    }
  render() {
      if(this.state.loggedIn===false)
      {
          return <Redirect to="/" />
      }
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Arriving time</th>
              <th>Lunch Breack time</th>
              <th>Exit time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input type="date" name="date"></Input></td>
              <td><Input type="text" name="arriving"></Input></td>
              <td><Input type="text" name="lunch"></Input></td>
              <td><Input type="text" name="exit"></Input></td>
              <td>
              <Button color="success" className="mr-2">Edit</Button>
              <Button color="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Link to="/logout">Logout</Link>
      </div>
      
    )
  }
}
