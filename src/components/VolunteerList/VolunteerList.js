import React from 'react';
import styled from 'styled-components';

import VolunteerListItem from './VolunteerListItem';



function VolunteerList(props) {

    const { volunteers } = props;

    if (!volunteers) {
        return <p>Loading volunteers...</p>
    }

    if (volunteers.length === 0) {
        return <p>No volunteers found.</p>
    }


    return (
        <StyledVolunteerListDiv>
            {volunteers.map(volunteer => (
                <VolunteerListItem volunteer={volunteer} key={volunteer.id} />
            ))}
        </StyledVolunteerListDiv>
    )
}

export default VolunteerList;



const StyledVolunteerListDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
`;