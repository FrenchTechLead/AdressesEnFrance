export function openDrawer(){
    return {
        type:"OPEN_DRAWER",
        payload:{
            openSecondary:true,
            isOpen:true
        }
    }
}

export function closeDrawer(){
    return {
        type:"CLOSE_DRAWER",
        payload:{
            openSecondary:false,
            isOpen:false
        }
    }
}