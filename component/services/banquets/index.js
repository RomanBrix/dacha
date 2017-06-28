import React, {Component} from 'react';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { BANQUETS } from '../../../DATA';
import Service from '../Service';

export default class App extends Component {
    render(){
        return(
            <div className="Services">
                <Header services={ true }/>
                <Service database={ BANQUETS } title='BANQUETS'/>
                <Footer/>
            </div>
        )
    }
}
