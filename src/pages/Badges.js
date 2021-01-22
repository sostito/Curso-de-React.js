import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api';

// Redux
import { connect } from 'react-redux';

export class Badges extends Component {

  constructor() {
    super()
  }
  
  componentDidMount() {    
    this.fetchData();
  }

  // Llena la data de Badges
  fetchData = async () => {
    try {
      const data = await api.badges.list();
      this.props.dispatch({
      type: 'BADGES',
      payload: {
        data,
        loading: false
      }
    })
    } catch(error) {
      this.props.dispatch({
      type: 'BADGES',
      payload: {
        loading: false,
        error: error
      }
    })
    }
  }
  
  render() {
    
    if (this.props.loading == true) {
      return <PageLoading />
    }
    
    if (this.props.error) {
      return <PageError error={this.props.error}/>
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf logo"></img>
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
        </div>

        <div className="Badge__list">
          <div className="Badges__container">
            <BadgesList badges={this.props.data}/>
          </div>
        </div>

      </React.Fragment>

    )
  }
}

function mapStateProps(state, props) {
  console.log(state)
  if (state.badges) {
    return {
      data: state.badges.data,
      error: state.badges.error,
      loading: state.badges.loading
    }
  }
  return {}
}

export default connect(mapStateProps)(Badges)
