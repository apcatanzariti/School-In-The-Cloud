
import React from "react";
import styled from "styled-components";

import TaskListItem from './TaskListItem';

function TaskList(props) {

  const { tasks, handleDelete, handleEdit } = props;

  if (!tasks) {
    return <p>Loading tasks...</p>;
  }

  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <StyledTaskListDiv>
      {tasks.map((task) => (
        <TaskListItem task={task} key={task.id} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </StyledTaskListDiv>
  );
}

export default TaskList;

const StyledTaskListDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
