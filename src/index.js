import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './components/App';

const store = configureStore();
const rootEl = document.getElementById('root')

const Component = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

let render = () => {
    debugger;
    ReactDOM.render(
        <Component />,
        rootEl
    )
}

render();
if (module.hot) {
    module.hot.accept(Component => {
      render();
    })
}
