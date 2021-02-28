import React from 'react';
import styled from 'styled-components';

function AdminLogin () {
    return(
        <StyledAdminContainer>
            <h3>Admin Login Form</h3>

            <form>

                <div>
                <input 
                name='username'
                type='text'
                placeholder='Username'/>
                </div>

                <div>
                <input 
                name='password'
                type='password'
                placeholder='Password'/>
                </div>

                <button>Admin Sign In</button>

            </form>
        </StyledAdminContainer>
    );
};

export default AdminLogin;

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
    }

    button {
        border: solid 1px #0096DB;
        color: #0096DB;
        background-color: white;
        padding: 2% 4% 2% 4%;
        transition: .3s;
        cursor: pointer;
    }

    button:hover {
        background-color: #0096DB;
        color: white;
    }
`;