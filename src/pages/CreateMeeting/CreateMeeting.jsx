import React, { Component } from 'react'
import MeetingForm from '../../components/MeetingForm/MeetingForm'

class CreateMeeting extends Component {
    state = {

    }

    render() {
        return (
            <>
                <h1>CREATE A MEETING</h1>
                <MeetingForm
                    handleAddMeeting={this.props.handleAddMeeting}
                />
            </>
        );
    }
}

export default CreateMeeting;