export default function reducer(state={isOpen:false, message:""}, action){

    switch (action.type){
        case "SNACKBAROPEN":{
            return {...state, isOpen: true, message:action.payload.message}
        }
        case "SNACKBARCLOSE":{
            return {...state, isOpen: false, message:""}
        }
        default: return state;
    }
};