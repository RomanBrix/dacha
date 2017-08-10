import React, {Component} from 'react';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            all: false
        }
    }
    toggleAll(){
        const { all } = this.state;
        this.setState({
            all: !all
        })
    }

    render(){
        const {item} = this.props;
        const { all } = this.state;
        let style = {};
        const out = [
            <p>{item.description.substr(0,70)}{item.description.length <= 70 ? '':"..."}</p>,
            <p>{item.description}</p>
        ];
        if(all){
            style= {
                minHeight: '160px'
            }
        } else{
            style= {
                maxHeight: '160px'
            }
        }
        return(
            <div className="news" id={item.id}>
                <h2>{item.title}</h2>
                <h4>{item.date}</h4>
                {all ? out[1] : out[0]}
                {item.description.length <= 70 ? '':
                    <span className="read" onClick={()=>{this.toggleAll();}}>
                        { all ? "Скрыть" :"...Читать дальше" }
                    </span>}

            </div>
        )
    }
}
