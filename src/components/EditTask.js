
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import taskSchema from "./validation/addTaskSchema.js";

function EditTask(props) {

  const { originalTask, volunteers, onSubmit, buttonText } = props;

  const [ task, setTask ] = useState({});
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setTask(originalTask);
  }, [ originalTask ]);

  function handleChange(e) {
      setTask({
          ...task,
          [e.target.name]: e.target.value
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
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(task);
  }

  return (
    <EditTaskDiv>
      <form onSubmit={handleSubmit}>
          
        <div>
          <input
            name='task_name'
            type='text'
            value={task.task_name || ''}
            placeholder='Title'
            onChange={handleChange}/>
        </div>

        <div>
          <select
            name='volunteer_id'
            value={task.volunteer_id || ''}
            onChange={handleChange}
          >
            <option value=''> -- Assign to a volunteer --</option>
            {volunteers?.map(volunteer => (
              <option value={volunteer.volunteer_id} key={volunteer.volunteer_id}>{volunteer.username}</option>
            ))}
          </select>
        </div>

        <div>
          <textarea
            name='description'
            value={task.description || ''}
            placeholder='Description...'
            rows='5'
            onChange={handleChange}/>
        </div>

        <button disabled={disabled}>{buttonText || 'OK'}</button>
        <center><StyledError>{error}</StyledError></center>
      </form>
        
    </EditTaskDiv>
  )
}

export default EditTask;



const EditTaskDiv = styled.div`

  text-align: center;

  form div {
    input, textArea, select {
      box-sizing: border-box;
      margin-bottom: 5%;
      padding: 1.5%;
      font-family: sans-serif;
      font-size: 1em;
      width: 100%;
    }
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
