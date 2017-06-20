const intialState = {
    keyword:"",
    features:[],
    fetched:false,
    fetching:false,
    error:false
};

export default function reducer(state=intialState, action){

    switch (action.type){
        case "SEARCH_PENDING":{
            return {
                ...state,
                fetching:true,
                fetched:false,
                error:false,
                features:[]
            }
        }
        case "SEARCH_FULFILLED":{
            return {
                ...state,
                fetching:false,
                fetched:true,
                error:false,
                features:action.payload.data.features
            }
        }
        case "SEARCH_REJECTED":{
            return {
                ...state,
                fetching:false,
                fetched:false,
                error:action.payload,
                features:[]
            }
        }
        case "REFRESH":{
            return {
                ...state,
                fetching:false,
                fetched:false,
                error:false,
                features:[]
            }
        }
        default: {
            return state;
        }
    }
};