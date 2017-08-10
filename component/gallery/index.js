import React from 'react';
import { connect } from 'react-redux';
import {
    getNews,
} from '../../redux/front/front-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.front;
};

export default connect(
    mapStateToProps,
    {
        getNews,
    })(App);