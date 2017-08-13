const InitialState = {
    request: false,
    albums: [],
    albums_id:[],
    images: [],
    news: [],
    events: []
}

const frontReducers = (state = InitialState, action) => {
    switch (action.type) {

        case 'REQUEST':
            return{
                request: true,
                albums: state.albums,
                albums_id:[],
                images: state.images,
                news:state.news,
                events: state.events

            }
        case 'ALBUMS_REQUEST':
            return {
                request: false,
                albums: action.payload,
                albums_id:[],
                images: [],
                news:state.news,
                events: state.events


            };
        case 'IMAGES_REQUEST':
            return {
                request: false,
                albums: state.albums,
                albums_id:[],
                images: action.payload,
                news:state.news,
                events: state.events
            };
        case 'ALL_REQ':
            return {
                request: false,
                albums: action.albums,
                albums_id: action.ids,
                images: state.images,
                news:state.news,
                events: state.events
            };
        case 'NEWS_REQUEST':
            return {
                request: false,
                albums: state.albums,
                albums_id:[],
                images: state.images,
                news:action.payload[0],
                events: action.payload[1]
            };
        default: return state;
    }
};

export default frontReducers;