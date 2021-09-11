const addToLocalStorage = ()=>{
    const storageId = document.getElementById('storageId')
    const userId = storageId.value
    const storagePassword = document.getElementById('storagePassword')
    const userPass = storagePassword.value

    // add to localStorage
        if (userId && userPass){
            localStorage.setItem(userId,userPass)
        }else{
            alert('empty value ERROR! ')
        }
    

    storageId.value ='';
    storagePassword.value ='';

}

