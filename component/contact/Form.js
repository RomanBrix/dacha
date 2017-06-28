import React, {Component} from 'react';

export default class Form extends Component {
    check(send){
        const { NAME, EMAIL, TEL, MSG } = this.refs;
        const emailSpec = EMAIL.value.match(/[^\d\sA-Z]/gi);
        if(emailSpec !== null){
            emailSpec.join('');
        }
        const emailSpace = EMAIL.value.match(/\s/g);
        const arrTel = TEL.value.match(/\d/g);
        let tel = 0;
        if(arrTel !== null){
             tel = arrTel.join('').replace(/\D/g, "");
             console.log(tel);
        }

        if( NAME.value.length > 1) {
            if (emailSpace === null && emailSpec !== null && emailSpec.indexOf('.') !== -1 && emailSpec.indexOf('@') !== -1 && EMAIL.value.length >= 5) {
                if(tel.length === 10 || tel.length === 12) {
                    send(NAME.value, tel, MSG.value, EMAIL.value);
                } else{alert("Укажите номер телефона")}
            } else alert('укажите существующий E-mail');
        }else alert('Укажите имя');
    }
    render(){
        const { send } = this.props;
        return(
            <div className="form">
                <div className="three">
                    <input type="name" placeholder="Имя" ref='NAME' />
                    <input type="email" placeholder="Email" ref='EMAIL' />
                    <input type="tel" placeholder="Телефон" ref='TEL' />
                </div>
                <div className="area">
                    <textarea placeholder="Сообщения" ref='MSG'/>
                </div>
                <div className="btn" onClick={()=>{
                    this.check(send);
                }}>
                    отправить
                </div>

            </div>
        )
    }
}
/*


 */