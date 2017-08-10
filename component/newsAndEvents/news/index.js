import React, {Component} from 'react';
import Container from "./Container";

export default class News extends Component {

    sortRule(a,b){
        return +a.id < +b.id ? 1 : -1;
    }

    render(){
        const { news } = this.props;
        const container = news.sort(this.sortRule).map((item, index)=>{
                return <Container item={ item } key={index}/>
        });
        return(
            <div className="news_container">
                <h1>Новости</h1>
                { container }
            </div>
        )
    }
}
