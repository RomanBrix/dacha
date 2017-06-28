import React from 'react';
import { render } from 'react-dom';
import  App from './component/main'
import css from './css/scss/main.scss';

const init = document.getElementById('mountNode');
render(<App/>, init);
