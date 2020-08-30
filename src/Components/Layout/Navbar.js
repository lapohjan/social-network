import React from 'react';
import { Link } from 'react-router-dom';
import RegisteredUsers from './RegisteredUsers';
import NonRegisteredUsers from './NonRegisteredUsers';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <RegisteredUsers profile={profile}/> : <NonRegisteredUsers />
    return (
        <nav className="nav-wrapper #5e35b1 deep-purple darken-1">
            <div className="container">
                <Link to='/' className="brand-logo">Social Network</Link>
               { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar);