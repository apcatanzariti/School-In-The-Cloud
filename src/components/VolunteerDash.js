import React, { useState } from 'react';
import styled from 'styled-components';

import TaskList from './TaskList';

const dummyTasks = [
    { description: 'Buy pizza and chips for party', creator: 'Me' },
    { description: 'Update student info', creator: 'Anthony' },
    { description: 'Help out student with math homework', creator: 'Pat' },
    { description: 'Fry an egg', creator: 'Jon' },
]

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