import React from 'react'

const Register = () => (
    <div className="container">
        <form>
            <div className="input-field">
                <input id="firstname" type="text" className="validate"/>
                <label for="firstname">First Name:</label>
            </div>
            <div className="input-field">
                <input id="lastname" type="text" className="validate"/>
                <label for="lastname">Last Name:</label>
            </div>
            <div className="input-field">
                <input id="email" type="text" className="validate"/>
                <label for="email">Email:</label>
            </div>
            <div className="input-field">
                <input id="password" type="password" className="validate"/>
                <label for="password">Password</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Register</button>
        </form>
    </div>
)

export default Register;