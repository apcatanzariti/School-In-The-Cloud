import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Footer ({ activeLink, setActiveLink }) {

    const history = useHistory();

    const logOut = () => {
        // console.log('You logged out 👍');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setActiveLink(!activeLink);
        history.push('/');
    };

    return(
        <StyledFooterContainer>
            <Link to='/'><span>Home</span></Link>

            <Link to={
                JSON.parse(localStorage.getItem('role')) === null ? '/' :
                `/${JSON.parse(localStorage.getItem('role'))}-dash`
                }>Dashboard
            </Link>

            <Link to='/'><span onClick={e => {e.stopPropagation(); logOut();}}>Logout</span></Link>

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