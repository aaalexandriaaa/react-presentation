import React, { Component } from 'react'

class RoomForm extends Component {
  state = {
    invalidForm: true,
      formData: {
        name: '',
        occupancy: 0
      },
  }

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddRoom(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
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
                            <label htmlFor="name">Room Name</label>
                            <input name="name" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div>
                            <div>
                            <label htmlFor="occupancy">Occupancy</label>
                            <input name="occupancy" id="occupancy" type="text" value={this.state.formData.occupancy} onChange={this.handleChange} required/>
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
 
export default RoomForm;