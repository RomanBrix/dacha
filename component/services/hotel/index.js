import React, {Component} from 'react';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { HOTEL } from '../../../DATA';
import Service from '../Service';

export default class App extends Component {
    render(){
        return(
            <div className="Services">
                <Header services={ true }/>
                <Service database={ HOTEL } title='HOTEL'/>
                <Footer/>
            </div>
        )
    }
}
