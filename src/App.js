import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.css';

import configureStore from './config/store';

import Navigation from './components/navigation';

import Login from './views/login';
import Registeration from './views/registeration';
import Contacts from './views/contacts';

const store = configureStore();


//todo: replace contacts Route with Private Route

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="">
            <Navigation/>
            <Switch>
              <Route path="/" component={Login} exact={true} />
              <Route path="/registeration" component={Registeration} exact={true} />
              <Route path="/contacts" component={Contacts} exact={true} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
