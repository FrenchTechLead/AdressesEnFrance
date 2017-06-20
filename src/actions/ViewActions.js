export function nextView(coordinates){
    return {
        type:"NEXT",
        payload:{
            coordinates:coordinates
        }
    }
}

export function previousView(){
    return {
        type:"PREVIOUS",
        payload:{
            index:0
        }
    }
}