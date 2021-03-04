import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setActiveAdmin } from "./../actions/index";

function AdminLogin(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const history = useHistory();

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // the 'else' portion of this will be replaced by the axios call
    if (credentials.username === "" || credentials.password === "") {
      setError("Username and Password must be filled out");
    } else {
      setError("");
      // props.setActiveAdmin(credentials);
      // history.push("/admin-dash");
      
      axios
      .post('https://bw-backend-clouds.herokuapp.com/api/auth/login', credentials)
      .then(res => {
          //localStorage.setItem('token', JSON.stringify(res.data.password));
          //history.push('/admin-dash');
          console.log(res);
      })
      .catch(err => {
          setError(err.response.data.error);
      })
    }
  };

  return (
    <StyledLoginContainer>
      <h3>Sign In Here:</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <button>Sign In</button>
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

export default connect(mapStateToProps, { setActiveAdmin })(AdminLogin);
//export default AdminLogin;

const StyledLoginContainer = styled.div`
  // border: solid 1px red;
  padding: 7.5% 0% 7.5% 0%;
  width: 30%;
  text-align: center;
  box-shadow: 0px 0px 10px lightgray;
  border-radius: 5px;

  input {
    padding: 2%;
    width: 60%;
    margin-bottom: 6%;
    outline: none;
  }

  button {
    border: solid 1px #0096db;
    color: #0096db;
    background-color: white;
    padding: 2% 4% 2% 4%;
    transition: 0.3s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #0096db;
    color: white;
  }
`;

const StyledError = styled.div`
  color: red;
  margin-top: 6%;
  width: 70%;
`;
