import axios from 'axios';

export function getNews () {
    return dispatch =>{
        // dispatch({type: 'REQUEST'});

        axios.get('http://localhost:8888/public/getNews.php')
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

        axios.get('http://localhost:8888/public/getFrontGallery.php',)
            .then((res)=>{
                // console.log(res);
                let arrOfObj = [];
                let objOfId = {}
                let arrOfId = [];


                    for (let i = 0; i < res.data.length; i++) {
                        let id = res.data[i].id;
                        arrOfObj[id] = [];
                        objOfId[id] = {};
                    }    
                    for(let key in objOfId){
                        arrOfId.push(key);
                    }     
                
                    // console.log(arrOfId);
                    for( let k = 0; k < arrOfId.length; k++){
                        // console.log(arrOfId[k]);
                        let obj = {};
                        obj.imgs = []; 
                        for(let i = 0; i< res.data.length; i++){
                            if(res.data[i].id === arrOfId[k]){
                                obj.name_album = res.data[i].name_album; 
                                obj.imgs.push(res.data[i].photo_name);
                            }
                        }
                        arrOfObj[arrOfId[k]].push(obj);

                    }
                        // console.log(arrOfObj);

                                    

                dispatch({type: 'ALL_REQ', albums:arrOfObj, ids: arrOfId});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}