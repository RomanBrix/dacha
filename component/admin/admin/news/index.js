import React, { Component } from 'react';
import  NewsMap from './news_map';
import  NewsItem from './news_item';
import css from '../../../../css/scss/admin/news.scss';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            change: false,
            position: 0,
            isNew: false
        }
    }
    toggleChange(change){
        this.setState({
            change,
        })
    }
    getPositionNews(position, isNew=false){
        this.setState({
            position,
            isNew
        })
    }
    render(){
        const { getNews, request, news, addNews, onDelete, updateNews } = this.props;
        const { change, position, isNew } = this.state;
        return (
            <div className="container">
                {request ? (<div className="load">
                    <p>Loading...</p>
                </div>)
                    : <span/>
                }
                { !change ? <NewsMap
                                getNews={ getNews }
                                news={ news }
                                getPositionNews={ this.getPositionNews.bind(this) }
                                toggleChange={this.toggleChange.bind(this) }
                            />
                    : <NewsItem
                            position={ position }
                            isNew={ isNew }
                            news={ news }
                            toggleChange={this.toggleChange.bind(this) }
                            addNews={ addNews }
                            onDelete={ onDelete }
                            updateNews={ updateNews }
                    />
                }


            </div>
        )
    }
}