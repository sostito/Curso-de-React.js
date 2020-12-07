import React, { Component } from 'react'

export class BadgeForm extends Component {
  state = {};

  /*
  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
        }
      )
  }
  */

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              onChange={this.props.otherEvent} 
              className="form-control" 
              type="text" 
              name="firstName"
              value={this.props.formValues.firstName}
              >
            </input>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={this.props.otherEvent} 
              className="form-control" 
              type="text" 
              name="lastName"
              value={this.props.formValues.lastName}
              >
            </input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={this.props.otherEvent} 
              className="form-control" 
              type="email" 
              name="email"
              value={this.props.formValues.email}
              >
            </input>
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input 
              onChange={this.props.otherEvent} 
              className="form-control" 
              type="text" 
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              >
            </input>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={this.props.otherEvent} 
              className="form-control" 
              type="text" 
              name="twitter"
              value={this.props.formValues.twitter}
              >
            </input>
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
