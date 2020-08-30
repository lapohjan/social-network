import React from 'react';
import { NavLink } from 'react-router-dom';

const NonRegisteredUsers = () => {
    return (
       <ul className="right">
           <li><NavLink to='/register'>Register</NavLink></li>
           <li><NavLink to='/login'>Login</NavLink></li> 
       </ul>
    )
}


export default NonRegisteredUsers;