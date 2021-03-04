
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from '../../utils/axiosWithAuth';



const TaskListItem = (props) => {

  const { task, handleDelete, handleEdit } = props;

  const [ adminName, setAdminName ] = useState(null);
  const [ volunteerName, setVolunteerName ] = useState(null);

  useEffect(() => {
    if (task && task.admin_id) {
      axiosWithAuth()
      .get(`api/student/volunteers/${task.id}`)
      .then(res => {
        setVolunteerName(res.data.username);
      });
    }
  }, [ task ]);

  const handleDeleteClick = () => {
    handleDelete && handleDelete(task.id);
  }

  const handleEditClick = () => {
    handleEdit && handleEdit(task);
  }

  return (
    <StyledTaskListItemDiv>
      <p className="name">{task.task_name}</p>
      <p className="description">{task.description}</p>
      {volunteerName &&
        <p className="assignee">Assigned to {volunteerName}</p>
      }
      {/* <p className="creator">Created by {task.admin_id}</p> */}
      <div className='button-row'>
        {handleDelete &&
          <button onClick={handleDeleteClick}>
              Delete
          </button>
        }
        {handleEdit &&
          <button onClick={handleEditClick}>
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