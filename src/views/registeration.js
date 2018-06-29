import React from 'react';

import { connect } from 'react-redux';

class Registeration extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            loginId: '',
            password: '',
            firstName: '',
            lastName: ''
        };
    }
    render(){
        return (<div>Registeration View</div>)
    }
}

const mapStateToProps = (state) => {
    return {
      registeration: state.registeration
    };
};

export default connect(mapStateToProps)(Registeration);