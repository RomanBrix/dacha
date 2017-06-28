import React, {Component} from 'react';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { FISHING } from '../../../DATA';
import Service from '../Service';

export default class App extends Component {
    render(){
        return(
            <div className="Services">
                <Header services={ true }/>
                <Service database={ FISHING } title='FISHING'/>
                <Footer/>
            </div>
        )
    }
}
