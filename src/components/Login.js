import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from './../utils/axiosWithAuth'
const Login = () => {
    const {push} = useHistory()
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/login', cred)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            push('/friends')
        })
        .catch(err => console.log(err))
    }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
  
          <div>
            <label htmlFor='username'>Username:</label>
              <input onChange={handleChange} id='username' name='username' />
          </div>
  
          <div>
            <label htmlFor='password'>Password:</label>
              <input onChange={handleChange} type='password' id='password' name='password'/>
          </div>
            <button>Submit</button>
        </form>
      </div>)
  }

export default Login;