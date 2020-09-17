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
import * as roomAPI from '../../services/room-api'

class App extends Component {
  state = {
    rooms: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddRoom = async newRoomData => {
    const newRoom = await roomAPI.create(newRoomData);
    this.setState(state => ({
      rooms: [...state.rooms, newRoom]
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const rooms = await roomAPI.getAll();
    this.setState({ rooms })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact path="/"
          render={() => (
            <AllRooms
              rooms={this.state.rooms}
            />
          )}
        />
        <Route
          exact path="/createroom"
          render={() => (
            <CreateRoom
              handleAddRoom={this.handleAddRoom}
            />
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
