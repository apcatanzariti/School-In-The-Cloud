import React, { useState } from 'react';
import styled from 'styled-components';

import TaskList from './TaskList';

const dummyTasks = [
    { description: 'Buy pizza and chips for party', creator: 'Me', id: '2349' },
    { description: 'Update student info', creator: 'Anthony', id: '6012' },
    { description: 'Help out student with math homework', creator: 'Pat', id: '1425' },
    { description: 'Fry an egg', creator: 'Jon', id: '8040' },
];

function VolunteerDash () {

    const [ tasks ] = useState(dummyTasks);

    return(
        <StyledVolunteerDashDiv>
            <h1>Volunteer Dashboard</h1>
            <h2>Tasks</h2>
            <TaskList tasks={tasks} />
        </StyledVolunteerDashDiv>
    );
};

export default VolunteerDash;



const StyledVolunteerDashDiv = styled.div`
    h1 {
        color: #5d5d5d
    }
`;