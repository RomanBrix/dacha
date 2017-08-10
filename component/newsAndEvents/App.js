import React, {Component} from 'react';
import Header from '../../layout/Header';
import News from './news';
import Events from './events';

export default class App extends Component {
    componentDidMount(){
        console.log(this.props);
        this.props.getNews();
        const content = document.getElementsByClassName('content')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },100)
    }
    render(){
        const {
            news,
            events
        } = this.props;
        return(
            <div className="News">
                <Header news={ true }/>
                <div className="container">
                    <div className="content">
                        <div className="both_container">
                            <News news={news}/>
                            <div className="line"/>
                            <Events events={ events }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
