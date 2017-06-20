import axios from 'axios';

export function search(keyword){
    return {
        type:"SEARCH",
        payload:axios.get("http://api-adresse.data.gouv.fr/search/?q="+keyword+'&limit=8')
    }
}

export function refresh(){
    return {
        type:"REFRESH",
        payload:false
    }
}
