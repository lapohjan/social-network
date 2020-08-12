import React from 'react'

class LogIn extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            email: null,
            password: null
        };

        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmission}>
                    <div className="input-field">
                        <input id="email" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Log In</button>
                </form>
            </div>
        )
    }
} 

export default LogIn;