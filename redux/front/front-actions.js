import axios from 'axios';

export function getNews () {
    return dispatch =>{
        // dispatch({type: 'REQUEST'});

        axios.get('http://localhost:8888/public/admin/getNews.php')
            .then((res)=>{
                console.log(res);
                dispatch({type: 'NEWS_REQUEST', payload: res.data});
            })
            .catch((error) => {
                console.log('ERRR');
                console.log(error);
            });
    }
}

export function getAlbumsAndImages () {
    return dispatch =>{
        dispatch({type: 'REQUEST'});

        axios.get('http://localhost:8888/public/getFrontGallery.php')
            .then((res)=>{
                console.log(res);
                dispatch({type: 'NEWS_REQUEST', payload: res.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}