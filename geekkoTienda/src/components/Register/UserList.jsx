import React, { Component } from 'react'
import './UserList.css'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { Link } from 'react-router-dom';




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


  getUsers = async () => {
    const res = await axios('http://localhost:4000/api/users')
    // const res = await axios('users.json')
    this.setState({ users: res.data });;
  }

  deleteUser = async (id) => {
    await axios.delete('http://localhost:4000/api/users/' + id)
    this.getUsers();
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="row container">
          <div className='right'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">APELLIDO</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => (
                  <tr key={user._id}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="delete-button" onClick={() => this.deleteUser(user._id)} > Eliminar</button>
                      <button className="update-button"><Link className='Link' to={'/edit-user/' + user._id}>Editar</Link></button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </>
    )
  }
}