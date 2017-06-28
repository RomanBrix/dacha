import React, {Component} from 'react';
import { connect } from 'react-redux';
import css from '../css/scss/layout/header.scss';

export default class Header extends Component {
    componentDidMount(){
        const {main, about, carte, services, contact} = this.props;
        const arr = [main, about, carte, services, contact];
        let ask = 0;
        for (let i = 0; i < arr.length; i++){
            if(arr[i] === true ){
                ask = i;
            }
        }
        const header = document.getElementsByClassName('Header')[0];
        const listArray = header.children[0].children;
        switch(ask) {
            case 0 :
                header.classList.add('header_main');
                break;

            case 1:
                header.classList.add('header_about');
                listArray[1].classList.add('active');
                break;
            case 2:
                header.classList.add('header_carte');
                listArray[2].classList.add('active');
                break;
            case 3:
                header.classList.add('header_services');
                listArray[3].children[0].classList.add('active');
                break;
            case 4:
                header.classList.add('header_contact');
                listArray[4].classList.add('active');
                break;
            default : console.log('op'); break;
        }
    }
    render() {

        const { main } = this.props;
        const src = main ? './src/arrow_down.svg' : './src/black_arrow_down.svg';
        return (
            <div className="Header">
                <ul >
                    <li><a href="index.html">ГЛАВНАЯ</a></li>
                    <li><a href="about.html">О НАС</a></li>
                    <li><a href="carte.html">МЕНЮ</a></li>
                    <li className="dropdown">
                        <span><a href="hotel.html">УСЛУГИ </a></span><img src={src} alt="down"/>
                        <div className="dropdown-content dropdown-main">
                            <a href="hotel.html">ГОСТИНИЦА</a>
                            <a href="sauna.html">САУНА</a>
                            <a href="fishing.html">РЫБАЛКА</a>
                            <a href="banquets.html">БАНКЕТЫ</a>
                        </div>
                    </li>
                    <li><a href="contact.html">КОНТАКТЫ</a></li>
                </ul>
            </div>
        );
    }
}
