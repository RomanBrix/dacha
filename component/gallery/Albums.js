import React, {Component} from 'react';

export default class Albums extends Component {
    render(){
        // console.log(this.props);
        const {id, toggleChange, albums} = this.props;
        // console.log(albums[id][0].imgs[0]);
        const bgImg = albums[id][0].imgs[0];
        return(
            <div className="profile" id={id} onClick={()=>{toggleChange(id, false)}} style={ {backgroundImage: `url(./upload_src/${bgImg})`} }>
                <p>{albums[id][0].name_album}</p>
            </div>
        )
    }
}
