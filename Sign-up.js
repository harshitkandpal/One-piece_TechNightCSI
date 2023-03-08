
// global variable declarations
let names = document.getElementById("Name-field");
let title = document.getElementById("title");
let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let forget = document.getElementById("Forget");

// triggers when sign in is clicked
signIn.onclick = function signin(){
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (title.innerHTML=="Sign Up") {
        names.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signIn.classList.remove("disabled");
        signUp.classList.add("disabled");
        forget.classList.remove("hide");
    } else {
        if (email==''|| password=='') {
            alert("Please enter all information");
        } else {
             window. open("dashboard.html","_self");
        }
    }
}


// triggers when sign in is clicked
signUp.onclick = function signin(){
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (title.innerHTML=="Sign In") {
        names.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signIn.classList.add("disabled");
        signUp.classList.remove("disabled");
        forget.classList.add("hide");
    } else {
        if (email==''|| password==''|| Name=='') {
            alert("Please enter all information");
        } else {
            window. open("dashboard.html","_self");
        }
    }
}


