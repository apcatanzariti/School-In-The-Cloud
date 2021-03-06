
import { connect } from 'react-redux';
import { fetchVolunteers } from './../actions/index';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FuzzySearch from 'fuzzy-search';
import { availabilityDetails } from '../utils/volunteerApi';

import VolunteerList from './VolunteerList';



function StudentDash ({ volunteers, fetchVolunteers }) {

  const [ filteredVolunteers, setFilteredVolunteers ] = useState(volunteers);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ fuzzySearcher, setFuzzySearcher ] = useState(null);

  useEffect(() => {
    fetchVolunteers(); 
  }, [ fetchVolunteers ]);

  useEffect(() => {

    const searchableVolunteers = volunteers.map(volunteer => (
      { ...volunteer, availabilityString: availabilityDetails[volunteer.availability]?.name }
    ));

    setFuzzySearcher(
      new FuzzySearch( searchableVolunteers, ['username', 'country', 'availabilityString'] )
    );
  }, [ volunteers ]);

  useEffect(() => {
    fuzzySearcher && setFilteredVolunteers( fuzzySearcher.search(searchTerm) );
  }, [ fuzzySearcher, searchTerm ]);


  return(
    <StyledStudentDashDiv>
      <h1>Student Dashboard</h1>
      <p>Our volunteers are here to help! You can search them by name, by country, or by availability.</p>
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

export default connect(mapStateToProps, { fetchVolunteers })(StudentDash);



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
