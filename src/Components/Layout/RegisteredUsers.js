import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const RegisteredUsers = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Post</NavLink></li>
        <li><a onClick={props.logOut}>Log Out</a></li>
        <li><NavLink to='/' >
        {/* className="btn btn-floating blue lighten-1"> */}
          {/* {props.profile.initials} */}
          </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(RegisteredUsers)