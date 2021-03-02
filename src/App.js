import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import AdminDash from "./components/AdminDash";
import StudentDash from "./components/StudentDash";
import VolunteerDash from "./components/VolunteerDash";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import VolunteerLogin from "./components/VolunteerLogin";
import Footer from "./components/Footer";

// for searchbar
import { useState, useEffect } from "react";
import SearchBar from "./utils/Search";

const data = [
  {
    id: 0,
    name: "patrick",
    age: 24,
    location: "Bradenton, FL",
  },
  {
    id: 1,
    name: "Karen",
    age: 24,
    location: "Hudson, NY",
  },
  {
    id: 2,
    name: "Jessica",
    age: 42,
    location: "Boise, ID",
  },
  {
    id: 3,
    name: "Frank",
    age: 35,
    location: "St.Louis, MO",
  },
  {
    id: 4,
    name: "Xavier",
    age: 55,
    location: "Los Vegas",
  },
];

function App() {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    // setTeamList(data);
  }, []);

  return (
    <StyledAppContainer>
      <NavBar />
      <SearchBar teamList={teamList} />
      <Switch>
        <Route path="/admin-dash">
          <AdminDash />
        </Route>

        <Route path="/student-dash">
          <StudentDash />
        </Route>

        <Route path="/volunteer-dash">
          <VolunteerDash />
        </Route>

        <Route path="/">
          <StyledIntroDiv>
            <div>
              <h2>Who We Are:</h2>
              <p>
                <span>School in the Cloud</span> is a platform that trains
                senior volunteers to teach students in a group or individual
                setting. This helps kids in communities with high student to
                teacher ratios. It also provides retired volunteers a sense of
                purpose and meaning in their day to day life when they find
                themselves with more free time. The platform also connects
                volunteers with the students.
              </p>

              {/* {searchTerm.length < 1 ? ( //if search bar is empty then render all the names
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
              )} */}
            </div>
            <img
              src="https://heavy.com/wp-content/uploads/2020/08/Laptops-for-Middle-School-Students.jpg?quality=65&strip=all"
              alt="student studying"
            />
          </StyledIntroDiv>

          <StyledLoginContainer>
            <AdminLogin />
            <StudentLogin />
            <VolunteerLogin />
          </StyledLoginContainer>
        </Route>
      </Switch>

      <Footer />
    </StyledAppContainer>
  );
}

export default App;

const StyledAppContainer = styled.div`
  // border: solid 1px red;
  font-family: sans-serif;
  width: 1000px;
  margin: 0 auto;
`;

const StyledLoginContainer = styled.div`
  // border: solid 1px blue;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3%;

  h3 {
    text-decoration: underline;
    margin-bottom: 8%;
    margin-top: 0px;
    color: gray;
  }
`;

const StyledIntroDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 3%;
  line-height: 130%;
  font-size: 1.2em;
  color: #5d5d5d;

  span {
    color: #0096db;
  }

  div {
    padding: 0% 7% 0% 7%;
  }

  img {
    width: 60%;
  }
`;
