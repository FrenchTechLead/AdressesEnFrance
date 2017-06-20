export default function reducer(state={index:0 }, action){

    switch (action.type){
        case "NEXT":{
            return {...state, index: 1, coordinates:action.payload.coordinates}
        }
        case "PREVIOUS":{
            return {...state, index: 0}
        }
        default: return state;
    }
};