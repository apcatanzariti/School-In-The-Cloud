import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TaskList from "./TaskList/index";
import Modal from "./Modal";
import EditTask from "./EditTask";
import taskSchema from "./validation/addTaskSchema.js"

import { addTask, fetchTasks } from "./../actions/index";



function AdminDash(props) {

  const { tasks, fetchTasks } = props;

  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  // For EditTask
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  useEffect(() => {
    fetchTasks && fetchTasks();
  }, [ fetchTasks ]);

  function handleChange(e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    setTask((state)=>{
      taskSchema.isValid(state).then(valid => setDisabled(!valid))
      taskSchema.validate(state)
      .then(()=>{
          setError('');
      })
      .catch((err)=>{
          setError(err.errors[0])
      })
      return state
  })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(task);
    setTask({
    title: "",
    description: "",
    });
  }
    
  function handleDelete(id) {
    // this will eventually do some actual deleting
    console.log(`the task with the id of: ${id} was deleted!`);
  }

  // Sets the task being edited and opens the modal to edit it.
  function handleEdit(task) {
    setTaskBeingEdited(task);
    setEditModalOpen(true);
  }

  // Saves changes to the task being edited. (Doesn't actually do anything yet)
  function saveTask(savedTask) {
    const id = savedTask.id;
    console.log(`saving changes to task with id: ${id}`, savedTask);
    setEditModalOpen(false);
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
                <h3>Here is a list of your current tasks:</h3>

                <TaskList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
                
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

                    <button disabled={disabled}>Add Task</button>
                    <StyledError>{error}</StyledError>
                </form>
            </StyledRightSide>
            <Modal open={editModalOpen} setOpen={setEditModalOpen}>
                <EditTask task={taskBeingEdited} saveTask={saveTask} />
            </Modal>
        </StyledDashContainer>
    );
};

function mapStateToProps (state) {
    return {
        tasks: state.tasks  
    };
};

export default connect(mapStateToProps, { 
  addTask,
  fetchTasks
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

const StyledError = styled.div`
  color: red;
  margin-top: 6%;
  width: 70%;
`;