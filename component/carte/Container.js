import React, {Component} from 'react';
import { DATA } from '../../DATA';
import List from './List';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }
    highlight({ target }){

        if(target.classList.contains('buttons')) return;
       const last = document.getElementsByClassName('btn_active')[0];
       last.classList.remove('btn_active');
       target.classList.add('btn_active');
        const allBtns = document.getElementsByClassName('btn');
        for(let i = 0; i < allBtns.length; i++ ){
           if(allBtns[i].classList === target.classList){
               console.log(i);
               this.setState({
                   page:i
               })
           }
        }
    };
    render(){
       const { page } = this.state;

       const list = DATA[page].map((item,index)=>{
           return <List item={ item } key={ index } />
        });
        return (
            <div className="container">
                <div className="content">
                    <h1>Наше меню</h1>
                    <h3>выберите категорию</h3>
                    <div className="buttons" onClick={this.highlight.bind(this)}>
                        <div className="btn btn_all btn_active">ВСЁ</div>
                        <div className="btn btn_alcohol" >АЛКОГОЛЬ</div>
                        <div className="btn btn_salads">САЛАТЫ</div>
                        <div className="btn btn_hot">ГОРЯЧИЕ БЛЮДА</div>
                        <div className="btn btn_snacks">ЗАКУСКИ</div>
                    </div>
                    <div className="menu_items">
                        { list }
                    </div>
                    <a href=""> <div className="btn">посмотреть всё меню</div></a>
                </div>
            </div>
        );
    }
}

