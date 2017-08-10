import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    loginCheck
} from '../../../redux/login/login-actions.js';

class App extends Component {

    render(){
        const { error, login, loginCheck} = this.props;
            if(login){
                window.location.href = 'admin.html';
            }
        return(
            <div className="container">
                <div className="header"><h1>Админ-Панель<br/><span>Dacha-Family</span></h1></div>

                <div id="Form">
                    <input name="login" ref="log" type="text" required placeholder="Логин"/>
                    <input name="password" ref="pass" type="password" required placeholder="Пароль"/>
                    <div className="btn" onClick={()=>{
                        // loginCheck()
                        const {log, pass} = this.refs;
                        loginCheck('LOGIN',log.value, pass.value);
                    }}>Войти</div>
                    {error ? <div className="error">Проверьте<br/>логин или пароль</div>: "" }
                 </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return state.login;
};

export default connect(
    mapStateToProps,
    {
        loginCheck
    })(App);