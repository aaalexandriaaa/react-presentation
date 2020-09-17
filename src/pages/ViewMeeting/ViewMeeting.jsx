import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ViewMeeting extends Component {
    state = { schedule: this.props.location.state.schedule }
    render() {
        const schedule = this.state
        return (
            <>
                <h3>{this.state.schedule.meetingName}</h3>
                <p>Agenda: {this.state.schedule.agendaBody}</p>
                <p>Date: {this.state.schedule.date}</p>
                <p>Start Time: {this.state.schedule.startTime}</p>
                <p>End Time: {this.state.schedule.endTime}</p>
                <Link
                    to={{
                        pathname: '/editmeeting',
                        state: { schedule }
                    }}
                >
                    Edit Meeting
                </Link>
            </>
        );
    }
}

export default ViewMeeting;