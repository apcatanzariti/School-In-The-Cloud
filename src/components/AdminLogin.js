import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setActiveAdmin } from './../actions/action';
import signUp from './validation/signUpSchema.js'

function AdminLogin (props) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState();

    const [disabled, setDisabled] = useState(true)

    const history = useHistory();

    function handleChange (e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit (e) {
        e.preventDefault();
        props.setActiveAdmin(credentials);
        history.push('/admin-dash');

        // axios
        // .post('http://localhost:5000/api/login', credentials)
        // .then(res => {
        //     localStorage.setItem('token', JSON.stringify(res.data.payload));
        //     history.push('/admin-dash');
        // })
        // .catch(err => {
        //     setError(err.response.data.error);
        // })
    };

    useEffect(() => {
        signUp.isValid(credentials).then(valid => setDisabled(!valid))
        signUp.validate(credentials)
            .then(()=>{
                setError('');
            })
            .catch((err)=>{
                setError(err.errors[0])
            })
    }, [credentials])

    return(
        <StyledAdminContainer>
            <h3>Admin Login Form</h3>

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

                <button disabled={disabled}>Admin Sign In</button>
                <center><StyledError>{error}</StyledError></center>

            </form>
        </StyledAdminContainer>
    );
};

function mapStateToProps (state) {
    return {
        activeAdmin: state.activeAdmin
    };
};

export default connect(mapStateToProps, {setActiveAdmin})(AdminLogin);
//export default AdminLogin;

const StyledAdminContainer = styled.div`
    // border: solid 1px red;
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
        outline: none;
    }

    button:disabled{
        border: solid 1px red;
        color: red;
        cursor: not-allowed;
    }

    button:hover:enabled {
        cursor: pointer;
        background-color: #0096DB;
        color: white;
    }
`;

const StyledError = styled.div`
    color: red;
    margin-top: 6%;
    width: 70%;
`;