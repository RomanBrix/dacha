import React from 'react';
import { connect } from 'react-redux';
import {
    getAlbums,
    addNewAlbum,
    getImages,
    onDelete,
    getNews,
    addNews,
    updateNews,
    loginCheck
} from '../../../redux/admin/admin-actions.js';
import App from './App';

const mapStateToProps = ( state ) => {
    return state.admin;
};

export default connect(
    mapStateToProps,
    {
        getAlbums,
        addNewAlbum,
        getImages,
        onDelete,
        getNews,
        addNews,
        updateNews,
        loginCheck
    })(App);