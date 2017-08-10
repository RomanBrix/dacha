import React, {Component} from 'react';

export default class NewsMap extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getNews();
    }
    sortRule(a,b){
        return +a.id < +b.id ? 1 : -1;
    }
    render(){
        const { news, getPositionNews, toggleChange } = this.props;
        const sortNews = news.sort(this.sortRule);
        const newsMap = sortNews.map((item, index)=>{

            return(
                <div className="news" key={index} id={item.id} onClick={()=>{
                    console.log(index);
                    getPositionNews(index);
                    toggleChange(true);
                }}>
                    <h2>{item.title}</h2>
                    <h4>{item.date}</h4>
                    <p>{item.description.substr(0,255)}{item.description.length <= 255 ? '':"..."}</p>
                </div>
            )
        });
        return(
            <div className="content">
                <h1>Новости</h1>
                <div className="all_news">
                    <div className="addNews news" onClick={()=>{
                        getPositionNews(0, true);
                        toggleChange(true);
                    }}>ДОБАВИТЬ НОВОСТЬ</div>
                    { newsMap }
                </div>
            </div>
        )
    }
}
