import React from 'react';

import { connect } from 'react-redux';

class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            loginId: '',
            password: '',
            rememberMe: false
        };

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    onLoginIdChange = (e) => {
        const loginId = e.target.value;
        this.setState(() => ({ loginId }));
    };

    onRememberMeChange = (e) => {
        const rememberMe = e.target.checked;
        this.setState(() => ({ rememberMe }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };


    handleLoginSubmit(e){
        e.preventDefault();
        
        let {loginId, password} = this.state;
        if(!loginId || !password){
            this.setState(() => ({ error: 'Please provide valid Login Id and Password to proceed...' }));
        }else{
            this.setState(() => ({ error: '' }));
        }

        this.props.getSession({loginId, password});        
    }

    render(){
        return (
            <form className="container" onSubmit={this.handleLoginSubmit}>
                <div className="form-group">
                    <label htmlFor="login-id" className="form-group__label">Login ID:</label>
                    <input type="text" name="loginId" id="loginId" className="form-group__input" value={this.state.loginId} onChange={this.onLoginIdChange}
                    placeholder="your login ID e.g john.park" autoFocus maxLength="250"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-group__label">Password:</label>
                    <input type="password" name="password" id="password" className="form-group__input" placeholder="Password" 
                    maxLength="250" value={this.state.password} onChange={this.onPasswordChange} />
                </div>

                <div>
                <label htmlFor="rememberMe" className="form-group__label">Remember Me:</label>
                    <input type="checkbox" name="rememberMe" id="rememberMe" className="form-group__input" checked={this.state.rememberMe} 
                    onChange={this.onLoginIdChange}/>
                </div>
                <div className="form-group text-center">
                    <button id="btn-submit" className="btn btn-primary" type="submit">Log In</button>
                </div>        
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
};

export default connect(mapStateToProps)(Login);