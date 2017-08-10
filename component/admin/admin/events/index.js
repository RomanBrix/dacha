import React, { Component } from 'react';
import  EventsMap from './events_map';
import  EventsItem from './events_item';
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
        const { getNews, request, events, addNews, onDelete, updateNews } = this.props;
        const { change, position, isNew } = this.state;
        return (
            <div className="container">
                {request ? (<div className="load">
                    <p>Loading...</p>
                </div>)
                    : <span/>
                }
                {
                    !change ? <EventsMap
                        getNews={ getNews }
                        events={ events }
                        getPositionNews={ this.getPositionNews.bind(this) }
                        toggleChange={this.toggleChange.bind(this) }
                    />
                    : <EventsItem
                        position={ position }
                        isNew={ isNew }
                        events={ events }
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