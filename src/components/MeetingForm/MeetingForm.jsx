import React, { Component } from 'react'

class MeetingForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            date: '',
            startTime: '',
            endTime: '',
            peanutGallery: [''],
            meetingName: '',
            agendaBody: ''
        },
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddMeeting(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <div className="">
                    <form className="form-group" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor="name">Meeting Name</label>
                                <input name="meetingName" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">Date (mm/dd)</label>
                                <input name="date" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">Start Time</label>
                                <input name="startTime" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">End Time</label>
                                <input name="endTime" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">Agenda</label>
                                <input name="agendaBody" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">Room Name</label>
                                <input name="" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-info"
                            type="submit"
                            disabled={this.state.invalidForm}
                        >
                            Create Room
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

export default MeetingForm;