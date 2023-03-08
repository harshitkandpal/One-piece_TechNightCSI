
function changeTag(ID){
    switch (ID) {
        case "a":
            document.getElementById(ID).classList.add("highlight");
            document.getElementById("b").classList.remove("highlight");
            document.getElementById("c").classList.remove("highlight");
            document.getElementById("d").classList.remove("highlight");
            break;
        case "b":
            document.getElementById(ID).classList.add("highlight");
            document.getElementById("a").classList.remove("highlight");
            document.getElementById("c").classList.remove("highlight");
            document.getElementById("d").classList.remove("highlight");
            break;
        case "c":
            document.getElementById(ID).classList.add("highlight");
            document.getElementById("a").classList.remove("highlight");
            document.getElementById("b").classList.remove("highlight");
            document.getElementById("d").classList.remove("highlight");
            break;
        case "d":
            document.getElementById(ID).classList.add("highlight");
            document.getElementById("a").classList.remove("highlight");
            document.getElementById("b").classList.remove("highlight");
            document.getElementById("c").classList.remove("highlight");
            break;
        default:
            break;
    }
}