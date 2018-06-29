import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

const navigation = (props)=>(
    <nav>
        <div className="top-navigation">
            <ul>
                <li>
                    <NavLink className="nav-link" to="/" exact={true}>Login</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/registeration" exact={true}>Registeration</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/contacts" exact={true}>Contacts</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
};
  
export default connect(mapStateToProps)(navigation);

