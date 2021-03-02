import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SignUp () {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        role: ''
    });
    const [error, setError] = useState('');
    const [activeForm, setActiveForm] = useState('');

    const history = useHistory();

    function changeActive (role) {
        setActiveForm(role);
        setCredentials({
            ...credentials,
            role: role
        });
    };

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
            // history.push('/student-dash');
            console.log(credentials);
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
        <StyledSignUpContainer>
            <h3>New Here? Sign up as:</h3>

            {
                activeForm === '' ? 
                <>
                <div><button onClick={e => {e.stopPropagation(); changeActive('Admin');}}>An Administrator</button></div>

                <div><button onClick={e => {e.stopPropagation(); changeActive('Student');}}>A Student</button></div>
    
                <div><button onClick={e => {e.stopPropagation(); changeActive('Volunteer');}}>A Volunteer</button></div> </> : null
            }

            {
                activeForm !== '' ? 

                <form onSubmit={handleSubmit}>

                <div>
                <input 
                name='username'
                type='text'
                placeholder={`${activeForm} Username`}
                value={credentials.username}
                onChange={handleChange}/>
                </div>

                <div>
                <input 
                name='password'
                type='password'
                placeholder={`${activeForm} Password`}
                value={credentials.password}
                onChange={handleChange}/>
                </div>

                <button>{`${activeForm} Register`}</button>
                <button className='cancel' onClick={e => {e.stopPropagation(); setActiveForm(''); setError('');}}>Cancel</button>

                {
                    error === '' ? null : 
                    <center><StyledError>{error}</StyledError></center>
                }

                </form> : null
            }

        </StyledSignUpContainer>
    );
};

export default SignUp;

const StyledSignUpContainer = styled.div`
    // border: solid 1px red;
    padding: 5% 0% 5% 0%;
    width: 60%;
    text-align: center;
    box-shadow: 0px 0px 10px lightgray;
    border-radius: 5px;

    h3 {
        margin-bottom: 4%;
    }

    input {
        padding: 1%;
        width: 60%;
        margin-bottom: 3.5%;
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
            //margin-bottom: 3%;
        }

    .cancel {
        margin-left: 3%;
    }

    .cancel:hover {
        border: solid 1px red;
        background-color: red;
    }

    div {

        button {
            border: solid 1px #0096DB;
            color: #0096DB;
            background-color: white;
            padding: 2% 4% 2% 4%;
            transition: .3s;
            cursor: pointer;
            outline: none;
            margin-bottom: 3%;
            width: 70%;
        }

        h3 {
            margin-bottom: 4%;
        }
    }

    button:hover {
        background-color: #0096DB;
        color: white;
    }
`;

const StyledError = styled.div`
    color: red;
    width: 70%;
    margin-top: 3%;
`;