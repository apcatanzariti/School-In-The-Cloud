import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer () {
    return(
        <StyledFooterContainer>
            <Link to='/'><span>Home</span></Link>
            <Link to='/admin-dash'><span>Admin Dashboard</span></Link>
            <Link to='/student-dash'><span>Student Dashboard</span></Link>
            <Link to='/volunteer-dash'><span>Volunteer Dashboard</span></Link>
            <Link to='/'><span>Logout</span></Link>

            <p>Copyright © 2021 School in the Cloud</p>
        </StyledFooterContainer>
    );
};

export default Footer;

const StyledFooterContainer = styled.div`
    // border: solid 1px red;
    border-top: solid 1px #0096DB;
    margin-top: 4%;
    text-align: center;
    padding: 2% 0% 2% 0%;
    font-size: .8em;

    a {
        margin: 0% 2% 0% 2%;
        color: #0096DB;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    p {
        color: gray;
        margin-top: 2%;
    }
`;