const logo = document.querySelector(".logo");

setInterval(function(){

    if(logo.style.color === "rgb(0, 184, 148)"){
        logo.style.color = "black";
    } else {
        logo.style.color = "#00b894";
    }

}, 1000);