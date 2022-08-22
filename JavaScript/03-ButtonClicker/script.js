function toggleLogin(loginBtn){
    if(loginBtn.innerText === "Login"){
        loginBtn.innerText = "Logout"
    }
    else{
        loginBtn.innerText = "Login"
    }
}

function removeBtn(definition){
    definition.remove();
}