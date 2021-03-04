
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getVolunteerById } from '../../utils/volunteerApi';



const TaskListItem = (props) => {

  const { task, handleDelete, handleEdit } = props;
  const [ volunteerName, setVolunteerName ] = useState(null);

  useEffect(() => {
    if (task && task.volunteer_id) {
      getVolunteerById(task.volunteer_id)
      .then(res => {
        setVolunteerName(res.data.username);
      });
    }
  }, [ task ]);

  return (
    <StyledTaskListItemDiv>
      <p className="name">{task.task_name}</p>
      <p className="description">{task.description}</p>
      {volunteerName &&
        <p className="assignee">Assigned to {volunteerName}</p>
      }
      <div className='button-row'>
        {handleDelete &&
          <button onClick={() => handleDelete(task.id)}>
              Delete
          </button>
        }
        {handleEdit &&
          <button onClick={() => handleEdit(task)}>
              Edit
          </button>
        }
      </div>
    </StyledTaskListItemDiv>
  );
}

export default TaskListItem;



const StyledTaskListItemDiv = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #d5d5d5;

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 5px 0;
  }

  .name {
    font-size: 1.2em;
    font-weight: bold;
  }

  .creator {
    color: gray;
    font-style: italic;
  }

  .button-row {
    padding-top: 5px;

    button {
      padding: 5px 10px;
      border-radius: 3px;
    }

    button:not(:first-child) {
      margin-left: 10px;
    }
  }
`;