import React, {Component} from 'react';
import css from '../../css/scss/footer.scss';

export default class Footer extends Component {
    send(tel){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "contacts.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("&fastorder=" + tel);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Свяжимя в течении 5 минут');
            }
        };
        xhr.onerror = ()=>{
            alert('Попробуйте чуть позже');
        }
    }
    render(){
        return(
            <div className="Footer">
                <div className="Contact">Телефон: <a href="tel:380778525522">&nbsp;+38077 - 852 - 55 - 22</a></div>
                <div className="Contact">Email: <a href="email-to:info@site.com">&nbsp;info@site.com</a></div>
                <div className="btn" onClick={()=>{
                   const tel = prompt('Укажите номер телефона', '+380');
                   if(tel !== null && tel.length > 5) {
                       this.send(tel);
                   }
                }}>Заказ столика</div>
            </div>
        )
    }
}
