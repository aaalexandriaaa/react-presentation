import React from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
    <>
      <div className="roomCard">

        <h3>Room Name: {room.name}</h3>

        <p>Room Occupancy: {room.occupancy}</p>

        <p>Room Schedule: </p>
        <ul>
          {room.schedule.map((schedule) =>

            <li key={schedule._id}>
              <Link
                to={{
                  pathname: '/viewmeeting',
                  state: { schedule }
                }}
              >
                {schedule.meetingName}
              </Link>
              : {schedule.startTime}-{schedule.endTime} <br />
              Agenda: {schedule.agendaBody}<br />


            </li>

          )}
        </ul>
      </div>
    </>
  )
}

export default RoomCard;