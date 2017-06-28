import React from 'react';
import { render } from 'react-dom';
import  App from './component/about'
import css from './css/scss/about/main.scss';

const init = document.getElementById('mountNode');
render(<App/>, init);
