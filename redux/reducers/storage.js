import { HOTEL, SAUNA } from '../../DATA';

const initialState = [
    {
        prof:false,
        position: 0,
        services: HOTEL
    }
]

export default function storage(state = initialState, action) {
    switch (action.type) {


        case "SHOW_PROFILE" :
            return state.map((item)=>{
                item.prof = action.prof;
                item.position = action.position;
                return item;
            });
            break;

        case "CHOOSE_SERVICE":
            console.log(SAUNA);
            return state.map((item)=>{
                item.services = SAUNA;
                return item;
            });
            break;


        default: return state;
    }
}
