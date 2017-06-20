export default function reducer(state={isOpen:false,openSecondary:false}, action){

    switch (action.type){
        case "OPEN_DRAWER":{
            return {...state, isOpen: action.payload.isOpen, openSecondary:action.payload.openSecondary}
        }
        case "CLOSE_DRAWER":{
            return {...state, isOpen: action.payload.isOpen, openSecondary:action.payload.openSecondary}
        }
        default: return state;
    }
};