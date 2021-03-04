import React from 'react';
import styled from 'styled-components';



function VolunteerListItem(props) {

    const { volunteer } = props;

    return (
        <StyledVolunteerListItemDiv>
            <div className='name-row'>
                <p className='name'>{volunteer.username}</p>
                {volunteer.country &&
                  <p className='country'>{volunteer.country}</p>
                }
            </div>
            {/* <p className='timeSlots'>Available: {timeSlots}</p> */}
        </StyledVolunteerListItemDiv>
    );
}

export default VolunteerListItem;



const StyledVolunteerListItemDiv = styled.div`

    padding: 10px 15px;
    border-bottom: 1px solid #d5d5d5;

    &:last-child {
        border-bottom: none;
    }

    p {
        margin: 5px 0;
    }

    .name-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .name {
        font-size: 1.2em;
        font-weight: bold;
    }

    .country {
        color: gray;
    }
`;
