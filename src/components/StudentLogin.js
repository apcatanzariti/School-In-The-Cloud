import React from 'react';
import styled from 'styled-components';

function StudentLogin () {
    return(
        <StyledStudentContainer>
            <h3>Student Login Form</h3>

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

                <button>Student Sign In</button>

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