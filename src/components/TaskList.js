import React from 'react';
import styled from 'styled-components';

function TaskList(props) {

    const { tasks } = props;

    if (!tasks) {
        return <p>Loading tasks...</p>
    }

    if (tasks.length === 0) {
        return <p>No tasks found.</p>
    }


    return (
        <StyledTaskListDiv>
            {tasks.map(task => (
                <TaskListItem task={task} />
            ))}
        </StyledTaskListDiv>
    )
}

export default TaskList;



function TaskListItem(props) {

    const { description, creator, isDone } = props.task;

    return (
        <StyledTaskListItemDiv>
            <p className='description'>{description}</p>
            <p className='creator'>{creator}</p>
        </StyledTaskListItemDiv>
    )
}



const StyledTaskListDiv = styled.div`
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
`;

const StyledTaskListItemDiv = styled.div`

    padding: 10px 15px;
    border-bottom: 1px solid #d5d5d5;

    &:last-child {
        border-bottom: none;
    }

    p {
        margin: 5px 0;
    }

    .description {
        font-size: 1.25em;
    }

    .creator {
        color: gray;
    }
`;