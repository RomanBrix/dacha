import React, {Component} from 'react';
import Map from './Map';
import Form from './Form';

export default class Container extends Component {
    render(){
        const { send } = this.props;

        return (
            <div className="container">
                <div className="content">
                    <h1>Наши контакты</h1>
                    <div className="map_contact">
                        <div className="map" >
                            <Map/>
                        </div>
                        <div className="box_contact">
                            <div className="time">
                               <div>
                                   <img src="./src/contacts/clock.png" alt=""/>
                               </div>
                                <h3>время роботы</h3>
                                <p>Каждый день <br/> С <b>10:00</b> до последнего
                                    клиента</p>
                            </div>
                            <div className="adress">
                                <div>
                                    <img src="./src/contacts/position.png" alt=""/>
                                </div>
                                <h3>адрес</h3>
                                <p>ул. Владимирская, 21 <br/> Васильков, Киевская область</p>
                            </div>
                            <div className="phone">
                                <div>
                                    <img src="./src/contacts/phone.png" alt=""/>
                                </div>
                                <h3>номер телефона</h3>
                                <p>
                                    <a href="tel:380778525522">+38077-852-55-22</a>
                                    <br/>
                                    <a href="tel:380778525522">+38077-852-55-22</a>
                                </p>
                            </div>
                            <div className="email">
                                <div>
                                    <img src="./src/contacts/mail.png" alt=""/>
                                </div>
                                <h3>E-mail</h3>
                                <p>
                                    <a href="mailto:info@site.com">info@site.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <h1>Напишите нам</h1>
                    <Form send={ send }/>
                </div>
            </div>
        );
    }
}
