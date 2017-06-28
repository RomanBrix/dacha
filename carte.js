import React from 'react';
import { render } from 'react-dom';
import  App from './component/carte'
import css from './css/scss/carte/main.scss';

const init = document.getElementById('mountNode');
render(<App/>, init);
