import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import Profile from './Profile';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

class Service extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prof: props.storage[0].prof,
            position: props.storage[0].position,
        };
    }
    componentDidMount(){
        const { services } = this.props.storage[0];
        console.log(services);
    }
    componentDidUpdate(){
        const content = document.getElementsByClassName('content')[0];
        setTimeout(()=> {
            content.style.opacity = 1;
        },10)
    }

    toggleProfile(position) {
        const prof = this.props.storage[0].prof;
        const { onShowProfile } = this.props;
        const content = document.getElementsByClassName('content')[0];
        content.style.opacity = 0;
        setTimeout(()=> {
            onShowProfile(!prof, position);
            this.setState({
                prof: !prof,
                position
            })
        }, 100)

    }

    nextProfile(position){
        const prof = this.props.storage[0].prof;
        const { onShowProfile } = this.props;
        const content = document.getElementsByClassName('content')[0];
        content.style.opacity = 0;
        setTimeout(()=> {
            onShowProfile(prof, position);
            this.setState({
                position
            })
        }, 100)
    }

    choosePhoto(target){
        if(target.nodeName !== "IMG" ){
            return;
        }
        if(target.classList.length < 1){
            return;
        }

        const bigPhoto = document.getElementsByClassName('first_photo')[0];
        bigPhoto.src = target.src;

        // event.stopPropagation();
    }


    nextPhoto(){
        const littlePhotos = document.querySelectorAll('.little_photo');
        const hiddenPhotos = document.querySelectorAll('.hidden_photo');
        const hiddenLength = hiddenPhotos.length - 1;
        let lastHidden = littlePhotos.length - 1;

        for(let i = 0; i < lastHidden + 1; i++){
            if(littlePhotos[i].classList.contains('hidden_photo')){
                if(i === lastHidden){
                    break;
                }else {
                    continue;
                }
            }
            littlePhotos[i].classList.add("hidden_photo");


            let check = true;
            let iteration = lastHidden - hiddenLength;
            while(check){
                if(iteration === lastHidden + 1){
                    for(let j = 0; j < lastHidden + 1; j++){
                        if(j < 4 ){
                            littlePhotos[j].classList.remove("hidden_photo");
                        } else {
                            littlePhotos[j].classList.add("hidden_photo");
                        }
                    }
                    check = false;
                }else {
                    if (littlePhotos[iteration].classList.contains('hidden_photo')) {
                        littlePhotos[iteration].classList.remove('hidden_photo');
                        check = false;
                    } else {
                        iteration += 1;
                    }
                }
            }
            break;
        }
    }

    render(){
        const { prof, position } = this.state;
        const { database, title } = this.props;
        return (
                prof === false ?
                <Container
                    toggleProfile={ this.toggleProfile.bind(this) }
                    database={ database}
                    title={ title }
                />
                :
                <Profile
                    toggleProfile={ this.toggleProfile.bind(this) }
                    nextProfile={ this.nextProfile.bind(this) }
                    choosePhoto={ this.choosePhoto.bind(this) }
                    nextPhoto={ this.nextPhoto.bind(this) }
                    database={ database }
                    position={ position }
                />

        )
    }
}

const mapStateToProps = (state) => {
    return ({
        storage: state.storage
    });
};

export default connect(mapStateToProps,
    (dispatch) => {
        return ({
            onShowProfile: (prof, position) => {
                dispatch({ type: "SHOW_PROFILE", prof, position });
            }
        });
    })(Service);

 /* prevPhoto(){
 const littlePhotos = document.querySelectorAll('.little_photo');
 const hiddenPhotos = document.querySelectorAll('.hidden_photo');
 // const hiddenLength = hiddenPhotos.length - 1;
 let lastHidden = littlePhotos.length - 1;
 for(let i = 0; i < lastHidden + 1; i++){
 let c = i+1;
 if(i === lastHidden){
 c = i;
 // console.log(lastHidden + 1);
 let last = lastHidden;
 let from = -1;
 while (last){
 console.log(littlePhotos[last]);
 if(last > lastHidden - hiddenPhotos.length){
 littlePhotos[last].classList.remove('hidden_photo');
 from++;
 }
 last--;
 }
 for( from; from >= 0; from--){
 littlePhotos[from].classList.add('hidden_photo');
 }
 break;
 }
 if(littlePhotos[i].classList.contains('hidden_photo') && !littlePhotos[c].classList.contains('hidden_photo')){
 littlePhotos[i].classList.remove('hidden_photo');
 }else{
 if(i === lastHidden){
 break;
 }else {
 continue;
 }
 }
 let check = true;
 let iteration = lastHidden;
 while(check){
 if(iteration < 0){
 check = false;
 }else{
 if(!littlePhotos[iteration].classList.contains('hidden_photo')){
 littlePhotos[iteration].classList.add('hidden_photo');
 check = false;
 }else{
 iteration -=1;
 }
 }
 }
 }
 }

 */