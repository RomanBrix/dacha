import React, {Component} from 'react';
import css from '../css/scss/layout/footer.scss';


export default class Footer extends Component {
    send(tel){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "contacts.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("&fastorder=" + tel);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Свяжимся в течении 5 минут');
            }
        };
        xhr.onerror = ()=>{
            alert('Попробуйте чуть позже');
        }
    }
    render(){
        return(
            <div className="Footer">
                <div className="oreder">
                    <h2>Быстрый заказ столика</h2>
                    <p>Укажите свой номер и мы свяжимся с вами</p>
                    <div className="send">
                        <input type="tel" placeholder="+380" ref='TEL'/>
                        <div className="btn" onClick={()=>{
                            const tel = this.refs.TEL.value;
                            this.send(tel);
                        }}>ОТПРАВИТЬ</div>
                    </div>

                    <div className="social">
                        <div className="facebook">
                            <a href="https://www.instagram.com/" target="_blank" >
                                <img src="./src/socIcons/facebook.svg" alt="FaceBook"/>
                            </a>
                        </div>
                        <div className="insta">
                            <a href="https://uk-ua.facebook.com/" target="_blank">
                                <img src="./src/socIcons/insta.svg" alt=""/>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="workTime">
                    <h2>Время работы</h2>
                    <p> <span><img src="./src/socIcons/clock.svg" alt=""/></span> Каждый день</p>
                    <p>С <b>10:00</b> до последнего клиента</p>
                </div>
                <div className="Contacts">
                    <h2>Наши контакты</h2>
                    <p>
                        <span>
                            <img src="./src/socIcons/phone.svg" alt="phone"/>
                        </span>
                        Телефон:
                        <a href="tel:380778525522">
                            <b>+38077-852-55-22</b>
                        </a>
                    </p>
                    <p>
                        <span>
                            <img src="./src/socIcons/envelope.svg" alt="phone"/>
                        </span>
                        Email:
                        <a href="mailto:name@email.com">
                            <b>info@site.com</b>
                        </a>
                    </p>
                    <span className="Location">
                            <img src="./src/socIcons/location.svg" alt="phone"/>
                        </span>
                    <p>

                        <a href="">
                            ул. Владимирская,21 <br/>Васильков, Киевская область
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}
