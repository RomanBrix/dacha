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
    render(){
        return (
            <div className="About">
                <Header about={ true }/>
                <Container/>
                <Footer/>
            </div>
        )
    }
}
