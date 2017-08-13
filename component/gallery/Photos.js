import React, {Component} from 'react';

export default class Photos extends Component {
    render(){
        // console.log(this.props);
        const {photo} = this.props;
        // console.log(albums[id][0].imgs[0]);

        return(
            <div className="profile_photo">
                 <img src={`./upload_src/${photo}`} alt={photo}/> 
            </div>
        )
    }
}
