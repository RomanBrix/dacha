import React from 'react';
import { render } from 'react-dom';
import  App from './component/contact'
import css from './css/scss/contact/main.scss';

const init = document.getElementById('mountNode');
render(<App/>, init);
