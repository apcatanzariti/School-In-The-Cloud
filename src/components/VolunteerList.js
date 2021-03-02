import React from 'react';
import styled from 'styled-components';

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



function VolunteerListItem(props) {

    const { firstName, lastName } = props.volunteer;

    return (
        <StyledVolunteerListItemDiv>
            <p className='name'>{`${firstName} ${lastName}`}</p>
        </StyledVolunteerListItemDiv>
    )
}



const StyledVolunteerListDiv = styled.div`
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
`;

const StyledVolunteerListItemDiv = styled.div`

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
    }
`;