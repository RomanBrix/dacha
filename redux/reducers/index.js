import { combineReducers } from 'redux';
import storage from './storage';
import adminReducers from '../admin/admin-reducer';
import loginReducers from '../login/login-reducer';
import frontReducers from '../front/front-reducer';


export default combineReducers({
    storage,
    admin: adminReducers,
    login: loginReducers,
    front: frontReducers
});
