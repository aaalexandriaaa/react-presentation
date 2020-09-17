import React from 'react';

function RoomCard({ room }) {
  return (
    <>
      <div className="roomCard">
        <h1>{room.name}</h1>
        <h1>{room.occupancy}</h1>
        {/* <span>{room.schedule}</span> */}
      </div>
    </>
  )
}

export default RoomCard;