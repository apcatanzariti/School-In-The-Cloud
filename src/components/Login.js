import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setActiveAdmin } from "./../actions/index";
import signIn from './validation/signInSchema.js'

function Login (props) {
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true)

// Declare role enum
const ROLE = {
  STUDENT: 'student',
  VOLUNTEER: 'volunteer',
  ADMIN: 'admin'
}

const roleOptions = [
  { name: 'Student', value: ROLE.STUDENT },
  { name: 'Volunteer', value: ROLE.VOLUNTEER},
  { name: 'Admin', value: ROLE.ADMIN },
];

const [credentials, setCredentials] = useState({
  username: "",
  password: "",
  role: ROLE.STUDENT
});

const history = useHistory();

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (credentials.username === "" || credentials.password === "") {
      setError("Username and Password must be filled out");
    } else {
      setError("");
      // history.push("/admin-dash");
      
      axios
      .post('https://bw-backend-clouds.herokuapp.com/api/auth/login', credentials)
      .then(res => {
          localStorage.setItem('token', JSON.stringify(res.data.token));
          localStorage.setItem('role', JSON.stringify(JSON.parse(res.config.data).role));
          props.setActiveLink(!props.activeLink);
          //history.push('/credentials.role/-dash');
          console.log(res);
      })
      .catch(err => {
          setError(err.response.data.error);
      })
    }
  };
    
  useEffect(() => {
    signIn.isValid(credentials).then(valid => setDisabled(!valid))
    signIn.validate(credentials)
        .then(()=>{
            setError('');
        })
        .catch((err)=>{
            setError(err.errors[0])
        })
}, [credentials])

  return (
    <StyledLoginContainer>
      <h3>Sign In Here:</h3>

      <form onSubmit={handleSubmit}>

        {/* Input Name */}
        <div>
          <label htmlFor="username" />
          <input
            id="name"
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>

        {/* Input Password */}
        <div>
          <label htmlFor="password" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        {/* Select Role */}
        <div>
          <select
            name="role"
            value={credentials.role || ROLE.STUDENT}
            onChange={handleChange}
          >
            {roleOptions.map(role => (
              <option value={role.value}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button disabled={disabled}>Sign In</button>

        <center>
          <StyledError>{error}</StyledError>
        </center>
      </form>
    </StyledLoginContainer>
  );
}

function mapStateToProps(state) {
  return {
    activeAdmin: state.activeAdmin,
  };
}

export default connect(mapStateToProps)(Login);
//export default AdminLogin;

const StyledLoginContainer = styled.div`
  // border: solid 1px red;
  padding: 7.5% 0% 7.5% 0%;
  width: 30%;
  text-align: center;
  box-shadow: 0px 0px 10px lightgray;
  border-radius: 5px;

  input, select {
    box-sizing: border-box;
    padding: 2%;
    width: 65%;
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
    border: solid 1px lightgray;
    color: lightgray;
    cursor: not-allowed;
}

button:hover:enabled {
    background-color: #0096DB;
    cursor: pointer;
    color: white;
}
`;

const StyledError = styled.div`
  color: red;
  margin-top: 6%;
  width: 70%;
`;