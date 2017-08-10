import React, {Component} from 'react';
import Header from '../../layout/Header';

export default class App extends Component {
    componentDidMount(){
        // this.props.getNews();
        const content = document.getElementsByClassName('content')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },100)
    }
    render(){
        const {
            albums,
            events
        } = this.props;
        return(
            <div className="News">
                <Header news={ true }/>
                <div className="container">
                    <div className="content">
                        HELLLLOOOOOO HYILO
                    </div>
                </div>
            </div>
        )
    }
}
