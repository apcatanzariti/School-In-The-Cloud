import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import signUp from "./validation/signUpSchema.js";



function SignUp() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        passwordconf: '',
        role: ''
    });
  const [error, setError] = useState("");
  const [activeForm, setActiveForm] = useState("");
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  function changeActive(role) {
    setActiveForm(role);
    setCredentials({
      ...credentials,
      role: role,
    });
  }

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

    function handleSubmit (e) {
        e.preventDefault();

        // the 'else' portion of this will be replaced by the axios call
        if (credentials.username === '' || credentials.password === '') {
            setError('Username and Password must be filled out');
        } else {
            setError('');
            // history.push('/student-dash');
            console.log(credentials);
            
            // Doing this because including passwordconf breaks axios.
            const axiosCredentials = {
                username: credentials.username,
                password: credentials.password,
                role: credentials.role
            };

            axios
            .post('https://bw-backend-clouds.herokuapp.com/api/auth/register', axiosCredentials)
            .then(res => {
                console.log(res);
                // setCredentials({
                //     username: '',
                //     password: '',
                //     passwordconf: '',
                //     role: ''
                // });
            })
            .catch(err => {
                setError(err.response.data.error);
            })
        }
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
    }, [credentials]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return(
        <StyledSignUpContainer>
            <h3>New Here? Sign up as:</h3>

            {
                activeForm === '' ? 
                <>
                <div><button onClick={e => {e.stopPropagation(); changeActive('admin');}}>An Administrator</button></div>

                <div><button onClick={e => {e.stopPropagation(); changeActive('student');}}>A Student</button></div>
    
                <div><button onClick={e => {e.stopPropagation(); changeActive('volunteer');}}>A Volunteer</button></div> </> : null
            }

            {
                activeForm !== '' ? 

                <form onSubmit={handleSubmit}>

                <div>
                <input 
                name='username'
                type='text'
                placeholder={`Username`}
                value={credentials.username}
                onChange={handleChange}/>
                </div>

                <div>
                <input 
                name='password'
                type='password'
                placeholder={`Password`}
                value={credentials.password}
                onChange={handleChange}/>
                </div>

                <div>
                <input 
                name='passwordconf'
                type='password'
                placeholder={`Password Confirmation`}
                value={credentials.passwordconf}
                onChange={handleChange}/>
                </div>

                <button className='register' disabled={disabled}>{`${capitalizeFirstLetter(activeForm)} Register`}</button>
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
    padding: 9% 0% 9% 0%;
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

    .register {
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
        border: solid 1px red;
        color: red;
        background-color: white;
        padding: 2% 4% 2% 4%;
        transition: .3s;
        cursor: pointer;
        outline: none;
    }

    .cancel:hover {
        border: solid 1px red;
        background-color: red;
        color: white;
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

        button:hover {
            cursor: pointer;
            background-color: #0096DB;
            color: white;
        }

        h3 {
            margin-bottom: 4%;
        }
    }

    .register:disabled{
        border: solid 1px lightgray;
        color: lightgray;
        cursor: not-allowed;
    }

    .register:hover:enabled {
        cursor: pointer;
        background-color: #0096DB;
        color: white;
    }
  }
`;

const StyledError = styled.div`
  color: red;
  width: 70%;
  margin-top: 3%;
`;
