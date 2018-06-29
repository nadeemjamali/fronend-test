import {createStore, comibineReducers, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({

        }),
        compose(applyMiddleware(thunk))
    );

    return store;
}

