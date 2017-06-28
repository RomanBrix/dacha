import React, {Component} from 'react';
import css from '../../css/scss/menu.scss';

export default class Menu extends Component {
    render(){
        return(
            <div className="Menu">
                <ul >
                    <li><a href="">ГЛАВНАЯ</a></li>
                    <li><a href="about.html">О НАС</a></li>
                    <li><a href="">МЕНЮ</a></li>
                    <li><a href="">КОНТАКТЫ</a></li>
                </ul>
            </div>
        )
    }
}

