const card = document.getElementById("card");
const body = document.querySelector("body");


function exit() {
    
    card.style.visibility = "hidden";
    body.classList.add("body");
    body.innerHTML= "Thanks for registering";
    var input = document.querySelectorAll("input");
    for(let i=0; i<input.length; i++){
        if(input[i].value===''){
            alert("Please fill all fields")
        }
    }
}

function checkPass() {
    var password =document.getElementById("password").value;
    var confirmPass =document.getElementById("confirmPass").value;
    if(password!=confirmPass){
        
        window.alert("Your password is not matching.");
        location.reload();
    }
}
