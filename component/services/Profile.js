import React, {Component} from 'react';
import css from '../../css/scss/services/profile.scss';


export default class Profile extends Component {
    componentDidMount(){
        const content = document.getElementsByClassName('content')[0];
        const last_little_photo = document.getElementsByClassName('little_photo')[3];
        last_little_photo.style.marginRight = 0;
        setTimeout(()=> {
            content.style.opacity = 1;
        },10)
    }
    newPosition(){
        const {database, position } = this.props;
        const maxLength = database.length - 1;
        if(+position !== maxLength){
            return +position + 1;
        } else{
            return 0;
        }

    }
    render(){
        const {toggleProfile, nextProfile, choosePhoto, nextPhoto, database, position } = this.props;
        const imgContainer = database[position].img.map((item, index)=>{
            if (index < 4) {
                return <img
                    src={item}
                    alt={item}
                    key={index}
                    className="little_photo"
                    id={index}
                />
            } else {
                return <img
                    src={item}
                    alt={item}
                    key={index}
                    id={index}
                    className="little_photo hidden_photo"
                />
            }
        });
        const newPosition = this.newPosition();
        return(

            <div className="container">
                <div className="content " id="profile_content">
                    <div className="back"  onClick={()=>{ toggleProfile(); }}>НАЗАД</div>
                    <h1>{database[position].title}</h1>
                    <div className="blocks">
                        <div className="left_block">
                            <div className="photo">
                                <img src={database[position].img[2]} alt="first_PHOTO"  className="first_photo"/>
                                <div className="little_photos" onClick={({ target })=>{choosePhoto(target)}}>
                                    {imgContainer}
                                    <img src="./src/hotel/next_arrow.png" alt="next_arrow" onClick={()=>{nextPhoto()}}/>
                                </div>


                            </div>
                            <div className="about">
                                <p> {database[position].description} </p>
                            </div>
                        </div>
                        <div className="right_block">
                            <div className="price">
                                ₴  {database[position].price}
                            </div>
                            <div className="btn">Бронировать</div>
                            <div className="contact">
                                <p>
                                    <span>
                                        <img src="./src/socIcons/phone.svg" alt="telephone"/>
                                    </span>Телефон: <span className="bold"><a href="tel:380778525522">+38077-852-55-22</a></span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./src/socIcons/envelope.svg" alt="email"/>
                                    </span>Email: <span className="bold"><a href="mailto:name@email.com">info@site.com</a></span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./src/socIcons/location.svg" alt="position"/>
                                    </span>
                                    <a href="">ул. Владимирская, 21 Васильков, Киевская область</a>
                                </p>
                            </div>
                            <div className="poster">
                                <div className="img"><img src={database[newPosition].img[0]} alt="number_First"/></div>
                                <div className="title">
                                    <h3>{database[newPosition].title}</h3>
                                    <p>
                                        {database[newPosition].about}
                                    </p>
                                    <div
                                        className="btn_poster"
                                        id={database[newPosition].id}
                                        onClick={({target})=>{
                                            nextProfile(target.id);
                                        }}
                                    >выбрать</div>
                                </div>
                                <div className="price">₴ {database[newPosition].price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/*
 <img src="./src/hotel/back_arrow.png" alt="back_arrow" onClick={()=>{prevPhoto()}}/>
 */