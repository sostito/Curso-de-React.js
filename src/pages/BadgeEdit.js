import React from 'react';

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    } 
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({ loading: false, form: data });
    } catch(error) {
      this.setState({ loading: false, error: error });
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    console.log('entra')
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
    } catch(error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {

    if (this.state.loading == true) {
      return <PageLoading />
    }
    
    if (this.state.error) {
      return <PageError error={this.state.error}/>
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img 
              className="BadgeEdit_hero-image img-fluid" 
              src={header} 
              alt="Logo">              
          </img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName= {this.state.form.firstName || 'FIRST_NAME'} 
                lastName= {this.state.form.lastName || 'LAST_NAME'}
                twitter = {this.state.form.twitter || 'TWITTER'}
                jobTitle= {this.state.form.jobTitle || 'JOB_TITLE'}
                email= {this.state.form.email || 'EMAIL'}
                />
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm 
                otherEvent={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit;