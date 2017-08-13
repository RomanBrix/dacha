import React from 'react';
import { connect } from 'react-redux';
import {
    getAlbumsAndImages,
} from '../../redux/front/front-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.front;
};

export default connect(
    mapStateToProps,
    {
        getAlbumsAndImages,
    })(App);