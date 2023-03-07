let names = document.getElementById("Name-field");
let title = document.getElementById("title");
let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");


signIn.onclick = function signin(){
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (title.innerHTML=="Sign Up") {
        names.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signIn.classList.remove("disabled");
        signUp.classList.add("disabled");
    } else {
        if (email==''|| password=='') {
            alert("Please enter all information");
        } else {
            window. open("home.html","_self");
        }
    }
}


signUp.onclick = function signin(){
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (title.innerHTML=="Sign In") {
        names.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signIn.classList.add("disabled");
        signUp.classList.remove("disabled");
    } else {
        if (email==''|| password==''|| Name=='') {
            alert("Please enter all information");
        } else {
            window. open("home.html","_self");
        }
    }
}

