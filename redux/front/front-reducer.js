const InitialState = {
    request: false,
    albums: [],
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
                images: state.images,
                news:state.news,
                events: state.events

            }
        case 'ALBUMS_REQUEST':
            return {
                request: false,
                albums: action.payload,
                images: [],
                news:state.news,
                events: state.events


            };
        case 'IMAGES_REQUEST':
            return {
                request: false,
                albums: state.albums,
                images: action.payload,
                news:state.news,
                events: state.events
            };
        case 'NEWS_REQUEST':
            return {
                request: false,
                albums: state.albums,
                images: state.images,
                news:action.payload[0],
                events: action.payload[1]
            };
        default: return state;
    }
};

export default frontReducers;