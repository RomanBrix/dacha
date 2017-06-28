import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import  App from './component/services/fishing';
import css from './css/scss/services/main.scss';

const init = document.getElementById('mountNode');
const store = createStore(reducers);

render(
    <Provider store={store}>
        <App/>
    </Provider>, init);
