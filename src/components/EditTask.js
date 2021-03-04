
import React, { useState } from 'react';
import styled from 'styled-components';

function EditTask(props) {

    const { task: originalTask, saveTask } = props;

    const [ task, setTask ] = useState({ ...originalTask });
    const [error, setError] = useState('');

    function handleChange(e) {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        saveTask(task);
    }

    return (
        <EditTaskDiv>

            <h2>Edit a Task</h2>

            <form onSubmit={handleSubmit}>
                
                <div>
                    <input
                    name='title'
                    type='text'
                    value={task.title}
                    placeholder='Title'
                    onChange={handleChange}/>
                </div>

                <div>
                    <textarea
                    name='description'
                    value={task.description}
                    placeholder='Description...'
                    rows='5'
                    onChange={handleChange}/>
                </div>

                <button>Save Changes</button>
                <StyledError>{error}</StyledError>
            </form>
            
        </EditTaskDiv>
    )
}

export default EditTask;



const EditTaskDiv = styled.div`

    width: 400px;
    text-align: center;

    input {
        margin-bottom: 5%;
        padding: 1.5%;
        font-family: sans-serif;
        font-size: 1em;
        width: 80%;
    }

    textarea {
        margin-bottom: 5%;
        padding: 1.5%;
        font-family: sans-serif;
        font-size: 1em;
        width: 80%;
    }

    button {
        border: solid 1px #0096DB;
        color: #0096DB;
        background-color: white;
        padding: 2% 4% 2% 4%;
        transition: .3s;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        background-color: #0096DB;
        color: white;
    }
`;

const StyledError = styled.div`
    color: red;
    margin-top: 6%;
    width: 70%;
`;
