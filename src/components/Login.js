import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null)
        {
            loggedIn=false
        }
         this.state = {
             username: '',
             password: '',
             loggedIn
         }
         
         this.onChange =this.onChange.bind(this)
         this.submitForm =this.submitForm.bind(this)
    }

    onChange (e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm (e){
        e.preventDefault()
        const { username, password } = this.state
        // login magic
        if(username ==="owl" && password === "owl")
        {
            localStorage.setItem("token", "qsdchrtyhcvbcbhjkjfbertd")
            this.setState({
               loggedIn: true
            })
        }
    }

  render() {
      if (this.state.loggedIn)
      {
          return <Redirect to="/Admin"/>
      }
    return (
        <Container className="App">
        <br/>
        <h2>Login</h2>
        <br/>
        <Form onSubmit={this.submitForm} className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
               type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
               type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <br/>
          <Col>
          <Input type="submit" /> 
          </Col>
         
          
        </Form>
      </Container>
    )
  }
}
