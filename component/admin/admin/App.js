import React, {Component} from 'react';
import Header from '../../../layout/admin/Header';
import Photo from './photo';
import News from './news';
import Events from './events';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            change: 0,
            name: ''
        }
    }

    componentWillMount(){
        const { loginCheck } = this.props;
        const arr = document.cookie.split(' ');
        let id = '01';
        let hash = 'zero';
        if(arr.length > 2) {
             id = arr[0].split('=');
             hash = arr[2].split('=');
        }
        loginCheck('HASH', id[1].slice(0,-1), hash[1]);
    }

    toggleChange(change){

        this.setState({
            change
        });
    }
    render(){
        const {
            addNewAlbum,
            getImages ,
            getAlbums,
            onDelete,
            getNews,
            albums,
            news,
            images,
            events ,
            request ,
            addNews  ,
            updateNews,
            uploadPhoto,
        } = this.props;
        const { change } = this.state;
        const out =[
            <Photo
                getAlbums={ getAlbums }
                albums={ albums }
                request={ request }
                addNewAlbum={ addNewAlbum }
                getImages={ getImages }
                images={ images }
                onDelete={ onDelete }
                uploadPhoto={ uploadPhoto }
            />,
            <Events
                events={ events }
                getNews={ getNews }
                addNews={ addNews }
                onDelete={ onDelete }
                updateNews={ updateNews }
            />,
            <News
                getNews={ getNews }
                news={ news }
                addNews={ addNews }
                onDelete={ onDelete }
                updateNews={ updateNews }
            />
        ];
        return(
            <div className="admin">
                <Header toggleChange={ this.toggleChange.bind(this) }/>
                { out[change] }
            </div>
        )
    }
}

