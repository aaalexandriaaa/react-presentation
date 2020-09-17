import React from 'react';

function RoomCard({ room }) {
  return (
    <>
      <div className="roomCard">

        <h3>Room Name: {room.name}</h3>

        <p>Room Occupancy: {room.occupancy}</p>

        <p>Room Schedule: </p>
        <ul>
          {room.schedule.map((schedule) =>

            <li key={schedule._id}>{schedule.meetingName}</li>

          )}
        </ul>
      </div>
    </>
  )
}

export default RoomCard;