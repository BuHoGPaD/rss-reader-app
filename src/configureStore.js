import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import history from './history';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

const middleware = routerMiddleware(history);
export default function configureStore(initialState) {
    const store = createStore(rootReducer, applyMiddleware(middleware, thunk, logger));

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}