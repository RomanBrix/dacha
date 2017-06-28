import React, {Component} from 'react';
import Out from './Out';

export default class Container extends Component {
    componentDidMount(){
        const content = document.getElementsByClassName('content')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },10)
    }
    render(){
        const { toggleProfile, database, title } = this.props;
        const out = database.map((item, index)=>{
            return <Out item={ item } key={ index } toggleProfile={ toggleProfile }/>
        });
        let header = '';
        switch(title) {
            case 'HOTEL':
                header = 'Гостиница';
                break;
            case 'SAUNA':
                header = 'Сауна';
                break;
            case 'FISHING':
                header = 'Рыбалка';
                break;
            case "BANQUETS":
                header = 'Банкеты';
                break;
            default : header = 'Услуги'; break;
        }
        return(
            <div className="container">
                <div className="content">
                    {database.length === 0 ? <h1>В разработке</h1> : <h1>{header}</h1>}
                    <div className="items">
                        {out}
                    </div>
                </div>
            </div>
        )
    }
}
