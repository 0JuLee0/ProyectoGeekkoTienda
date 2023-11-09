import React, { Component } from 'react'
import './Register.css'
import Navbar from '../Navbar/Navbar';
import axios from "axios";




export default class Register extends Component {
  state = {
    users: [],
    name: '',
    surname: '',
    email: '',
    password: ''

  }
  async componentDidMount() {
    this.getUsers()
  }


  onSubmit = async (e) => {

    e.preventDefault();
    await axios.post('http://localhost:4000/api/users', {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
    })
    this.setState({ id: '', name: '', surname: '', email: '', password: '' })
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios('http://localhost:4000/api/users')
    // const res = await axios('users.json')
    this.setState({ users: res.data });
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  }
  onChangeSurname = (e) => {
    this.setState({ surname: e.target.value });
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="content">
          <div className="col-md-4 left">
            <div className="card card-body">
              <form onSubmit={this.onSubmit}>
                <h3>Crear nuevo Usuario</h3>
                <div className="form-group">
                  <label>NOMBRE</label>
                  <input type="text" className='form-control'
                    required="True"
                    onChange={this.onChangeName}
                    value={this.state.name} />
                </div>
                <div className="form-group">
                  <label>APELLIDO</label>
                  <input type="text" className='form-control'
                    required="True"
                    onChange={this.onChangeSurname}
                    value={this.state.surname} />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input type="email" className='form-control'
                    required="True"
                    onChange={this.onChangeEmail}
                    value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>CONTRASEÑA</label>
                  <input type="password" className='form-control'
                    required="True"
                    onChange={this.onChangePassword}
                    value={this.state.password} />
                </div>
                <button type="submit" className="btn btn-primary">
                  GUARDAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}