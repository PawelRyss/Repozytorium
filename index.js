var saintswitch = document.getElementById("saintswitch");
var tree = document.getElementById("tree");
var snow = document.getElementById("snow");
saintswitch.onclick = function (){
    document.body.classList.toggle("sainttheme");
    if(document.body.classList.contains("sainttheme")){
        tree.style.display="block";
        snow.style.display="flex";
    }
    else{
        tree.style.display="none";
        snow.style.display="none";
    }
}