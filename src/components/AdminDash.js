import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TaskList from "./TaskList/index";
import Modal from "./Modal";
import EditTask from "./EditTask";
import taskSchema from "./validation/addTaskSchema.js"

import { addTask, fetchTasks, fetchVolunteers } from "./../actions/index";
import { axiosWithAuth } from "../utils/axiosWithAuth";



function AdminDash(props) {

  const { tasks, fetchTasks, addTask, volunteers, fetchVolunteers } = props;

  const [task, setTask] = useState({});

  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);

  // For EditTask
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  useEffect(() => {
    fetchTasks && fetchTasks();
    fetchVolunteers && fetchVolunteers();
  }, [ fetchTasks, fetchVolunteers ]);

  function handleAddTask(task) {

    const axiosTask = {
      ...task,
      admin_id: JSON.parse(localStorage.getItem('user'))?.id
    };

    console.log(axiosTask);

    axiosWithAuth()
      .post('/api/admin/tasks', axiosTask)
      .then(res => {
        console.log(res);
        setTask({});
        fetchTasks();
      })
      .catch(err => console.error(err));
  }
    
  function handleDelete(id) {
    axiosWithAuth()
      .delete(`/api/volunteers/tasks/${id}`)
      .then(res => {
        console.log(res);
        fetchTasks();
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Saves changes to the task being edited.
  function handleEditTask(editedTask) {

    setEditModalOpen(false);
    const id = editedTask.id;

    axiosWithAuth()
      .put(`/api/admin/${id}/tasks`, editedTask)
      .then(res => {
        console.log(res);
        fetchTasks();
      })
      .catch(err => {
        console.error(err);
      })
  }

  // Sets the task being edited and opens the modal to edit it.
  function openEditTask(task) {
    setTaskBeingEdited(task);
    setEditModalOpen(true);
  }

  useEffect(() => {
    taskSchema.isValid(task).then(valid => setDisabled(!valid))
    taskSchema.validate(task)
      .then(()=>{
        setError('');
      })
      .catch((err)=>{
        setError(err.errors[0])
      })
  }, [task])

    return(
        <StyledDashContainer>

            <StyledLeftSide>
                <h3>Here is a list of your current tasks:</h3>
                <TaskList tasks={tasks} handleDelete={handleDelete} handleEdit={openEditTask}/>
            </StyledLeftSide>

            <StyledRightSide>
                <h1>Add a new task here</h1>
                <EditTask
                  originalTask={task}
                  onSubmit={handleAddTask}
                  volunteers={volunteers}
                  buttonText={'Add Task'}
                />
            </StyledRightSide>

            <Modal open={editModalOpen} setOpen={setEditModalOpen}>
              <StyledEditTextDiv>
                <h2>Edit a Task</h2>
                <EditTask
                  originalTask={taskBeingEdited}
                  volunteers={volunteers}
                  onSubmit={handleEditTask}
                  buttonText={'Save Changes'}
                />
              </StyledEditTextDiv>
            </Modal>

        </StyledDashContainer>
    );
};

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
    volunteers: state.volunteers
  };
};

export default connect(mapStateToProps, { 
  addTask,
  fetchTasks,
  fetchVolunteers
})(AdminDash);



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

const StyledEditTextDiv = styled.div`
  width: 400px;
  padding: 0 20px;
`;

const StyledError = styled.div`
  color: red;
  margin-top: 6%;
  width: 70%;
`;