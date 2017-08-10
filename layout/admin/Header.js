import React, {Component} from 'react';
import css from '../../css/scss/layout/admin/header.scss';

export default class Header extends Component {
    render(){
        const { toggleChange } = this.props;
        const arr = document.cookie.split(' ');
        let name = "zero";
        if(arr.length > 2) {
            name = arr[1].split('=');
            name = name[1].slice(0,-1);
        }

        return (
            <div className="header">
                <div className="head"><h1>Admin Panel</h1></div>
                <div className="menu">
                    <div className="news" onClick={()=>{
                        toggleChange(2);
                    }}>
                        <span className="news_icon">
                            <img src="../src/admin/header/news.svg" alt="news_icon"/>
                        </span> Новости
                    </div>
                    <div className="news" onClick={()=>{
                        toggleChange(1);
                    }}>
                        <span className="news_icon">
                            <img src="../src/admin/header/events.svg" alt="events_icon"/>
                        </span> События
                    </div>
                    <div className="gallery"  onClick={()=>{
                        toggleChange(0);
                    }}>
                        <span className="gallery_icon">
                            <img src="../src/admin/header/gallery.svg" alt="news_icon"/>
                        </span> Галерея
                    </div>
                </div>
                <div className="user">
                    <span className="user_icon">
                        <img src="../src/admin/header/user.svg" alt=""/>
                    </span> {name}
                </div>

                <div className="enter">
                    <div className="login" onClick={()=>{
                        document.cookie = 'hash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = 'name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = 'id=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        window.location.href = 'index.html';
                    }}>
                        <span className="login_icon">
                            <img src="../src/admin/header/power.svg" alt="power_icon"/>
                        </span>Выйти
                    </div>
                </div>
            </div>
        );
    }
}
