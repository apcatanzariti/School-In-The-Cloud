import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function StudentLogin () {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');

    const history = useHistory();

    function handleChange (e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit (e) {
        e.preventDefault();

        // the 'else' portion of this will be replaced by the axios call
        if (credentials.username === '' || credentials.password === '') {
            setError('Username and Password must be filled out');
        } else {
            setError('');
            history.push('/student-dash');
        }

        // axios
        // .post('http://localhost:5000/api/login', credentials)
        // .then(res => {
        //     localStorage.setItem('token', JSON.stringify(res.data.payload));
        //     history.push('/student-dash');
        // })
        // .catch(err => {
        //     setError(err.response.data.error);
        // })
    };

    return(
        <StyledStudentContainer>
            <h3>Student Login Form</h3>

            <form onSubmit={handleSubmit}>

                <div>
                <input 
                name='username'
                type='text'
                placeholder='Username'
                value={credentials.username}
                onChange={handleChange}/>
                </div>

                <div>
                <input 
                name='password'
                type='password'
                placeholder='Password'
                value={credentials.password}
                onChange={handleChange}/>
                </div>

                <button>Student Sign In</button>
                <center><StyledError>{error}</StyledError></center>

            </form>
        </StyledStudentContainer>
    );
};

export default StudentLogin;

const StyledStudentContainer = styled.div`
    // border: solid 1px red;
    // border-left: solid 1px #0096DB;
    // border-right: solid 1px #0096DB;
    padding: 8% 0% 8% 0%;
    width: 30%;
    text-align: center;
    box-shadow: 0px 0px 10px lightgray;
    border-radius: 5px;

    input {
        padding: 1%;
        width: 60%;
        margin-bottom: 6%;
        outline: none;
    }

    button {
        border: solid 1px #0096DB;
        color: #0096DB;
        background-color: white;
        padding: 2% 4% 2% 4%;
        transition: .3s;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        background-color: #0096DB;
        color: white;
    }
`;

const StyledError = styled.div`
    color: red;
    margin-top: 6%;
    width: 70%;
`;