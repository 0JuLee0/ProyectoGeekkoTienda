import React, { useEffect, useState } from 'react'
import './Register.css'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { useParams } from 'react-router-dom';

function EditUser() {


  const params = useParams();

  //Hooks

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:4000/api/users/${params.id}`, { _id: params.id }).then(res => {
      const userData = res.data
      setName(userData.name)
      setSurname(userData.surname)
      setEmail(userData.email)
      setPassword('')
    })
  }, [])

  function EditUser() {
    const newuser = {
      _id: params.id,
      name: name,
      surname: surname,
      email: email,
      password: password
    }
    axios.put(`http://localhost:4000/api/users/${params.id}`, newuser)

  }

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="col-md-4 left">
          <div className="card card-body">
            <form >
              <h3>Editar Usuario</h3>
              <div className="form-group">
                <label>NOMBRE</label>
                <input type="text" className='form-control'
                  required="True"
                  onChange={(e) => setName(e.target.value)}
                  value={name} />
              </div>
              <div className="form-group">
                <label>APELLIDO</label>
                <input type="text" className='form-control'
                  required="True"
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname} />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" className='form-control'
                  required="True"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} />
              </div>
              <div className="form-group">
                <label>CONTRASEÑA</label>
                <input type="password" className='form-control'
                  required="True"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </div>
              <button onClick={EditUser} className="btn btn-primary">
                GUARDAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser