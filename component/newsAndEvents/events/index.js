import React, {Component} from 'react';
import Container from "./Container";

export default class Events extends Component {
    // componentWillMount() {
    //     this.props.getNews();
    // }

    sortRule(a,b){
        return +a.id < +b.id ? 1 : -1;
    }

    render(){
        const { events } = this.props;
        const container = events.sort(this.sortRule).map((item, index)=>{
            return <Container item={ item } key={index}/>
        });
        return(
            <div className="events_container">
                <h1>События</h1>
                { container }
            </div>
        )
    }
}
