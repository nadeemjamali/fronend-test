import React from 'react';

import { connect } from 'react-redux';

class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            loginId: '',
            password: ''
        };
    }

    render(){
        return (
            <form onSubmit={}>
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