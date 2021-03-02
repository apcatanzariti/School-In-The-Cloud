
import React, { useState } from 'react';
import styled from 'styled-components';

import VolunteerList from './VolunteerList';

const dummyVolunteers = [
    { firstName: 'April', lastName: 'Wells', id: '1123' },
    { firstName: 'Stanley', lastName: 'Callison', id: '6573' },
    { firstName: 'Kassandra', lastName: 'Simmons', id: '8643' },
    { firstName: 'Wallace', lastName: 'Colyer', id: '3568' },
    { firstName: 'Glenn', lastName: 'Wylie', id: '9102' },
];

function StudentDash () {

    const [ volunteers, setVolunteers ] = useState(dummyVolunteers);

    return(
        <StyledStudentDashDiv>
            <h1>Student Dashboard</h1>
            <h2>Volunteers</h2>
            <VolunteerList volunteers={volunteers} />
        </StyledStudentDashDiv>
    );
};

export default StudentDash;



const StyledStudentDashDiv = styled.div`
    h1 {
        color: #5d5d5d
    }
`;