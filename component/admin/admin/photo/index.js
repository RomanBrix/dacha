import React, { Component } from 'react';
// import Container from './Container';
import Albums from './albums';
import Photos from './photos';
import css from '../../../../css/scss/admin/main.scss';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            change: false,
            id: 1,
            album_name: 'NaN'
        }
    }

    toggleChange(change, id, album_name){
        this.setState({
            change,
            id,
            album_name
        })
    }
    render(){
        const { getAlbums, addNewAlbum, getImages, onDelete, albums, images, request, } = this.props;
        const { change, id, album_name } = this.state;
        return (
            <div className="container">
                {request ? (<div className="load">
                                <p>Loading...</p>
                            </div>)
                    : <span/>
                }
                { !change ? <Albums
                                getAlbums={ getAlbums }
                                addNewAlbum={ addNewAlbum }
                                albums={ albums }
                                request={ request }
                                toggleChange={ this.toggleChange.bind(this)}
                                getImages={ getImages }
                                onDelete={ onDelete }
                            />
                            : <Photos
                                    id={ id }
                                    album_name={ album_name }
                                    request={ request }
                                    toggleChange={ this.toggleChange.bind(this) }
                                    getImages={ getImages }
                                    images={ images }
                                    onDelete={ onDelete }

                                />
                }

            </div>
        )
    }
}