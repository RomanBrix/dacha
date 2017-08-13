import React, {Component} from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Albums from './Albums';
import Photos from './Photos';

export default class App extends Component {
    constructor(props){
        super(props);
        props.getAlbumsAndImages();
        this.state={
            change: true,
            id_alb: 0,
            photos: []
        }
    }
    componentDidMount(){
        // this.props.getNews();
        const content = document.getElementsByClassName('content')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },100)
    }
    toggleChange(id_alb, change){
        const { albums } = this.props;
        let photos = [];
        const maPhotos = albums[id_alb].map((item)=>{
            // console.log(item);
            photos = item.imgs;
        })
        this.setState({
            change,
            id_alb,
            photos
        })
        // console.log(id_alb);
    }

    sortRule(a,b){
        // console.log(a,b);
        return +a < +b ? 1 : -1;
    }

    render(){
        const {
            albums,
            images,
            getAlbumsAndImages,
            albums_id
        } = this.props;
        const { change,photos } = this.state;
        // console.log(photos);
        const mapAlbums = albums_id.sort(this.sortRule).map((item, index)=>{
            // console.log(albums[item]);
            // console.log(item);
            return <Albums id={item} albums={albums} toggleChange={this.toggleChange.bind(this)} key={index}/>
        })
        // console.log(albums[id_alb]);
        const photoContiner = photos.map((item, index)=>{
            console.log(item);
            return <Photos key={index} photo={item}/>
        })
        
        return(
            <div className="Gallery">
                <Header gallery={ true }/>
                <div className="container">
                    <div className="content">
                        {change ? 
                            <div className="profiles">{mapAlbums}</div> 
                            : <div className="profiles">
                                <div className="back" onClick={()=>{this.setState({change: true})}}>НАЗАД</div> 
                                {photoContiner}
                            </div>}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
