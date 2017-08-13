import axios from 'axios';


export function getAlbums () {
    return dispatch =>{
        dispatch({type: 'REQUEST'});

        axios.get('http://localhost:8888/public/admin/albums.php')
            .then(function(res) {
                dispatch({type: 'ALBUMS_REQUEST', payload: res.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function addNewAlbum (name) {
    return dispatch =>{

        axios.post('http://localhost:8888/public/admin/addNewAlbum.php',{ name })
            .then(function(res) {
                if(res.data === true){
                    // console.log('all_OK');
                }else console.log('all_FALLS');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getImages (id = 1) {
    return dispatch =>{
        dispatch({type: 'REQUEST'});
        axios.get('http://localhost:8888/public/admin/images.php',{ params:{ id } })
            .then(function(res) {
                // console.log(res);
                dispatch({type: 'IMAGES_REQUEST', payload: res.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getNews () {
    return dispatch =>{
        dispatch({type: 'REQUEST'});

        axios.get('http://localhost:8888/public/admin/getNews.php')
            .then((res)=>{
                // console.log(res);
                dispatch({type: 'NEWS_REQUEST', payload: res.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function onDelete (kind, kind_id) {
    return dispatch =>{

        axios.post('http://localhost:8888/public/admin/delete.php',{
            kind,
            kind_id
        })
            .then(function(res) {
                // console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function addNews (kind,title, description) {
    return dispatch =>{

        axios.post('http://localhost:8888/public/admin/addNews.php',{
            kind,
            title,
            description
        })
            .then(function(res) {
                // console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function updateNews (kind, id, title, description) {
    return dispatch =>{

        axios.post('http://localhost:8888/public/admin/updateNews.php',{
            kind,
            id,
            title,
            description
        })
            .then(function(res) {
                // console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}



export function loginCheck (kind="zero", log = '0', pass = '0') {
    return dispatch =>{
        axios.get('http://localhost:8888/public/admin/login.php',{ params:{kind, log, pass}})
            .then(function(res) {
                // console.log(res);
                if(res.data[0] === false) {
                    
                    window.location.href = 'index.html';
                }else{
                    console.log('WELCOME BACK');
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function uploadPhoto (data) {
        let dat = new FormData(data);
    return dispatch =>{
        axios.post('http://localhost:8888/public/admin/upload.php',{ dat })
            .then(function(res) {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}