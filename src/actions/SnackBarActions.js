export function openSnackBar(message){
    return {
        type:"SNACKBAROPEN",
        payload:{message:message}
    };
}

export function closeSnackBar(){
    return {
        type:"SNACKBARCLOSE",
        payload:{message:"", isOpen:false}
    };
}