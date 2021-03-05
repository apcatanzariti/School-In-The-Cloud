import { connect } from 'react-redux';
import { fetchVolunteers } from './../actions/index';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FuzzySearch from 'fuzzy-search';

import VolunteerList from './VolunteerList';

function StudentDash ({ volunteers, fetchVolunteers }) {
    // const [ volunteers, setVolunteers ] = useState([]);
    const [ filteredVolunteers, setFilteredVolunteers ] = useState(volunteers);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ fuzzySearcher, setFuzzySearcher ] = useState(null);

    useEffect(() => {
       fetchVolunteers(); 
    }, [ fetchVolunteers ]);

    useEffect(() => {
        setFuzzySearcher(
            new FuzzySearch( volunteers, ['username'] )
        );
    }, [ volunteers ]);

    useEffect(() => {
        fuzzySearcher && setFilteredVolunteers( fuzzySearcher.search(searchTerm) );
    }, [ fuzzySearcher, searchTerm ]);


    return(
        <StyledStudentDashDiv>
            <h1>Student Dashboard</h1>
            <p>Find a volunteer to help you learn! You can search by name, country, or time slot.</p>
            <input
                type='text'
                placeholder='Find a volunteer...'
                value={searchTerm || ''}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <h2>Volunteers</h2>
            <VolunteerList key={filteredVolunteers.id} volunteers={filteredVolunteers} />
        </StyledStudentDashDiv>
    );
};

const mapStateToProps = ((state) => {
    return {
        volunteers: state.volunteers
    };
});

export default connect(mapStateToProps, {fetchVolunteers})(StudentDash);



const StyledStudentDashDiv = styled.div`

    h1 {
        color: #5d5d5d
    }

    input {
        background-color: #f0f0f0;
        border: none;
        padding: 10px 15px;
        font-size: 1em;
        border-radius: 10px;
        width: 400px;
    }

    input::placeholder {
        color: gray;
    }

    input:focus {
        outline: red;
    }
`;
