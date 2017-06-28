import React, {Component} from 'react';
import Menu from './Menu';
import Introduction from './Introduction';
import Footer from './Footer';
import Header from '../../layout/Header';

export default class App extends Component {
    componentDidMount(){
        const content = document.getElementsByClassName('Main')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },100)
    }

    render(){
        return (
            <div className="Main">
                <div className="Main_layer">
                    <img className="shadow" src="src/Rectangle.png" alt="shadow"/>
                    <div className="content">
                        <Header main={true}/>
                        <Introduction/>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}
