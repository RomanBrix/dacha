import React, {Component} from 'react';

export default class Out extends Component {
    render() {
        const { item, toggleProfile } = this.props;
        // console.log(item.img);
        return (
            <div className="poster">
                <div className="img"><img src={item.img[0]} alt="number_First"/></div>
                <div className="title">
                    <h3>{item.title}</h3>
                    <p>
                        {item.about}
                    </p>
                    <div
                        className="btn"
                        id={item.id}
                        onClick={({target})=>{
                            toggleProfile(target.id);
                        }}
                    >выбрать</div>
                </div>
                <div className="price">₴ {item.price}</div>
            </div>
        )

    }
}
