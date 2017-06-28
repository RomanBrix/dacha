import React, {Component} from 'react';
import css from '../../css/scss/Introduction.scss';

export default class Introduction extends Component {
    render(){
        return(
            <div className="Intro">
                <h1>Добро пожаловать</h1>
                <div className="container">
                    <p><span>Загородный ресторанный <b>комплекс</b></span></p>
                </div>

                <a href="carte.html">
                    <div className="btn">
                        посмотреть меню
                    </div>
                </a>
            </div>
        )
    }
}
/*
 <div className="Line"/>
 <div className="Line2"/>
 */