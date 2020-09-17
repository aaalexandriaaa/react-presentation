import React, { Component } from 'react'
import RoomForm from '../../components/RoomForm/RoomForm'

class CreateRoom extends Component {
    state = {
        
    }

    render() {
        return (
            <>
                <h1>CREATE A ROOM</h1>
                <RoomForm 
                    handleAddRoom={this.props.handleAddRoom}
                />
            </>
        );
    }
}

export default CreateRoom;