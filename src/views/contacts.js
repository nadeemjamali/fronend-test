import React from 'react';

import { connect } from 'react-redux';

class Contacts extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            contactsList: []
        };
    }

    render(){
        return (<div>Contacts View</div>)
    }
}


const mapStateToProps = (state) => {
    return {
        contactsList: state.contactsList
    };
};

export default connect(mapStateToProps)(Contacts);