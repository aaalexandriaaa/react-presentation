import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import "./App.css";
import AllRooms from "../AllRooms/AllRooms"
import CreateMeeting from "../CreateMeeting/CreateMeeting"
import CreateRoom from "../CreateRoom/CreateRoom"

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact path="/"
          render={() => (
            <AllRooms />
          )}
        />
        <Route
          exact path="/createroom"
          render={() => (
            <CreateRoom />
          )}
        />
        <Route
          exact path="/createmeeting"
          render={() => (
            <CreateMeeting />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
      </>
    );
  }
}

export default App;
