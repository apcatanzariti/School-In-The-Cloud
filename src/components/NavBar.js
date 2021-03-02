import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

function NavBar () {

    const history = useHistory();

    const logOut = () => {
        console.log('You logged out 👍');
        // localStorage.removeItem('token');
        // history.push('/');
    };
  
  return (
    <StyledNavContainer>
      <Link to="/">
        <img
          src="https://cloudevents.io/img/logos/integrations/triggermesh.png"
          alt="cloud logo"
        />
      </Link>

      <StyledLinksDiv>
        <Link to="/">
          <StyledLink>Home</StyledLink>
        </Link>

        <Link to="/admin-dash">
          <StyledLink>Admin Dashboard</StyledLink>
        </Link>

        <Link to="/student-dash">
          <StyledLink>Student Dashboard</StyledLink>
        </Link>

        <Link to="/volunteer-dash">
          <StyledLink>Volunteer Dashboard</StyledLink>
        </Link>

          <StyledLogOut onClick={e => {e.stopPropagation(); logOut();}}>Logout</StyledLogOut>
      </StyledLinksDiv>
    </StyledNavContainer>
  );
}

export default NavBar;

const StyledNavContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: solid 1px #0096db;

  img {
    // border: solid 1px blue;
    height: 130px;
  }
`;

const StyledLinksDiv = styled.div`
  // border: solid 1px yellow;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;
  font-size: 1.2em;
  margin-right: 4.5%;

  a {
    text-decoration: none;
    color: #0096db;
    transition: 0.3s;
  }

  a:hover {
    color: white;
    background-color: #0096db;
  }
`;

const StyledLink = styled.div`
  border-radius: 5px;
  padding: 7px 12px 7px 12px;
`;

const StyledLogOut = styled.div`
    color: #0096DB;
    padding: 7px 12px 7px 12px;
    cursor: pointer;
    transition: .3s;

    :hover {
        color: white;
        background-color: #0096DB;
    }
`;
