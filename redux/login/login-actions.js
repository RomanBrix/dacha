import axios from 'axios';


export function loginCheck (kind="topzerro", log = '0', pass = '0') {
    return dispatch =>{
        dispatch({type: 'LOGIN_REQUEST'});
        axios.get('http://localhost:8888/public/admin/login.php',{ params:{kind, log, pass}})
            .then(function(res) {
                console.log(res);
                console.log(document.cookie);
                if(res.data[0]=== true) {
                    dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
                }else{
                    dispatch({type: 'LOGIN_ERROR', payload: res.data});

                }

            })
            .catch((error) => {
                console.log(error);
            });
    }
}