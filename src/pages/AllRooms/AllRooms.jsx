import React, { Component } from 'react'
import RoomCard from "../../components/RoomCard/RoomCard"

class AllRooms extends Component {
  state = {}
  render() {
    return (
      <>
        <h1>ALL ROOMS HERE GET YER ROOMS</h1>
        <div className="">
          {this.props.rooms.map(room =>
            <RoomCard
              key={room._id}
              room={room}
            // handleDeleteMovie={props.handleDeleteMovie}
            // user={props.user}
            />
          )}
        </div>
      </>
    );
  }
}

export default AllRooms;