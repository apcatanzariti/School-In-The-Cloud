import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import AdminDash from "./components/AdminDash";
import StudentDash from "./components/StudentDash";
import VolunteerDash from "./components/VolunteerDash";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [activeLink, setActiveLink] = useState(false);

  return (
    <StyledAppContainer>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Switch>
        <PrivateRoute path="/admin-dash" component={AdminDash} />

        <PrivateRoute path="/student-dash" component={StudentDash} />

        <PrivateRoute path="/volunteer-dash" component={VolunteerDash} />

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
            </div>
            <img
              src="https://heavy.com/wp-content/uploads/2020/08/Laptops-for-Middle-School-Students.jpg?quality=65&strip=all"
              alt="student studying"
            />
          </StyledIntroDiv>
          {localStorage.getItem("token") || localStorage.getItem("role") ? (
            ""
          ) : (
            <StyledLoginContainer>
              <Login activeLink={activeLink} setActiveLink={setActiveLink} />
              <SignUp />
            </StyledLoginContainer>
          )}
        </Route>
      </Switch>

      <Footer activeLink={activeLink} setActiveLink={setActiveLink}/>
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
