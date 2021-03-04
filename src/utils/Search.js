import { useRef, useState } from "react";
import styled from 'styled-components';

const SearchBar = ({ teamList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const inputElement = useRef(""); //useRef() is similar to the e.target.value

  const getSearchTerm = (e) => {
    setSearchTerm(inputElement.current.value); //set the search term to be the elemnt inputed
    //  setSearchTerm(e.target.value);
    handleSearch(inputElement.current.value); //pass it to the handleSearch function
  };

  const handleSearch = (searchTerm) => {
    // take searchTerm as a argument to filter out your results
    //for some reason the result is always one key off for need to find out how to fix that I forgot
    // console.log("handlesearch", searchTerm);

    if (searchTerm !== "") {
      //create a check to only if our search bar isn't an empty string

      const newTeam = teamList.filter((team) => {
        //take the results of what is to be returned as a new array of objects that is only truthy

        return Object.values(team) // since we are dealing with objects it only make sense to use object.values to give us the values that we want to filter out
          .join("") //Since we got an Arr we used the .join to give us just one one string
          .toLowerCase() //take the input no matter what case it is and input it as a lowercase
          .includes(searchTerm.toLowerCase()); //only show what includes the term that we passed in lower case
      });
      setResults(newTeam);
    } else {
      setResults(teamList);
    }
  };

  return (
    <StyledSearchContainer>
      <div>
        <label htmlFor="searchbar">Search: </label>
        <input
          ref={inputElement} //bind the input ref to the input element for the the search bar
          placeholder="Team Member....                       🔍"
          id="searchbar"
          value={searchTerm}
          onChange={getSearchTerm}
          name="searchbar"
        />
      </div>
      <div>
        {searchTerm.length < 1 ? ( //if search bar is empty then render all the names
          teamList.map((team) => {
            return (
              <div className={team.id}>
                <h4>{team.name}</h4>
                <p>
                  Age:{team.age}
                  <br />
                  Location: {team.location}
                </p>
              </div>
            );
          })
        ) : results.length < 1 ? (
          <h5>No Result Available</h5> //if the result is not found then the user will see this message
        ) : (
          results.map((team) => {
            //if we start typing into the search bar only render the info that includes the keywords entered into the searchbar
            return (
              <div className={team.id}>
                <h4>{team.name}</h4>
                <p>
                  Age:{team.age}
                  <br />
                  Location: {team.location}
                </p>
              </div>
            );
          })
        )}
      </div>
    </StyledSearchContainer>
  );
};
export default SearchBar;

const StyledSearchContainer = styled.div`
  // border: solid 1px red;

  input {
    padding: .5%;
    font-size: .9em;
    width: 22%;
    margin-left: .2%;
    outline: none;
  }
`;
