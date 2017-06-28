import React, {Component} from 'react';

export default class List extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="item">
                <div className="img">
                    <img src={ item.img } alt=""/>
                </div>
                <div className="info">
                    <h4>{ item.type } <b> { item.name }</b> <span className="price">&#8372; {item.price}</span></h4>
                    <p>{ item.info }</p>
                </div>
            </div>
        )
    }

}
