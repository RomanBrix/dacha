import React, {Component} from 'react';
import Container from './Container';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

export default class App extends Component {
    componentDidMount(){
        const content = document.getElementsByClassName('content')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },100)
    }

    send(name, tel, msg, email){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "contacts.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("name=" + name + "&tel=" + tel + "&msg=" + msg + "&msgEmail=" + email);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Мы постараемся ответить Вам как можно быстрее');
            }
        };
        xhr.onerror = ()=>{
            alert('Попробуйте чуть позже');
        }
    }

    render(){
        return (
            <div className="Contact">
                <Header contact={ true }/>
                <Container send={ this.send}/>
                <Footer/>
            </div>
        )
    }
}
