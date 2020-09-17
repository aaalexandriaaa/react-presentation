import React from 'react';

function RoomCard({ room }) {
  return (
    <>
      <div className="roomCard">

        <h3>Room Name: {room.name}</h3>

        <p>Room Occupancy: {room.occupancy}</p>
        {/* <span>{room.schedule}</span> */}
      </div>
    </>
  )
}

export default RoomCard;