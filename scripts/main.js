let sideBar = document.querySelector("#sideBar");
let main = document.querySelector("#main");

function toggleNav(){
    if((sideBar.style.width == "0px" || sideBar.style.width == "") && (main.style.marginLeft == "0px" || main.style.marginLeft == "") ){
        sideBar.style.width = "250px";
        main.style.marginLeft = "250px";
    }else{
        sideBar.style.width = "0px";
        main.style.marginLeft = "0px";
    }
}


