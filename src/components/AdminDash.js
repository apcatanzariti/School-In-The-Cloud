import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTask } from './../actions/action';

function AdminDash (props) {
    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const [error, setError] = useState('');

    function handleChange (e) {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit (e) {
        e.preventDefault();

        if (task.title === '' || task.description === '') {
            setError('Title and Description must be filled out');
        } else {
            props.addTask(task);

            setTask({
                title: '',
                description: ''
            });
        }
    };

    // function submitNewTask(e) {
    //     e.preventDefault();

    //     if (newTask.title === '' || newTask.description === '') {
    //         setError('All fields must be filled out')
    //     } else {
    //         axios
    //         .post('http://localhost:5000/api/tasks', newTask)
    //         .then(res => {
    //           props.setTaskList(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //         setIsAdding: false;
    //     }
    // };

    return(
        <StyledDashContainer>
            <StyledLeftSide>
                <h1>Welcome {props.activeAdmin}!</h1>
                <h3>Here is a list of your current tasks:</h3>
                {
                    props.taskList.length === 0 ? <div>Currently no tasks :(</div> :

                    props.taskList.map(item => {
                        return (
                            <>
                                <div><b>{item.title}</b></div>
                                <div>{item.description}</div><br />
                            </>
                        );
                    })
                }
            </StyledLeftSide>

            <StyledRightSide>
                <h1>Add a new task here</h1>
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

                    <button>Add Task</button>
                    <StyledError>{error}</StyledError>
                </form>
            </StyledRightSide>
        </StyledDashContainer>
    );
};

function mapStateToProps (state) {
    return {
        activeAdmin: state.activeAdmin,
        taskList: state.admin.taskList        
    };
};

export default connect(mapStateToProps, { addTask })(AdminDash);

const StyledDashContainer = styled.div`
    // border: solid 1px red;
    margin-top: 4%;
    display: flex;
`;

const StyledLeftSide = styled.div`
    // border: solid 1px blue;
    padding: 3%;
    width: 47%;
    box-shadow: 0px 5px 8px lightgray;
`;

const StyledRightSide = styled.div`
    // border: solid 1px green;
    padding: 3%;
    width: 47%;

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