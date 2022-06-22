import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import axiosWithAuth from './../utils/axiosWithAuth'

const AddFriend = () => {
    const {push} = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axiosWithAuth().post('/friends',form)
            .then(res => {
            push('/friends')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>AddFriends</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = 'name'>Name:</label>
                    <input onChange={handleChange} id='name' name='name'/>
                </div> 
                <div>
                    <label htmlFor = 'age'>Age:</label>
                    <input onChange={handleChange} id='age' name='age'/>
                </div>
                <div>
                    <label htmlFor = 'email'>Email:</label>
                    <input onChange={handleChange} id='email' name='email'/>
                </div> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;